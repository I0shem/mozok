import React, { useState, useEffect } from "react";
import s from "./ProductPage.module.css";
import Card from "../cards/card";
import ReactPaginate from "react-paginate";
import MongoDBDataFetcher from "../useData";
import MyFilter from "../Filter/MyFilter";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProductModalWindow from "../ProductModalWindow/ProductModalWindow.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import LoadingLogo from "../LoadingLogo/LoadingLogo";
const ProductPage = ({
  setProductsToCompare,
  productsToCompare,
  basketProducts,
  setBasketProducts,
}) => {
  const itemsPerPage = 20;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [filters, setFilters] = useState({});
  const [filterOptions, setFilterOptions] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const { productName } = useParams();
  const data = MongoDBDataFetcher(productName);
  const [logo, setLogo] = useState(true);
  useEffect(() => {
    setLogo(true);
    if (!data.length) return;
    let filteredData = data.filter((item) => {
      if (!item.title.toLowerCase().includes(searchQuery.toLowerCase()))
        return false;
      for (const [key, value] of Object.entries(filters)) {
        if (item.characteristics[key] !== value) return false;
      }
      return true;
    });

    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
    setCurrentItems(filteredData.slice(itemOffset, itemOffset + itemsPerPage));

    const updatedFilterOptions = {};
    const characteristics = data[0]?.characteristics || {};
    for (const key in characteristics) {
      updatedFilterOptions[key] = {
        key,
        values: getUniqueFilterOptions(filteredData, key),
      };
    }
    setFilterOptions(updatedFilterOptions);
    setTimeout(() => {
      setLogo(false);
    }, 2000);
  }, [data, filters, itemOffset, searchQuery]); // Added searchQuery to dependency array

  const getUniqueFilterOptions = (currentData, filterKey) => {
    const uniqueOptions = new Set();
    currentData.forEach((item) =>
      uniqueOptions.add(item.characteristics[filterKey])
    );
    return Array.from(uniqueOptions);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchQuery(""); // Clear search when clearing filters
  };
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };
  const imageVariants = {
    open: {
      opacity: 1,
      y: "0vh",
    },
    closed: { opacity: 0, y: "-10vh" },
  };
  const ModalInfoVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: { opacity: 0, x: "10%" },
  };
  const [selectedItem, setSelectedItem] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const CharacteristicsTable = (characteristics) => (
    <motion.table variants={ModalInfoVariants}>
      {Object.entries(characteristics).map(([key, value]) => (
        <tr key={key}>
          <th>{key}</th>
          <td>{value}</td>
        </tr>
      ))}
    </motion.table>
  );
  const closeModalWindow = () => {
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    main.style.paddingRight = "0px";
    body.style.overflow = "auto";
    setOpenModal(null);
  };
  const textColor = (item) => {
    if (item.hot === true) {
      return (
        <>
          <div onClick={(e) => e.stopPropagation()}>
            <div
              className={s.price}
              style={{ color: "red" }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className={s.price}> Ціна: {item.price} грн.</h3>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className={s.price} onClick={(e) => e.stopPropagation()}>
          Ціна: {item.price} грн.
        </div>
      );
    }
  };
  const [userId, setUserId] = useState([]);
  const auth = getAuth();
  const [likedProducts, setLikedProducts] = useState([]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        const endpoint = `https://eu-west-2.aws.data.mongodb-api.com/app/mozok-store-yrvzc/endpoint/getlikedItems`;
        setUserId(u.uid);
        axios
          .get(endpoint, {
            params: { userId: u.uid },
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log("API response data:", response.data);

            if (response.data.error) {
              console.log(response.data.error);
            } else {
              setLikedProducts(response.data);
            }
          })
          .catch((err) => {
            console.error("API Error:", err);
            console.error("Error Details:", err.response?.data);
          })
          .finally(() => {});
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {logo ? (
        <LoadingLogo />
      ) : (
        <>
          <div className={s.productPageContent}>
            <input
              type="text"
              placeholder="Пошук товарів..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={s.searchInput}
            />
            <div className={s.MyFilters}>
              {Object.keys(filters).length > 0 && (
                <>
                  <h4>Обрані фільтри:</h4>
                  {Object.entries(filters).map(([key, value], index) => (
                    <div className={s.activeFilter} key={index}>
                      {key}: {value}
                    </div>
                  ))}
                  <button
                    className={s.clearFiltersButton}
                    onClick={handleClearFilters}
                  >
                    Скинути фільтри
                  </button>
                </>
              )}
              <p>Фільтри:</p>
              {Object.keys(filterOptions).map((key) => (
                <MyFilter
                  key={key}
                  filterKey={key}
                  uniqueOptions={filterOptions[key].values}
                  onChange={handleFilterChange}
                  disabled={!!filters[key]}
                />
              ))}
            </div>
            <div className={s.cards}>
              {currentItems.map((item) => (
                <Card
                  item={item}
                  setSelectedItem={setSelectedItem}
                  setOpenModal={setOpenModal}
                  likedProducts={likedProducts}
                  userID={userId}
                  setProductsToCompare={setProductsToCompare}
                  productsToCompare={productsToCompare}
                  basketProducts={basketProducts}
                  setBasketProducts={setBasketProducts}
                />
              ))}{" "}
            </div>{" "}
            <div className={s.paginationContainer}>
              <ReactPaginate
                nextLabel=">"
                onPageChange={(event) =>
                  setItemOffset(event.selected * itemsPerPage)
                }
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName={s.pageItem}
                pageLinkClassName={s.pageLink}
                previousClassName={s.prevLink}
                previousLinkClassName={s.prevLink}
                nextClassName={s.nextLink}
                nextLinkClassName={s.nextLink}
                breakLabel="..."
                breakClassName={s.pageItem}
                breakLinkClassName={s.pageLink}
                containerClassName={s.pagination}
                activeClassName={s.active}
                renderOnZeroPageCount={null}
              />
            </div>
            <AnimatePresence>
              {openModal && (
                <ProductModalWindow
                  closeModalWindow={closeModalWindow}
                  modalVariants={modalVariants}
                  imageVariants={imageVariants}
                  textColor={textColor}
                  selectedItem={selectedItem}
                  CharacteristicsTable={CharacteristicsTable}
                />
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;

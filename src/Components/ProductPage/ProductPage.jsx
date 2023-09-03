import React, { useState, useEffect } from "react";
import s from "./ProductPage.module.css";
import Card from "../cards/card";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";

const ProductPage = () => {
  const { productName } = useParams();
  const itemsPerPage = 20;

  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://eu-west-2.aws.data.mongodb-api.com/app/mozok-store-yrvzc/endpoint/${productName}`
      );
      setPageCount(Math.ceil(response.data.length / itemsPerPage));
      const newCurrentItems = response.data.slice(
        itemOffset,
        itemOffset + itemsPerPage
      );
      setCurrentItems(newCurrentItems);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function handleSearch() {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
    const newCurrentItems = filteredData.slice(
      itemOffset,
      itemOffset + itemsPerPage
    );
    setCurrentItems(newCurrentItems);
  }

  useEffect(() => {
    if (!searchQuery && !itemOffset) {
      fetchData();
    }
    handleSearch();
  }, [productName, itemOffset, searchQuery]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={s.productPageContent}>
      <input
        type="text"
        placeholder="Пошук товврів..."
        value={searchQuery}
        onChange={handleSearchChange}
        className={s.searchInput}
      />
      <div className={s.cards}>
        {currentItems.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
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
  );
};

export default ProductPage;

import React from "react";
import s from "./Comparison.module.css";

const Comparison = ({
  productsToCompare,
  showComparison,
  setShowComparison,
  setProductsToCompare,
}) => {
  const getCommonCharacteristics = () => {
    if (productsToCompare.length === 0) return [];

    const allCharacteristicKeys = productsToCompare.map((product) =>
      Object.keys(product.characteristics)
    );

    const commonKeys = allCharacteristicKeys.reduce((common, keys) =>
      common.filter((key) => keys.includes(key))
    );

    return {
      commonKeys,
      products: productsToCompare.map((product) => {
        return {
          ...product,
          characteristics: Object.fromEntries(
            Object.entries(product.characteristics).filter(([key]) =>
              commonKeys.includes(key)
            )
          ),
        };
      }),
    };
  };
  const { commonKeys, products } = getCommonCharacteristics();
  if (!showComparison) {
    return null;
  }
  const hasDifferingValues = (key, products) => {
    const allValuesForKey = products.map(
      (product) => product.characteristics[key]
    );
    return new Set(allValuesForKey).size > 1;
  };
  const removeItemFromComparison = (indexToRemove) => {
    const newProductsToCompare = productsToCompare.filter(
      (_, index) => index !== indexToRemove
    );
    setProductsToCompare(newProductsToCompare);

    if (newProductsToCompare.length < 2) {
      setShowComparison(false);
    }
  };

  return (
    <div className={s.ComparisonModal} onClick={() => setShowComparison(false)}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setShowComparison(false)}
          className={s.closeButton}
        >
          X
        </button>
        <table className={s.comparisonTable}>
          <thead>
            <tr>
              <th>Характеристики: </th>
              {products.map((product, index) => (
                <th className={s.productTitle} key={index}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={s.productImage}
                  />
                  <p>{product.title}</p>
                  <button
                    onClick={() => removeItemFromComparison(index)}
                    className={s.removeButton}
                  >
                    Видалити з порівняння
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {commonKeys.map((key) => (
              <tr key={key}>
                <td className={s.tableKey}>{key}</td>
                {products.map((product, index) => (
                  <td
                    key={index}
                    className={
                      hasDifferingValues(key, products) ? s.differentValue : ""
                    }
                  >
                    {product.characteristics[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;

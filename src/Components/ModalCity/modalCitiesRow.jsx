import React from "react";

const ModalCitiesRow = (c1, c2, c3, setCity) => {
  return (
    <>
      <td onClick={(e) => setCity(e.target.textContent)}>{c1}</td>
      <td onClick={(e) => setCity(e.target.textContent)}>{c2}</td>
      <td onClick={(e) => setCity(e.target.textContent)}>{c3}</td>
    </>
  );
};

export default ModalCitiesRow;

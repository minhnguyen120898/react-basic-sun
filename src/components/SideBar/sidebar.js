import React, { useState, useEffect } from "react";
import RefineByBrand from "./refineByBrand";
import RefineByPrices from "./refineByPrice";
import RefineByRatings from "./refineByRating";
import RefineByType from "./refineByType";
import ShowResultFor from "./showResult";

function Sidebar(props) {
  const {
    onTitleSelect,
    onTypeSelect,
    onByTypeSelect,
    onBrandSelect,
    onRatingSelect,
    onPrices,
    onClearFilter,
    valueBrand,
    valueRating,
    valueTitle,
    valueType,
    valueByType,
    priceFrom,
    priceTo,
    countProducts,
  } = props;

  const [types, setTypes] = useState([]);

  const [valueIdTitle, setvalueIdTitle] = useState("");
  const [valueIdType, setvalueIdType] = useState("");

  useEffect(() => {
 
    async function fetchTypeData(){  
      try {
        let url = "http://localhost:3333/types";
        const response = await fetch(url);
        const responseJSON = await response.json();

        setTypes(responseJSON);  

      } catch (error) {
        console.log("Fail to fetch:"+ error.message);
      }       
    }

    fetchTypeData();
  }, []);

  const handleIdTitle = (id) => {
    setvalueIdTitle(id);
  };

  const handleIdType = (id) => {
    setvalueIdType(id);
  };

  return (
    <div className="menu">
      <div className="menu__clear">
        {valueBrand.length > 0 ||
        priceFrom ||
        priceTo ||
        valueByType.length > 0 ||
        valueRating ||
        valueTitle ||
        valueType ? (
          <button onClick={() => onClearFilter()}>
            Clear all filter
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="menu__result">
        <p className="menu__title-1">Show results for</p>
        <ShowResultFor
          types={types}
          handleIdTitle={handleIdTitle}
          handleIdType={handleIdType}
          handleTitle={onTitleSelect}
          handleType={onTypeSelect}
          valueIdTitle={valueIdTitle}
          valueIdType={valueIdType}
          valueTitle={valueTitle}
          valueType={valueType}
        />
      </div>
      <hr></hr>
      <div className="menu__refine">
        <p className="menu__title-1">Refine by</p>
        <p className="menu__title-2">Type</p>
        <RefineByType
          types={types}
          valueIdTitle={valueIdTitle}
          valueByType={valueByType}
          handleByType={onByTypeSelect}
          countProducts={countProducts}
        />
        <p className="menu__title-2">Brand</p>
        <RefineByBrand
          types={types}
          valueIdTitle={valueIdTitle}
          valueIdType={valueIdType}
          valueByBrand={valueBrand}
          handleByBrand={onBrandSelect}
          countProducts={countProducts}
        />
        <p className="menu__title-2">Ratings</p>
        <RefineByRatings
          handleByRatings={onRatingSelect}
          valueByRatings={valueRating}
        />
        <p className="menu__title-2">Prices</p>
        <RefineByPrices
          handleByPrices={onPrices}
          valueByPricesStart={priceFrom}
          valueByPricesEnd={priceTo}
        />
      </div>
      <hr></hr>
      <div className="menu__text">Data courtesy of Best Buy</div>
    </div>
  );
}

export default Sidebar;


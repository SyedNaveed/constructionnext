import React, { useEffect, useState, useRef } from "react";
import Equipments from "../Common/Equipments";
import List from "./List";
import Filters from "./Filters";
import EmailBlock from "./EmailBlock";
import EmailBlockv from "./EmailBlockv";
import "./Listing_Page.css";
import { useReactToPrint } from 'react-to-print';

const Index = ({
  city,
  state,
  country,
  condition,
  listing_type,
  manufacturer,
  category,
}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div id="header-area-space"></div>
      <div className="product-listing-page">
        <div className=" bg-common-style">
          <div className=" ">
            <Equipments />
          
          </div>
          <div className="container">
            <div className="filter-listing-block  ">
              <Filters
                city_trems={city}
                state_trems={state}
                country_trems={country}
                condition_trems={condition}
                listing_type_trems={listing_type}
                manufacturer_trems={manufacturer}
                category_trems={category}
              />
              <List  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

import React, { useState } from "react";
import CardsData from "./CardsData";
import ProductChart from "./ProductChart";

const ParentComponent = ({ productsData }) => {
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    const handleFilter = (size) => {
        const filteredData = productsData.filter(eachObj => eachObj.size === size);
        setFilteredProducts(filteredData);
    };

    return (
        <div>
            <ProductChart handleFilter={handleFilter} />
            <CardsData filteredProducts={filteredProducts} />
        </div>
    );
};

export default ParentComponent;
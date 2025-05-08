import React from "react"
import HeaderComponent from "./HeaderComponent"
import CardsData from './CardsData'
import ProductChart from "./ProductChart"

const EcommerceApp = ({productsData}) => {
    return(
        <div>
            <HeaderComponent productsData={productsData}/>
            <div className="completeApp">
                <ProductChart productsData={productsData}/>
                <CardsData productsData={productsData}/>
            </div>
            <hr />
        </div>
    )
}

export default EcommerceApp
import React from "react"
import HeaderComponent from "./HeaderComponent"
import ParentComponent from "./ParentComponent"

const EcommerceApp = ({productsData}) => {
    return(
        <div>
            <HeaderComponent />
            <div className="completeApp">
                <ParentComponent productsData={productsData} />
            </div>
            <hr />
        </div>
    )
}

export default EcommerceApp
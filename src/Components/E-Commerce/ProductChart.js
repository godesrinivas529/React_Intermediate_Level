import React, {useState} from "react"
const ProductChart = ({productsData}) => {

    
    const [sizeRelatedData, setSizeRelatedData] = useState(productsData)
    const [result, setResult] = useState(false)

    const handleXS = (e) => {
        e.preventDefault();
        const filteredData = productsData.filter(eachObj => eachObj.size === "XS");
        setSizeRelatedData(filteredData)
        setResult(true)
    }

    const handleS = (e) => {
        e.preventDefault();
        const filteredData = productsData.filter(eachObj => eachObj.size === "S");
        setSizeRelatedData(filteredData)
        setResult(true)
    }
    
    const handleM = (e) => {
        e.preventDefault();
        const filteredData = productsData.filter(eachObj => eachObj.size === "M");
        setSizeRelatedData(filteredData)
        setResult(true)
    }

    const handleL = (e) => {
        e.preventDefault();
        const filteredData = productsData.filter(eachObj => eachObj.size === "L");
        setSizeRelatedData(filteredData)
        setResult(true)
    }

    const handleXL = (e) => {
        e.preventDefault();
        const filteredData = productsData.filter(eachObj => eachObj.size === "XL");
        setSizeRelatedData(filteredData)
        setResult(true)
    }

    const handleXXL = (e) => {
        e.preventDefault();
        const filteredData = productsData.filter(eachObj => eachObj.size === "XXL");
        setSizeRelatedData(filteredData)
        setResult(true)
    }

    return(
        
        <div className="prodChart">
            <h3>Sizes:</h3>
            <div className="chartSizes">
                <button onClick={handleXS} className="buttonRadius">XS</button>
                <button onClick={handleS} className="buttonRadius">S</button>
                <button onClick={handleM} className="buttonRadius">M</button>
                <button onClick={handleL} className="buttonRadius">L</button>
                <button onClick={handleXL} className="buttonRadius">XL</button>
                <button onClick={handleXXL} className="buttonRadius">XXL</button>
            </div>
            {result && sizeRelatedData.map((eachItem) => {
                    const {id, currency, image, title, price} = eachItem;
                    return <div className="individualCard" key={id}>
                                <img src={image} alt={title}/>
                                <h4>{title}</h4>
                                <b>----</b>
                                <h4>{currency} {price}</h4>
                        </div>
                })}
            
        </div>
    )
}

export default ProductChart
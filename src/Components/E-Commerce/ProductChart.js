
const ProductChart = ({ handleFilter }) => {
    return (
        <div className="prodChart">
            <h3>Sizes:</h3>
            <div className="chartSizes">
                <button onClick={() => handleFilter("XS")} className="buttonRadius">XS</button>
                <button onClick={() => handleFilter("S")} className="buttonRadius">S</button>
                <button onClick={() => handleFilter("M")} className="buttonRadius">M</button>
                <button onClick={() => handleFilter("L")} className="buttonRadius">L</button>
                <button onClick={() => handleFilter("XL")} className="buttonRadius">XL</button>
                <button onClick={() => handleFilter("XXL")} className="buttonRadius">XXL</button>
            </div>
        </div>
    );
};

export default ProductChart;
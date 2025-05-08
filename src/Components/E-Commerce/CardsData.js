const CardsData = ({filteredProducts}) => {

    const addToCart = (e) => {
        e.preventDefault();
        alert('Added to cart')
    }
    return(
        <div>
            <div className="cardDetails">
                {filteredProducts.map((eachItem) => {
                    const {id, currency, image, title, price} = eachItem;
                    return <div className="individualCard" key={id}>
                                <img src={image} alt={title}/>
                                <h4>{title}</h4>
                                <b>----</b>
                                <h4>{currency} {price}</h4>
                                <button onClick={addToCart} className="cardButton">Add to cart</button>
                        </div>
                        })
            }
            </div>
        </div>
    )
}

export default CardsData



   
       


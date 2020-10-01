import React from 'react';

function Product(props) {
    const { product } = props;
    
    function printProductRatings(qualityRatings) {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if(i < qualityRatings){
                stars.push(<span className="fa fa-star" key={i}/>);
            }else {
                stars.push(<span className="fa fa-star-o" key={i}/>);
            }          
        }
        return stars;
    }
    
    return (
        <div className="product">
            <div className="product__img">
                <img src={product.image} alt="" />
            </div>
            <div className="product__detail">
                <div className="product__detail__name">{product.name}</div>
                <div className="product__detail__type">{product.type}</div>
                <div className="product__detail__price">${product.price}</div>
                <div className="product__detail__rating">
                    {printProductRatings(product.ratings)}
                </div>
            </div>
        </div>
    );
}

export default Product;
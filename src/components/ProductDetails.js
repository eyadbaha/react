import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);

    var url = "https://fakestoreapi.com/products/" + id;

    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(
                (result) => {
                    console.log(result);
                    setAllProducts(result);
                    setIsLoading(false);
                }
            )
    }, [isLoading]);


    return (
        <div className='product'>
            <div className='product-img'><img className='product-img' src={allProducts.image}/></div>
           <table className='product-table'>
                <caption>{allProducts.title}</caption>
                <tr>
                    <td>Description:</td>
                    <td>{allProducts.description}</td>
                </tr>
                <tr>
                    <td>Price:</td>
                    <td>${allProducts.price}</td>
                </tr>
                <tr>
                    <td>Category:</td>
                    <td>{allProducts.category}</td>
                </tr>
            </table> 
        </div>
        
    )
}

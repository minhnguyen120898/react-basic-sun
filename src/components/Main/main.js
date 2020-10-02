import React, { useState,useEffect } from 'react';
import queryString from 'query-string';
import Products from './products';
import Pagination from './pagination';
import TopResult from './topResult';

function Main(props) {
    const {valueTitle,valueType,valueByType,valueBrand,valueRate,priceFrom,priceTo,valueSearch,onHandleProducts}= props;

    const [products, setProducts] = useState([]);
    const [currentPage,setcurrentPage] = useState(1);
    const [productsPerPage,setProductsPerPage] = useState(8);

    const [sort,setSort] = useState("");

    useEffect(() => { 
        let paramURL = queryString.stringify(sort);

        paramURL += (valueSearch ? (`&name_like=${valueSearch}&_page=1`) : ""); 
        paramURL += (valueType ? (`&type=${valueType}`) : ""); 
        paramURL += (valueByType.length !== 0 ? (`&byType=${valueByType}`) : ""); 
        paramURL += (valueBrand.length !== 0 ? (`&brand=${valueBrand}`) : ""); 
        paramURL += (valueRate ? (`&ratings=${valueRate}`) : ""); 
        paramURL += (priceFrom ? (`&price_gte=${priceFrom}`) : ""); 
        paramURL += (priceTo ? (`&price_lte=${priceTo}`) : ""); 

        async function fetchProduct(){            
            let URL = `http://localhost:3333/products?${paramURL}`;
            const response = await fetch(URL);
            const responseJSON = await response.json();

            setProducts(responseJSON);
        } 

        fetchProduct();
    },[sort,valueTitle,valueType,valueByType,valueBrand,valueRate,priceFrom,priceTo,valueSearch]);
   
    useEffect(() => {
        onHandleProducts(products);
    }, [products]);

    const indexOfLastProduct = currentPage*productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);

    const handlePageChange = (value) => {
        setcurrentPage(value);
    }

    const handleSort = (value) => {
        setSort({
            _sort: "price",
            _order : value
        })
    }
    return (
        <div className="main">
            <TopResult result = {products.length} onHandleSort={handleSort}/>
            <Products products = {currentProducts}/>
            <Pagination currentPage = {currentPage}
                        productsPerPage = {productsPerPage}
                        totalProducts = {products.length}
                        onPageChange = {handlePageChange}/>
        </div>
    );
}

export default Main;
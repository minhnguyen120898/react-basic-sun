import React, { useState,useEffect } from 'react';
import queryString from 'query-string';
import Products from './products';
import Pagination from './pagination';
import TopResult from './topResult';

function Main(props) {
    const {valueTitle,valueType,valueByType,valueBrand,valueRate,priceFrom,priceTo,valueSearch,onHandleProducts}= props;

    const [products, setProducts] = useState([]);
    const [pagination,setPagination] = useState({
        _page: 1,
        _limit : 8,
    });



    const [filters,setFilters] = useState();

    useEffect(() => { 
        let paramURL = queryString.stringify(filters);

        paramURL += (valueSearch ? (`&name_like=${valueSearch}`) : ""); 
        paramURL += (valueType ? (`&type=${valueType}`) : ""); 
        paramURL += (valueByType ? (`&byType=${valueByType}`) : ""); 
        paramURL += ((valueBrand == []) ? (`&brand=${valueBrand}`) : ""); 
        paramURL += (valueRate ? (`&ratings=${valueRate}`) : ""); 
        paramURL += (priceFrom ? (`&price_gte=${priceFrom}`) : ""); 
        paramURL += (priceTo ? (`&price_lte=${priceTo}`) : ""); 

        async function fetchProduct(){
            
            let URL = `http://localhost:3333/products?${paramURL}`;
            console.log(URL);
            const response = await fetch(URL);
            const responseJSON = await response.json();
            console.log({responseJSON});

            setProducts(responseJSON);
        } 

        fetchProduct();
    },[filters,valueTitle,valueType,valueByType,valueBrand,valueRate,priceFrom,priceTo,valueSearch]);
   
    useEffect(() => {
        onHandleProducts(products);
    }, [products]);

    const handlePageChange = (value) => {
        setFilters({
            ...pagination,
            _page : value
        });
    }

    const handleSort = (value) => {
        setFilters({
            ...filters,
            _sort: "price",
            _order : value
        })
    }
    return (
        <div className="main">
            <TopResult result = {products.length} onHandleSort={handleSort}/>
            <Products products = {products}/>
            <Pagination pagination={pagination} 
                        totalProducts={products.length}
                        onPageChange={handlePageChange}/>
        </div>
    );
}

export default Main;
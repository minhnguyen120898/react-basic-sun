import React from 'react';

function Pagination(props) {
    const {pagination,onPageChange,totalProducts} = props;
    const {_page, _limit} = pagination;
    const totalPages = Math.ceil(totalProducts / _limit);
    console.log(totalProducts);
    const pageNumber = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumber.push(i+1);
    }

    return (
        <ul className="pagination">
            <li>
                <button
                    disabled = {_page <=1}
                    onClick = {() => onPageChange(_page-1)}
                >Prev</button>
            </li>
            {pageNumber.map((item,i) => (
                <li key={i} 
                    className = {(_page === item) ? "active" : ""}
                    onClick = {() => onPageChange(item)} 
                >{item}</li>
            ))}
            <li>
                <button
                    disabled = {_page >= totalPages}
                    onClick = {() => onPageChange(_page+1)}
                >Next</button>
            </li>
        </ul>
    );
}

export default Pagination;
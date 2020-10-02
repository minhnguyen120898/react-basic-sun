import React from 'react';

function Pagination(props) {
    const {currentPage,productsPerPage,onPageChange,totalProducts} = props;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    const pageNumber = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumber.push(i+1);
    }

    return (
        <ul className="pagination">
            <li>
                <button
                    disabled = {currentPage <=1}
                    onClick = {() => onPageChange(currentPage-1)}
                >Prev</button>
            </li>
            {pageNumber.map((item,i) => (
                <li key={i} 
                    className = {(currentPage === item) ? "active" : ""}
                    onClick = {() => onPageChange(item)} 
                >{item}</li>
            ))}
            <li>
                <button
                    disabled = {currentPage >= totalPages}
                    onClick = {() => onPageChange(currentPage+1)}
                >Next</button>
            </li>
        </ul>
    );
}

export default Pagination;
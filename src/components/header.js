import React, { useRef } from 'react';

function Header(props){ 
    const { onValueSearchChange } = props;
    
    const typingTimeOutRef = useRef(null);
    const handleValueSearchChange = (value) => {

        if(typingTimeOutRef.current){
            clearTimeout(typingTimeOutRef.current);
        }

        typingTimeOutRef.current = setTimeout(() => {
            onValueSearchChange(value);
        },300); 
    }

    return (  
        <header className="header">
            <a href="./">
                <img src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png" className="header__img" alt="img-header-top"/>
            </a>
            <a href="./" className="header__logo">amazing</a>
            <div className="header__input-group">
                <div className="header__input-group__search">
                    <input type="text" placeholder="Search a product"
                        onChange={(value) => handleValueSearchChange(value.target.value) }
                    />
                </div>
                <span className="header__input-group__btn">
                    <button className="btn btn-default">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </header>
    );   
}
 
export default Header;
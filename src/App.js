import React, { useState } from 'react';
import "./scss/style.scss";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Header from './components/header';
import Main from './components/Main/main';
import Sidebar from './components/SideBar/sidebar';

function App() {
  const [valueSearch,setValueSearch] = useState("");
  const [valueTitle,setValueTitle] = useState("");
  const [valueType, setValueType] = useState("");
  const [valueByType, setValueByType] = useState([]);
	const [valueBrand, setValueBrand] = useState([]);
	const [valueRate, setValueRate] = useState("");
	const [priceFrom, setPriceFrom] = useState("");
	const [priceTo, setPriceTo] = useState("");
  const [countProducts, setCountProducts] = useState("");
  
  const handleValueSearchChange = (value) => {
    setValueSearch(value);
  }

  const handleTitle = (title) => {
    setValueTitle(title);
  };

	const handleTypeSelect = (value) => {
		setValueType(value);
	};

  const handleByTypeSelect = (value) => {
    setValueByType(value);
  }

	const handleBrandSelect = (value) => {
    setValueBrand(value);
	};

	const handleRateSelect = (value) => {
		setValueRate(value);
	};

	const handlePrices = (start,end) => {
    setPriceFrom(start);
    setPriceTo(end);
	};

	const handleClearFilter = () => {
    setValueType("");
    setValueTitle("");
    setValueByType("");
		setValueBrand([]);
		setValueRate("");
		setPriceFrom("");
		setPriceTo("");
	};

  const handleProducts = (products) => {
    setCountProducts(products);
  }

  return (
    <div>
        <Header onValueSearchChange = {handleValueSearchChange}/>
        <Sidebar 
            onTitleSelect = {handleTitle}
            onTypeSelect = {handleTypeSelect}
            onByTypeSelect = {handleByTypeSelect}
            onBrandSelect= {handleBrandSelect}
            onRatingSelect={handleRateSelect}
            onPrices = {handlePrices}
            onClearFilter = {handleClearFilter}
            valueTitle = {valueTitle}
            valueType = {valueType}
            valueByType = {valueByType}
            valueBrand = {valueBrand}
            valueRating = {valueRate}
            priceFrom = {priceFrom}
            priceTo = {priceTo}
            countProducts = {countProducts}
        />
        <Main 
            valueTitle = {valueTitle}
            valueType = {valueType}
            valueByType = {valueByType}
            valueBrand = {valueBrand}
            valueRate = {valueRate}
            priceFrom = {priceFrom}
            priceTo = {priceTo}
            valueSearch = {valueSearch}    
            countProducts = {countProducts}  
            onHandleProducts = {handleProducts}  
        />
    </div>    
  );
}
 
export default App;

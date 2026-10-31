import React from "react";
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props)=>{
    //use the props we are getting the product
    const{product}=props;
    return(
        <div className="breadcrum">
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon}  alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
{/* //product.category is a javascript variable 1.51*/}
        </div>
    )
}

export default Breadcrums
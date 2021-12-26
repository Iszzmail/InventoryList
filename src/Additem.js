import React, { useEffect, useState } from "react";
import "./style.css";

function Additem(props) {
  const [items, setItems] = useState({
    category: "Pant",
    productName: "Arrow",
    unit:'8',
    show:false
  });

  const getCategory = (e) => {
    setItems({
      ...items,
      category: e.target.value,
    });
  };
  const getProductName = (e) => {
    setItems({
      ...items,
      productName: e.target.value,
    });
  };

  const getProductUnit = (e) => {
    setItems({
      ...items,
      unit: e.target.value,
    });
  };

  const AddtoList=()=>{
    props.setData((prev)=>{
        return   [...prev,items]
      })
    props.products('productlist')
  }

 

  return (
    <div>
      <div className={"button"}>
        <p className={"fonts"}>Category</p>
        <select className={"dropdown"} name="Category" onClick={getCategory}>
          <option name="pant">Pant</option>
          <option name="dresses">Dresses</option>
          <option name="T-shirt">T-shirt</option>
        </select>
        <br />
        <label className={"input"}>Product Name</label>
        <input onChange={getProductName} type="text"  value={items.productName}></input>
        <br />
        <label  className={"input"}>Price Per Unit</label>
        <input onChange={getProductUnit} type="number" value={items.unit}></input>
        <br />
        <br />
        <button className={"input"} onClick={AddtoList}>Add Product</button>
      </div>
    </div>
  );
}

export default Additem;

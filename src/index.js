import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Additem from "./Additem";
import ListOfProduct from "./ProductList";

function App(props) {
  const [selectView, setSelectView] = useState();
  const [ProductList, SetproductList] = useState([]);
  const [temp,SetTemp]=useState([])

  const chooseView = (e) => {
    if (e === "additem") {
      setSelectView("additem");
    } else if (e === "productlist") {
      setSelectView("productlist");
    } else {
      return null;
    }
  };

  const EditedItems = (p, i) => {

console.log(p)

  };

  const getEditedItems=(a)=>{
      SetTemp({...a})
  }
  console.log(temp)

  return (
    <div>
      <h1 className={"header"}>Inventory</h1>
      <button className={"button"} onClick={() => chooseView("additem")}>
        Add Product
      </button>
      <button className={"button"} onClick={() => chooseView("productlist")}>
        Products List
      </button>
      {selectView === "additem" ? (
        <Additem products={setSelectView} setData={SetproductList} />
      ) : selectView === "productlist" ? (
        <ListOfProduct
          list={ProductList}
          receive={ProductList}
          getEditedPosition={EditedItems}
          edited={getEditedItems}
        openEditMenu={SetproductList}
        />
      ) : null}
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));

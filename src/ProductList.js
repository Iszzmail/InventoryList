import React, { useEffect, useState } from "react";
import "./style.css";

function ListOfProduct(props) {
  const [isEdit, setEdit] = useState(false);
  const [editItems, SeteditItems] = useState(
    {
      category: "",
      productName: "",
      unit: "",
    },
  );
  const[index,GetIndex]=useState()

  const handleEdit = (index) => {
      setEdit(true)
      GetIndex(index)
console.log(props.list[index])
SeteditItems({
    ...props.list[index]
})
  }

  const EditSubmit=()=>{
      props.list[index].category=editItems.category
      props.openEditMenu(props.list)
      setEdit(false)
  }

  


  const newCategory = (e) => {
    SeteditItems({
      ...editItems,
      category: e.target.value,
    });
  };

  const newProductName = (e) => {
    SeteditItems({
      ...editItems,
      productName: e.target.value,
    });
  };

  const newUnit = (e) => {
    SeteditItems({
      ...editItems,
      unit: e.target.value,
    });
  };

  useEffect(() => {
    props.edited(editItems);
    console.log("---");
  }, [editItems]);

  return !isEdit ? (
    <div>
      <table className="tablee">
        <tr>
          <th>Product Name</th>
          <th>Unit</th>
          <th>Category</th>
        </tr>
        {props.list &&
          props.list.map((e, key) => {
            return (
              <tr>
                <td>{e.productName}</td>
                <td>{e.unit}</td>
                <td>{e.category}</td>
                <td>
                  <button onClick={()=>handleEdit(key)}>Edit</button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  ) : (
    <div>
      <select value={editItems.category} onChange={newCategory}>
        <option name="pant">Pant</option>
        <option name="dresses">Dresses</option>
        <option name="T-shirt">T-shirt</option>
      </select>

      <br />
      <label>Product Name</label>
      <input onChange={newProductName} value={editItems.productName}></input>
      <label>Price Per Unit</label>
      <input onChange={newUnit} value={editItems.unit}></input>
      <button onClick={EditSubmit}>Submit</button>
    </div>
  );
}

export default ListOfProduct;

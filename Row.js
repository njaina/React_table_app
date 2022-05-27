import React, { Component } from "react";


function Row ({product}) {
  return (
    <tr>
          <td>{product.Name}</td>
          <td>{product.Position}</td>
          <td>{product.Office}</td>
          <td>{product.Age}</td>
          <td>{product.StartDate}</td>
          <td>{product.Salary}</td>
    </tr>
  )
}
export default Row;
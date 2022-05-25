import React from "react";
import Row from "./Row";

const Tableau = ({products})=>{

    const rows = [];
    products.forEach ( product => {
        rows.push( <Row product={product} /> )
    });

    return(
        <>
            <table className="card-body" id="datatablesSimple">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                </tfoot>
                <tbody>
                    {/* {products.map(product => {
                        return(
                        <tr>
                            <td>{product.Name}</td>
                            <td>{product.Position}</td>
                            <td>{product.Office}</td>
                            <td>{product.Age}</td>
                            <td>{product.StarDate}</td>
                            <td>{product.Salary}</td>
                        </tr>)
                    })} */}
                    {rows}
                </tbody>
            </table>
        </>
    )
}
export default Tableau;
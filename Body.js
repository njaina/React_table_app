import React from "react";
import '../App.css';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
import FirstComponent from "./FirstComponent";
import SecondCompnent from "./SecondComponent";

const Body = () => {
  return(
  <div id="layoutSidenav">
    <FirstComponent/>
    <SecondCompnent/>
</div>
);
}
export default Body;
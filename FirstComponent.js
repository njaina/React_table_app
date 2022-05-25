import React from "react";
import '../App.css';
import Core from "./Core";
import Interface from "./Interface";
import Addons from "./Addons";
import Feet from "./Feet";

const FirstComponent = ()=>{
    return(
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <Core />
                        <Interface />
                        <Addons />
                    </div>
                </div>
                <Feet/>
            </nav>
        </div>
    );
}
export default FirstComponent;
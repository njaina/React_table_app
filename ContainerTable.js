import React, { Component } from "react";
import Tableau from "./Rows";

class ContainerTable extends Component {
    render(){
        const {products} = this.props
        return <Tableau products={products} />
    }
}

export default ContainerTable;
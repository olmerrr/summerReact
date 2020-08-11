import React,{Component} from "react";
import "./SearchPanel.css";
export default  class  SearchPanel extends Component{
    render() {
        return (
            <input placeholder ='search'
                   className="form-control search-input"
            />
        );
    }
}

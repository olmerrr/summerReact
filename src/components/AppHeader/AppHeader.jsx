import React from "react";
import "./AppHeader.css";
 const AppHeader = (props)=>{
        return (
            <div className="app-header">
                <h1>Todo - list app </h1>
                <p>{props.todo} more to do, {props.done} done</p>
            </div>

        );
    };
export  default  AppHeader;
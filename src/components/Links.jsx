import React from "react";

export default function Links(props) {
    return (
        <button className="link--btn">
            <h2 className="link--title">{props.item.title}</h2>
        </button>
        
    )
}
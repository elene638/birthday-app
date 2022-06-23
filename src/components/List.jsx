import React from "react";

function List (props) {
    return (
        <div key={props.id} className="person">
            <img alt="pic" src={props.img} />
            <div>
                <p>{props.name}</p>
                <p>{props.age}</p>
            </div>
        </div>
    )
}

export default List;
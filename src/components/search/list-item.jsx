import React from "react";

const ListItem = ({itemData}) => {
    return (
        <li>
            {itemData.name}
        </li>
    );
};

export default ListItem;
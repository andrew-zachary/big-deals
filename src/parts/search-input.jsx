import React from "react";

const SearchInput = ({setSearchStr}) => {
    let bounce = null;
    const inputHandler = (e)=>{
        clearTimeout(bounce);
        bounce = setTimeout(()=>{
            setSearchStr(e.target.value);
        }, 2000);
    };
    return (
        <input type="text" onChange={(e)=>inputHandler(e)} />
    );
};

export default SearchInput;
import React, { useState } from 'react';


const useDropDown = (label,defaultState,options)=>{
    const [state,setState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(" ","").toLowerCase()}`;
    const DropDown = ()=> (
        <label htmlFor={label}>
            {label}
        <select
        id={id}
        value ={state}
        onChange={e=>setState(e.target.value)}
        onBlur={e=>setState(e.target.value)}
        disabled={!options.length}
        >
            <option>All</option>
            {options.map(item=>(
                <option key={item}>{item}</option>
            ))}
        </select>
        </label>
    )
    return [state,DropDown,setState]
}

export default useDropDown;
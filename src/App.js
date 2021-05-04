import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';


export default function App(){
    return(
        <div>
            <h1>Adopt Me</h1>
            <SearchParams></SearchParams>
        </div>
    )
}

ReactDOM.render(<App></App>,document.getElementById('root'))
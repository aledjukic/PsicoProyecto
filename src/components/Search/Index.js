import React, {useState} from 'react'
import "./search.css"
const Search = () => {
     const [query, setquery] = useState("");


    return (
        <div className="app">
            <h1>Hola Mundo</h1>
            <form className="app_searchForm">
                <input type="text" placeholder="Psicologo" value={query} onChange={(e) => setquery(e.target.value)} />
                <input className="app_submit" type="submit" value="Search" />
            </form>
        </div>

    )
}

export default Search


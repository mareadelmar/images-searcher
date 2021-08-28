import { useState } from "react";
import "./App.css";
import "./assets/styles/index.css";
import SearchBar from "./components/SearchBar";

function App() {
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleSearch = (keyword) => {
        console.log(keyword);
        setSearchKeyword(keyword);
    };
    return (
        <div className="app container">
            <div className="search-container">
                <h1 className="lead text-center">Buscador de imágenes</h1>
                <SearchBar handleSearch={handleSearch} />
            </div>
        </div>
    );
}

export default App;

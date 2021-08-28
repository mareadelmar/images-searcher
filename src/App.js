import { useState, useEffect } from "react";
import "./App.css";
import "./assets/styles/index.css";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {
    const { REACT_APP_API_KEY } = process.env;

    const [searchKeyword, setSearchKeyword] = useState("");
    const [resultImages, setResultImages] = useState([]);

    useEffect(() => {
        const url = `https://pixabay.com/api/?key=${REACT_APP_API_KEY}&q=${searchKeyword}`;
        getData(url);
    }, [searchKeyword]);

    const getData = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.hits);
                setResultImages(data.hits);
            })
            .catch((err) => console.error(err));
    };

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
            <Results images={resultImages} />
        </div>
    );
}

export default App;

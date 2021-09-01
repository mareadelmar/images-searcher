import { useState, useEffect } from "react";
import "./assets/styles/index.css";
import "./index.css";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {
    const { REACT_APP_API_KEY } = process.env;

    const [searchKeyword, setSearchKeyword] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [resultImages, setResultImages] = useState([]);

    useEffect(() => {
        const url = `https://pixabay.com/api/?key=${REACT_APP_API_KEY}&q=${searchKeyword}&per_page=30&page=${currentPage}`;
        getData(url);
    }, [searchKeyword, REACT_APP_API_KEY, currentPage]);

    const getData = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.hits);
                setResultImages(data.hits);
            })
            .catch((err) => console.error(err));
    };

    const previousPage = () => {
        console.log("volver página");
        if (currentPage === 1) return null;
        setCurrentPage((prev) => prev - 1);
    };
    const nextPage = () => {
        console.log("pasar página");
        setCurrentPage((prev) => prev + 1);
    };

    const handleSearch = (keyword) => {
        console.log(keyword);
        setSearchKeyword(keyword);
        setCurrentPage(1);
    };
    return (
        <div className="app container">
            <div className="search-container">
                <h1 className="lead text-center">Buscador de imágenes</h1>
                <SearchBar handleSearch={handleSearch} />
            </div>
            <div className="row">
                <Results
                    images={resultImages}
                    previousPage={previousPage}
                    nextPage={nextPage}
                />
            </div>
        </div>
    );
}

export default App;

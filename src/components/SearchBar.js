import React, { Component } from "react";

class SearchBar extends Component {
    state = {
        keyword: "",
    };

    handleInputSeach = (e) => {
        this.setState({
            keyword: e.target.value,
        });
    };

    handleSubmitSearch = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.keyword);
        this.setState({
            keyword: "",
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmitSearch}>
                <div className="row flex justify-center">
                    <div className="form-group col-md-8">
                        <input
                            type="text"
                            className="form-control form-contro-lg"
                            placeholder="Buscar imagen..."
                            onChange={this.handleInputSeach}
                            value={this.state.keyword}
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <input
                            type="submit"
                            className="btn btn-primary btn-lg"
                            value="Buscar"
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;

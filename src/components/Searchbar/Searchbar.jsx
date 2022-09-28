import React, { Component } from 'react'

export default class Searchbar extends Component {
    state = {
        searchImage: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

        handleSubmit = (e) => {
        e.preventDefault();
        // const { searchImage } = this.state;
        this.props.onSubmit(this.state.searchImage);
        this.setState({
            searchImage: '',
        })
    };


  render() {
    return (
        <header className="searchbar">
            <form className="form" onSubmit={this.handleSubmit}>
                <button type="submit" className="button">
                <span className="button-label">Search</span>
                </button>

                <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name='searchImage'
                // value={this.state}
                onChange={this.handleChange}
                />
            </form>
        </header>
    )
  }
}

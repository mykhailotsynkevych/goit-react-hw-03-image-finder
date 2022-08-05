import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleNameChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

        if (this.state.query.trim() === '') {
      alert('Введите запрос.');
      return;
    }

     this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.pokemonName;
//     const nextName = this.props.pokemonName;

//     if (prevName !== nextName) {
//       this.setState();

//       setTimeout(() => {
//         api
//           .fetchPhotos(nextName)
//           .then(pokemon => this.setState({ pokemon }))
//           .catch(error => this.setState({ error }));
//       }, 3000);
//     }
//   }

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>


          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            value={this.state.query}
          />
                    <button type="submit" className="SearchForm-button">
            <span style={{ fontSize: 26 }}>&#9906;</span>
          {/* <span className="button-label">Search</span> */}
          </button>
        </form>
      </header>
    );
  }
}

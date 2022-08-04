import { Component } from 'react';
import axios from "axios";
import ImageGallery from './ImageGallery/ImageGallery'
import Searchbar from './Searchbar/Searchbar'

axios.defaults.baseURL = "https://pixabay.com/api/";

export class App extends Component {
  state = {
    fotos: [],
    loading: false,
  };

  async componentDidMount() {
      this.setState({ loading: true });
    const response = await axios.get("?q=car&page=1&key=28586147-3ab4251b0e4522a1aabc38539&image_type=photo&orientation=horizontal&per_page=12");
    this.setState({
      fotos: response.data.hits,
    loading: false,});
  }

    handleFormSubmit = query => {
      this.setState({ fotos: query });
  };

  
  // componentDidMount() {
  //   fetch('https://pixabay.com/api/?q=car&page=1&key=28586147-3ab4251b0e4522a1aabc38539&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(res => res.json())
  //     .then(hits => this.setState(hits))

    
  // }

  // handleFormSubmit = pokemonName => {
  //   this.setState({ pokemonName });
  // };

  render() {
    const { fotos } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {this.state.loading && <h2>Loading</h2>}
        {fotos.length > 0 ? <ImageGallery fotos={fotos} /> : null}
      </div>
    );
  }
}

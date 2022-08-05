import { Component } from 'react';

import {fetchPhotos} from '../api/pixabay-api'
import ImageGallery from './ImageGallery/ImageGallery'
import Searchbar from './Searchbar/Searchbar'
import Button from './Button/Button'


export class App extends Component {
  state = {
    fotos: [],
    query: "",
    loading: false,
    totalResult: 0,
    page: 1,
  };

  componentDidMount() {
    const { page } = this.state;
    this.setState({ loading: true });
    fetchPhotos(page).then(({hits, totalHits}) => this.setState({ fotos: hits, totalResult: totalHits, loading: false}));
  }

      handleFormSubmit = (query) => {
        this.setState({ query: query });
  };

  componentDidUpdate(prevProps, prevState) {
      const { page } = this.state;

    if (this.state.query !== prevState.query) {
fetchPhotos(this.state.query).then((fotos) => this.setState({ fotos: fotos, loading: false}));
      }
      
          if (this.state.page !== prevState.page) {
      this.setState({ loading: true });
      fetchPhotos(page)
        .then(({ hits, totalResults }) =>
          this.setState((prev) => ({
            fotos: [...prev.fotos, ...hits],
          }))
        )
    }
  }

    updatePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  render() {
    const { fotos, totalResult } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {this.state.loading && <h2>Loading...</h2>}
        {fotos.length > 0 ? <ImageGallery fotos={fotos} /> : null}
        {fotos.length > 0 && fotos.length < totalResult && <Button updatePage={this.updatePage} />}
      </div>
    );
  }
}

import { Component } from 'react';

import { fetchPhotos } from '../api/pixabay-api';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
// import Modal from './Modal/Modal';
import { Bars } from  'react-loader-spinner'

export class App extends Component {
  state = {
    fotos: [],
    query: '',
    loading: false,
    totalResult: 0,
    page: 1,
  };

  componentDidMount() {
    const { page } = this.state;
    this.setState({ loading: true });
    fetchPhotos(page).then(({ hits, totalHits }) =>
      this.setState({ fotos: hits, totalResult: totalHits, loading: false })
    );
  }

  handleFormSubmit = query => {
    this.setState({ query: query, page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (this.state.query !== prevState.query) {
      fetchPhotos(query, page).then(({ hits }) =>
        this.setState({ fotos: hits, loading: false })
      );
    }

    if (this.state.page !== prevState.page) {
      this.setState({ loading: true });
      fetchPhotos(query ,page).then(({ hits, totalResults }) =>
        this.setState(prev => ({
          fotos: [...prev.fotos, ...hits],
          query,
          loading: false,
        }))
      );
    }
  }

  updatePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { fotos, totalResult } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {fotos.length > 0 ? <ImageGallery fotos={fotos} /> : null}
        {fotos.length > 0 && fotos.length < totalResult && (
          <Button updatePage={this.updatePage} />
        )}
        {this.state.loading && <Bars color="#00BFFF" height={80} width={80} />}
        {/* <Modal fotos={fotos} /> */}
      </div>
    );
  }
}

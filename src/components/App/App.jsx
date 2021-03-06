import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';
import Loader from '../Loader';
import Modal from '../Modal';
import { getRequest } from '../services/api';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

export default class App extends Component {
  state = {
    isActiveModal: false,
    isLoading: false,
    hits: [],
    page: 1,
    query: '',
    error: null,
    modalImage: '',
    total: 0,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { query, page } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      getRequest({ query, page })
        .catch(error => this.setState({ error }))
        .then(({ hits, total }) =>
          this.setState(prev => {
            return { hits: [...prev.hits, ...hits], total };
          }),
        )
        .finally(() => this.setState({ isLoading: false }));
    }
    if (prevState.hits !== this.state.hits && this.state.page !== 1) {
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    }
  };
  getQueryOnSubmit = inputQuery => {
    if (this.state.query === inputQuery) return;
    this.setState({ query: inputQuery, hits: [], page: 1, isLoading: true });
  };
  handleToggle = e => {
    const { isActiveModal } = this.state;
    this.setState({ isActiveModal: !isActiveModal });
  };
  onClickChangePage = () => {
    this.setState(prev => ({ page: prev.page + 1, isLoading: true }));
  };
  setModalImage = src => {
    this.setState({ modalImage: src });
  };
  render() {
    const { isActiveModal, hits, isLoading, error, modalImage, total } =
      this.state;
    return (
      <div className="App">
        <Searchbar getOnSubmit={this.getQueryOnSubmit} />
        {error && <h1>{error.message}</h1>}
        {isActiveModal && (
          <Modal onClickToggle={this.handleToggle} modalImageUrl={modalImage} />
        )}
        {isLoading && <Loader />}
        {hits && hits.length > 0 && (
          <>
            <ImageGallery
              data={hits}
              handleToggleForImage={this.handleToggle}
              setModalImage={this.setModalImage}
            />
            {hits.length < total && (
              <Button onClickBtn={this.onClickChangePage} />
            )}
          </>
        )}

        <ToastContainer />
      </div>
    );
  }
}

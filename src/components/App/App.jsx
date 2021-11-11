import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';
import './App.scss';
import Loader from '../Loader';
import Modal from '../Modal';
import { getRequest } from '../services/api';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

export default class App extends Component {
  per_page = 12;
  state = {
    isActiveModal: false,
    isLoading: false,
    hits: [],
    page: 1,
    query: '',
    error: null,
    modalImage: '',
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { query, page } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      // this.setState({ isLoading: true });
      getRequest({ query, page })
        .catch(error => this.setState({ error }))
        .then(({ hits }) =>
          this.setState(prev => {
            return { hits: [...prev.hits, ...hits] };
          }),
        )
        .finally(() => this.setState({ isLoading: false }));
    }
    if (prevState.hits !== this.state.hits && prevState.page !== 1) {
      // console.log(prevState.page);
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
    // if (e.target === e.currentTarget) {
    //   this.setState({ isActiveModal: !isActiveModal });
    // }
  };
  onClickChangePage = () => {
    this.setState(prev => ({ page: prev.page + 1, isLoading: true }));
  };
  setModalImage = src => {
    this.setState({ modalImage: src });
  };
  render() {
    const { isActiveModal, hits, isLoading, error, modalImage } = this.state;
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
            {hits.length >= this.per_page && (
              <Button onClickBtn={this.onClickChangePage} />
            )}
          </>
        )}

        <ToastContainer />
      </div>
    );
  }
}

import { Component } from 'react';
// import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import './App.scss';
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
  };
  componentDidMount = () => {
    //   const { query, page } = this.state;
    //   getRequest({ query, page }).then(({ hits }) => this.setState({ hits }));
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.query !== this.state.query) {
      const { query, page } = this.state;
      getRequest({ query, page }).then(({ hits }) => this.setState({ hits }));
      console.log('App update');
    }
  };
  getQueryOnSubmit = inputQuery => {
    this.setState({ query: inputQuery, hits: [], page: 1 });
  };
  handleToggle = () => {
    const { isActiveModal } = this.state;
    this.setState({ isActiveModal: !isActiveModal });
  };
  render() {
    // console.log(process.env);
    const { isActiveModal, hits } = this.state;
    return (
      <div className="App">
        {isActiveModal && <Modal onClickToggle={this.handleToggle} />}
        <Searchbar getOnSubmit={this.getQueryOnSubmit} />
        {/* {hits.length > 0 && ( */}
        {/* <> */}
        <ImageGallery data={hits} />
        <Button />
        {/* </> */}
        {/* )} */}

        <ToastContainer />
      </div>
    );
  }
}

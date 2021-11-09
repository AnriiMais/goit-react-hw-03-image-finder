import { Component } from 'react';
import { toast } from 'react-toastify';

import s from './Searchbar.module.scss';

export default class Searchbar extends Component {
  state = {
    query: '',
  };
  handleQueryForm = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitQueryForm = e => {
    e.preventDefault();
    if (this.state.query === '') {
      toast.error('Bad request!');
      return;
    }
    this.props.getOnSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    const { query } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.submitQueryForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            name="query"
            value={query}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryForm}
          />
        </form>
      </header>
    );
  }
}

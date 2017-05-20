import React, {Component} from 'react';
import ContactList from '../../Component/ContactList/ContactList';
import { users } from '../../mock-data';
import * as SORT from '../../enum';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import './home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: users,
      keyword: '',
      sort: SORT.NONE
    };
  }

  getFavoriteUsers() {
    return this.getUsers().filter(item => item.isFavorite);
  }

  toggleFavorite = (user) => {
    let index = this.state.users.indexOf(user);

    if (index !== -1) {
      this.state.users[index].isFavorite = !this.state.users[index].isFavorite;
    }
    this.setState({
      users: this.state.users
    });
  };

  onFilterChange = (event) => {
    this.setState({
      keyword: event.target.value
    });
  };

  getUsers = () => {
    const
      keyword = this.state.keyword.toLowerCase();
    let
      filtered,
      sorted;

    if (keyword === '') {
      filtered = this.state.users;
    } else {
      filtered = this.state.users.filter(
        (item) => {
          return item.name.toLowerCase().indexOf(keyword) !== -1 ||
            item.company.toLowerCase().indexOf(keyword) !== -1;
        }
      );
    }

    if (this.state.sort === SORT.NONE) {
      return filtered;
    }

    sorted = filtered.sort((a, b) => {
      return this.state.sort === SORT.ASCENDING
        ? a.name > b.name
        : a.name < b.name;
    });

    return sorted;
  };

  toggleSort = () => {
    let newSort;

    switch (this.state.sort) {
      case SORT.NONE:
        newSort = SORT.ASCENDING;
        break;
      case SORT.ASCENDING:
        newSort = SORT.DESCENDING;
        break;
      case SORT.DESCENDING:
        newSort = SORT.ASCENDING;
        break;
    }

    this.setState({
      sort: newSort
    });
  }; 

  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>
          <strong>Filter and sort: </strong>
          <input type="text" onChange={this.onFilterChange} />
          <span className="sort-container">
            <i
              className={
                this.state.sort === SORT.NONE
                  ? 'fa fa-sort'
                  : 'fa fa-sort-' + (this.state.sort === SORT.ASCENDING ? 'asc' : 'desc')}
              aria-hidden="true"
              onClick={this.toggleSort}
            />
          </span>
        </div>


        <h2>Full list</h2>
        <ContactList
          users={this.getUsers()}
          toggleFavorite={this.toggleFavorite}
        />

        <h2>Fav list</h2>
        <ContactList
          users={this.getFavoriteUsers()}
          toggleFavorite={this.toggleFavorite}
        />
      </div>
    );
  }
}

export default Home;

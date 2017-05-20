import React, { Component } from 'react';
import Contact from './../Contact/Contact';

class ContactList extends Component {
  render() {
    const users = this.props.users;

    return (
      <div>
        {users.map(
          (user) => (
            <Contact
              key={user.id}
              user={user}
              toggleFavorite={this.props.toggleFavorite}
            />
          )
        )}
      </div>
    );
  }
}

export default ContactList;

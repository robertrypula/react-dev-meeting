import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {

  toggleFavorite = () => {
    this.props.toggleFavorite(this.props.user);
  };

  render() {
    const
      user = this.props.user,
      toggleFavorite = this.toggleFavorite;

    return (
      <div className="contact clearfix">
        <div className="col-half">
          <div>
            <strong>User name:</strong> {user.name}
          </div>
          <div>
            <strong>User company:</strong> {user.company}
          </div>
          <div>
            <strong>Is favorite:</strong> {user.isFavorite ? 'YES!!' : 'NO :('}
          </div>
          <div>
            <strong>Tags:</strong>
            <ul>
              {user.tag.map((tag) => (
                <li key={tag.id}>{tag.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-half">
          <div>
            <button onClick={toggleFavorite}>Toggle Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

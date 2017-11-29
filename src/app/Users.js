import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.props.data.map(v => (
          <div key={v.id}>
            <p>name: {v.name}</p>
            <p>email: {v.email}</p>
            <h3>username: {v.username}</h3>
            <h3>phone: {v.phone}</h3>
          </div>
        ))}
        {this.props.data.map(v => (
          <div key={v.id}>
            <p>name: {v.name}</p>
            <p>email: {v.email}</p>
            <h3>username: {v.username}</h3>
            <h3>phone: {v.phone}</h3>
          </div>
        ))}
        {this.props.data.map(v => (
          <div key={v.id}>
            <p>name: {v.name}</p>
            <p>email: {v.email}</p>
            <h3>username: {v.username}</h3>
            <h3>phone: {v.phone}</h3>
          </div>
        ))}
        {this.props.data.map(v => (
          <div key={v.id}>
            <p>name: {v.name}</p>
            <p>email: {v.email}</p>
            <h3>username: {v.username}</h3>
            <h3>phone: {v.phone}</h3>
          </div>
        ))}
        {this.props.data.map(v => (
          <div key={v.id}>
            <p>name: {v.name}</p>
            <p>email: {v.email}</p>
            <h3>username: {v.username}</h3>
            <h3>phone: {v.phone}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;

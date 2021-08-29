import axios from "axios";
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { Card } from "shards-react";


class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return  (
      <Card
      className="mx-auto mt-4 text-center p-5"
      style={{ maxWidth: "300px", minHeight: "250px" }}
    >
        <span className="d-flex m-auto">Loading...</span>
        </Card>  
      );
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
               <Card
                  className="mx-auto mt-4 text-center p-5"
                  style={{ maxWidth: "300px", minHeight: "250px" }}
                >
                 <div>
                  <img
                    className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
                    src={item.avatar}
                    alt={item.first_name}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h4 className="mb-0">{item.first_name} {item.last_name}</h4>
                  <span className="text-muted">{item.email}</span>
                </div>
                </Card>
            </li>
          ))}
        </ul>
      );
    }
  }
}


export default UserList

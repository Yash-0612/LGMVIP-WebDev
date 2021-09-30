
import React, {Component} from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import {  Container, Row, Col,Card } from "shards-react";


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
            items: result.data
          })
          setInterval(()=> {
            this.setState({
              isLoaded: true
            });
          },1500) ;
        },
      
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
        <Container className="dr-example-container" style={{padding: "100px"}}>
        <Row>
          <Col>
       
      <Card
      className="mx-auto mt-4 text-center p-5"
      style={{ maxWidth: "350px", minHeight: "300px"}}
    >
        <span className="d-flex m-auto p-5">Loading...</span>
        </Card>  
        </Col>
        </Row>
        </Container>
      );
    } else {
      return (
        <Container className="dr-example-container bg-success" style={{padding: "100px"}}>
        <Row>
          {items.map(item => (
            <Col key={item.id}>
               <Card
                  className="mx-auto mt-4 text-center p-5"
                  style={{ maxWidth: "300px", minHeight: "250px" }}  
                >
                 <div>
                  <img
                    className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
                    src={item.avatar}
                    alt={item.first_name}
                    style={{ width: "150px", height: "150px"}}
                  />
                  <h4 className="mb-0">{item.first_name} {item.last_name}</h4>
                  <span className="text-muted">{item.email}</span>
                </div>
                </Card>
           </Col>
          ))}
       </Row>
       </Container>
      );
    }
  }
}


export default UserList

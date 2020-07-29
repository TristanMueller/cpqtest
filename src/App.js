import './App.css';
import React, { Component } from 'react';
import {Accordion,Card,Button,ListGroup} from 'react-bootstrap';

export default class cpqdemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureOne: {name:'',value: 0},
      featureTwo: {name:'',value: 0},
      featureThree: {name:'',value: 0}
    };
  }

  render () {
    return (
      <div className='App-container'>
        <header className='App-header'>
          Configurator
        </header>
        <div className='feature-container'>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Feature One: {this.state.featureOne.name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureOne:{name:'AA',value: 10}});   
                    }}>AA</ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureOne:{name:'AB',value: 12}});   
                    }}>AB</ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureOne:{name:'AC',value: 14}});   
                    }}>AC</ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureOne:{name:'AD',value: 16}});   
                    }}>AD</ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureOne:{name:'AE',value: 18}});   
                    }}>AE</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Feature Two: {this.state.featureTwo.name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item 
                      disabled={this.state.featureOne.name ==='AA' } 
                      action 
                      onClick={()=>{
                      this.setState({featureTwo:{name:'BA',value: 10}});   
                      }}>BA {this.state.featureOne.name==='AA'?'(Option Not Available)':''}</ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureTwo:{name:'BB',value: 12}});   
                    }}>BB</ListGroup.Item> 
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureTwo:{name:'BC',value: 14}});   
                    }}>BC</ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureTwo:{name:'BD',value: 16}});   
                    }}>BD</ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureTwo:{name:'BE',value: 18}});   
                    }}>BE</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Feature Three: {this.state.featureThree.name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item 
                      disabled={this.state.featureOne.name==='AA' && this.state.featureTwo.name==='BB'} 
                      action 
                      onClick={()=>{
                      this.setState({featureThree:{name:'CA',value: 10}});   
                      }}>CA {this.state.featureOne.name==='AA' && this.state.featureTwo.name==='BB' ?'(Option Not Available)':''}</ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureThree:{name:'CB',value: 12}});   
                    }}>CB</ListGroup.Item> 
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureThree:{name:'CC',value: 14}});   
                    }}>CC</ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureThree:{name:'CD',value: 16}});   
                    }}>CD</ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                      this.setState({featureThree:{name:'CE',value: 18}});   
                    }}>CE</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                Total: {this.state.featureOne.value + this.state.featureTwo.value + this.state.featureThree.value}
              </Card.Header>
            </Card>
          </Accordion>
          
        </div>

      </div>
    );
  }
}

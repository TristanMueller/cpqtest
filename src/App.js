import './App.css';
import React, { Component } from 'react';
import {Accordion,Card,Button,ListGroup} from 'react-bootstrap';

export default class cpqdemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalFeatures:3,
      selectedFeatures:[
        {
          name:'',value: 0
        },
        {
          name:'',value: 0
        },
        {
          name:'',value: 0
        }
      ],
      features:[
        [
          {name:'AA',value: 10, always:true,rules:[]},
          {name:'AB',value: 12, always:true,rules:[]},
          {name:'AC',value: 14, always:true,rules:[]},
          {name:'AD',value: 16, always:true,rules:[]},
          {name:'AE',value: 18, always:true,rules:[]},
        ],
        [
          {name:'BA',value: 10, always:true,rules:[{names:['AA']}]},
          {name:'BB',value: 12, always:true,rules:[]},
          {name:'BC',value: 14, always:true,rules:[]},
          {name:'BD',value: 16, always:true,rules:[]},
          {name:'BE',value: 18, always:true,rules:[]},
        ],
        [
          {name:'CA',value: 10, always:true,rules:[{names:['AA','BB']},{names:['BC']}]},
          {name:'CB',value: 12, always:true,rules:[{names:['AA']},{names:['BB']}]},
          {name:'CC',value: 14, always:true,rules:[]},
          {name:'CD',value: 16, always:true,rules:[]},
          {name:'CE',value: 18, always:true,rules:[]},
        ]
      ]
    };
  }
  makeFeature(index,options){
    var optionsList = [];
    for (var i = 0; i < options.length; i++) {
      optionsList[i] = this.makeFeatureOption(options[i].name,options[i].value,options[i].always,options[i].rules,index)
    }
    return(
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" style={{color:'black'}} eventKey={index+1}>
            Feature {index+1}: {this.state.selectedFeatures[index].name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={index+1}>
          <Card.Body>
            <ListGroup>
              {optionsList}
            </ListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
  makeFeatureOption(name,value,always,rules,index){
    var disabled = false;
    for(var i = 0; i < rules.length; i++){
      disabled = true;
      for(var x = 0; x < rules[i].names.length; x++){
        var contains = false;
        for(var y = 0; y<this.state.totalFeatures; y++){
          if(this.state.selectedFeatures[y].name === rules[i].names[x]){
            contains = true;
          }
        }
        if(!contains){
          disabled = false;
        }
      }
      if(disabled === true){
        break;
      }
    }
    if(always !== true){
      if(disabled === false){
        disabled = true;
      }else{
        disabled = false;
      }
    }
    if(disabled){
      return;
    }else{
      return(
        <ListGroup.Item 
          action
          onClick={()=>{
            let new_state = Object.assign({}, this.state.selectedFeatures); 
            new_state[index] = {name:name,value:value};
            this.setState({selectedFeatures: new_state});
          }}
        >{name}</ListGroup.Item>
      );
    }

  }
  calculateTotal(){
    var total = 0
    for(var i = 0; i<this.state.totalFeatures; i++){
      total += this.state.selectedFeatures[i].value;
    }
    return total;
  }
  render () {

    var allFeatures = [];
    for(var i = 0;i<this.state.features.length;i++){
      allFeatures[i] = this.makeFeature(i,this.state.features[i]);
    }

    return (
      <div className='App-container'>
        <header className='App-header'>
          Configurator
        </header>
        <div className='feature-container'>
          <Accordion>
            {allFeatures}
            <Card>
              <Card.Header>
                Total: {this.calculateTotal()}
              </Card.Header>
            </Card>
          </Accordion>
          
        </div>

      </div>
    );
  }
}

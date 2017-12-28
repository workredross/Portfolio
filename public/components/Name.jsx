import React, { Component } from 'react';
import { log } from 'util';
require('style!css!InputCSS');
require('InputJS');
require('AfterNameSubmit')
class Name extends Component {
  
  handleSubmit (e) {
    e.preventDefault();
    var name = this.refs.name.value;
    if(name.length>0){
      this.refs.name.value = 'Thank You',
      this.props.handleSubmit(name)
    }
  }
  
  render() {
    return (
      <div>
        <form className='input-id input-wrapper input-animation' onSubmit = {this.handleSubmit.bind(this)}>
          <div >
            <input type='text' ref='name' placeholder='And you are !!'/>
          </div>
        </form>
      </div>
    );
  }
}

export default Name;
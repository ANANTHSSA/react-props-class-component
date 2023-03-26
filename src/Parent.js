import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  render() {
    const task =[
        {name:'Write for Evato tuts',duration:120},
    {name:'Work Out','duration':60},
    {name:'Procrastinate on Dulingo',duration:240}];
    return (
      <div>
        <h1>task class Component</h1>
        <Child ssa={task}/>
      </div>
    )
  }
 }

export default Parent

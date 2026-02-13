import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={data: {
      name:"Gnana Snehalatha Reddy",
      role:"Developer",
      bio:"Software Architect & Minimalist.Exploring the intersection of performance and design.",
      status:  [{label:"Posts",value:"100"},
        {label:"Followers",value:"10k"},
        {label:"Following",value:"56"}]
    }};
  }
  render() {
    const {data}=this.state;
    const BASEURL= import.meta.env.BASE_URL;
    return (
      <div class='app'>
        <div className='profile'>
          <img src={BASEURL+"user.png"} alt='logo'/>
          <div className='info'>
            <legend className='name'>{data.name}</legend>
            <legend className='role'>{data.role}</legend>
            <legend className='bio'>{data.bio}</legend>
            <button className='follow'>Follow</button>
            <button className='message'>Message</button>
          </div>
        </div>
        <div className='status'>
          {data.status.map((d)=>(
            <div className ='info'>
              <legend className='value'>{d.value}</legend>
              <legend className='label'>{d.label.toUpperCase()}</legend>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
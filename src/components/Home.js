import React from 'react'
import MasterCraft from './discover/MasterCraft'
import About from './about/About'
import Tracker from './pledgeTracker/tracker'

export default class Home extends React.Component {
  
  constructor(){
    super()
    this.state = {
        selectedProject : [],
    }
  }

  onSelect = (obj) => {
    this.setState({selectedProject: obj})
  } 

render() {
        return (
          <div style={{marginTop:"-50px"}}>
               <MasterCraft onSelect={this.onSelect}/>
               <Tracker  selectedProject={this.state.selectedProject}/>
               <About onSelect={this.onSelect}/>
          </div> 
        )
    }
  }
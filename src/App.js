import React from 'react'
import Hours from './Hours'
import Location from './Location'
import Contactus from './Contactus'
import Nav from './Nav'
import Menu from './Menu'
import Style from './style.css'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div className="wrapper">
      <section className="bg1">
        <img className="logo" src="https://s3-ap-southeast-2.amazonaws.com/craftypint/crafty4/seller/Dan-logo-LARGE-171103-075155.png" alt=""/>
      </section>
      <section className="section static">
        <Menu/>
      </section>
      <section className="bg2">
      </section>
      <section className="section static">
      </section>      
      <section className="bg3">
      </section> 
      <section className="section static">  
        <Hours/>
        <Contactus/>
        <Location/>        
      </section>   
    </div>
  }

}

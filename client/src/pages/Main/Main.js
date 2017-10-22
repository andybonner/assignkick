// Dependencies
import React, { Component } from "react";
import CalendarComponent from "./calendar";

import SidebarFooter from "../../components/SidebarFooter";
import Course from "../../components/Course";
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
import Assignments from "../../components/Assignments";
import "./Main.css";
import eventHelpers from '../../util/eventHelper';
// Main component

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            events : []
        }
    }
    componentDidMount(){
        eventHelpers.getEvents().then((data)=>{
            this.setState({
                events : data
            });
        })
    }
    sendDataTosSrver(){
        console.log('data',this);
    }
    render(){
        return(
            <section style={{margin : '7%'}}>
                <CalendarComponent events={this.state.events}/>
                <section>
                    <button onClick={this.sendDataTosSrver.bind(this)}>Add</button>
                </section>
	
		<Course />
	<SideNav/>
	<Footer/>
 </section>
   )
    }
}

export default Main;
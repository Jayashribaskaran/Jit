import React , {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';


class Portfolio extends Component {
	render(){
	return(
        <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31114.26604187415!2d79.85708177314493!3d12.889498990865222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52edd2f17dca51%3A0x1825c97e3f212814!2sJeppiaar+Institute+Of+Technology!5e0!3m2!1sen!2sin!4v1517825642714" width="800px" height="400px"></iframe>

      </div>
		);  
      }
	}

export default Portfolio;	
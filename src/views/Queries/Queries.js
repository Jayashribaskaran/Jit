import React , {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import {ContainerDimensions} from 'react-container-dimensions';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBlock,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

class Queries extends Component{
	render(){
	return(
       <div>
       <Row className="justify-content-center">
     	<Col xs="9">
     	<Card>
              <CardHeader>
                <i className="fa fa-edit"></i>
                <div className="card-actions">
                  <a href="#" className="btn-setting"><i className="icon-settings"></i></a>
                  <a href="#" className="btn-minimize"><i className="icon-arrow-up"></i></a>
                  <a href="#" className="btn-close"><i className="icon-close"></i></a>
                </div>

                </CardHeader>
              <CardBlock className="card-body">
                <Form className="form-horizontal">
       <FormGroup>
       <Label>From: <span class="required">*</span> </Label>
                    <div className="controls">
                        <Input ref={(Input) => this.name = Input} id="prependedInput" aria-required="true" required="required" placeholder="Enter Your Email Id" type="text"/>
                    </div>
       <Label>To:  <span class="required">*</span> </Label>
                    <div className="controls">
                        <Input ref={(Input) => this.name = Input} id="prependedInput" aria-required="true" required="required" placeholder="Enter Concerned Official Email Id" type="text"/>
                    </div>  

        <Label htmlFor="textarea-input">Query</Label>
                    <Col>
                      <Input ref={(Input) => this.desc = Input} type="textarea" name="textarea-input" id="textarea-input"  rows="5"
                             placeholder="Ask anything..."/>
                   </Col>
                   </FormGroup>
                   </Form>
              </CardBlock>
            </Card>
          </Col>
           </Row>         
      </div>
		);   
      }
	}
export default Queries;	
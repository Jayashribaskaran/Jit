import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
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

class Enigma extends Component {
 
  render() {
    return (
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
                      <Label htmlFor="ccmonth">Select District</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="0">--Select--</option>
                        <option value="1">Ariyalur</option>
                        <option value="2">Chennai</option>
                        <option value="3">Coimbatore</option>
                        <option value="4">Cuddalore</option>
                        <option value="5">Dharmapuri</option>
                        <option value="6">Dindigul</option>
                        <option value="7">Erode</option>
                        <option value="8">Kanchipuram</option>
                        <option value="9">kanniyakumari</option>
                        <option value="10">Karur</option>
                        <option value="11">Krishnagiri</option>
                        <option value="12">Madurai</option>
                        <option value="13">Nagapattinam</option>
                        <option value="14">Namakkal</option>
                        <option value="15">The Nilgiris</option>
                        <option value="16">Perambalur</option>
                        <option value="17">Pudukottai</option>
                        <option value="18">Ramanathapuram</option>
                        <option value="19">Salem</option>
                        <option value="20">Sivaganga</option>
                        <option value="21">Thanjavur</option>
                        <option value="22">Theni</option>
                        <option value="23">Thoothukudi</option>
                        <option value="24">Tiruchirappalli</option>
                        <option value="25">Tirunelveli</option>
                        <option value="26">Tiruppur</option>
                        <option value="27">Tiruvallur</option>
                        <option value="28">Tiruvannamalai</option>
                        <option value="29">Tiruvarur</option>
                        <option value="30">Vellore</option>
                        <option value="31">Villupuram</option>
                        <option value="32">Virudhunagar</option>
                      </Input>
                    </FormGroup>
                    <div>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="textarea-input">Problem 1</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Problem Statement In MSS/VSAT Networks a communication software is desired with adaptive codec based voice/video calling feature (adaptation depending on link quality) & that could support voice communication at 2-3 Kbps (including all overheads) while maintaining voice quality of 3-3.5 MOS. In addition to above, the software should also be able to interact with other applications such as browser/e-mail/FTP/messenger etc. at network layer and communicate with VSAT modem using fixed sized packets over Ethernet. Desired Outcome Software with two features a) voice (including low data rate 2-3 Kbps) & video calling b) Interfacing with standard network applications with data segmentation & reassembly Dataset No data will be provided Domain MSS & VSAT Communication Challenge Building application for multimedia & data communication which takes care of segmentation & reassembly of IP packets with minimal overhead and have end to end signaling built into it. Usage MSS & VSAT user applications User MSS & VSAT Networks, Strategic user groups Expected number of users Role of user To validate the software with field trials and adapt the same for various applications. Technicality Technical Available solutions (if yes, reason for not using them) Domain Expert(s) Chandra Prakash, Narender Kumar"/>
                    </Col>
                    </FormGroup>
                    </div>
                    <Col md="6">
                   <div className="form-actions">
                    <a href="#Upload" className="btn-submit"><Button type="submit" color="primary">Upload</Button></a>
                    <Button color="secondary">Cancel</Button>
                  </div>   
                  </Col>
                  <div>
                     <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="textarea-input">Problem 2</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="AICTE has come out with many initiatives and also running number of schemes for its stake holders. In order to display the status of all Initiatives and Schemes on single window a Dashboard is required."/>
                    </Col>
                    </FormGroup>
                    </div>
                    <Col md="6">
                    <div className="form-actions">
                    <Button type="submit" color="primary">Upload</Button>
                    <Button color="secondary">Cancel</Button>
                  </div>  
                  </Col>
                    </Form>
              </CardBlock>
            </Card>
          </Col>
        </Row>
       </div>           
    );
  }
}
export default Enigma;	

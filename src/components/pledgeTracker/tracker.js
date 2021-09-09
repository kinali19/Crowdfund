import React from "react"
import { Card,Row,Col,ProgressBar } from 'react-bootstrap'
import '../about/about.css'

const textColor = {
    color: "hsl(0, 0%, 48%)"
}

export default class Tracker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            total_amount : 89914,
            total_backer : 5007,
            remanaing_days : 56,
            selectedProject: props.selectedProject
        }
    }
    componentWillReceiveProps(nextProps) {debugger
            this.setState({ total_amount: this.state.total_amount + parseInt(nextProps.selectedProject.selectedAmount)});
            this.setState({ total_backer: this.state.total_backer + parseInt(nextProps.selectedProject.totalBackers)});
        // this.setState({...this.state,selectedProject})
      }
    
         
    render(){
        return (
            <div className="d-flex justify-content-center align-items-center">
            <Card className="shadow p-4 mb-5 bg-white rounded">
                <Card.Body>
                   <Row className="text-md-start text-center">
                        <Col md={true}  className="borderR mt-3 me-0 me-md-3"><Card.Title>$ {this.state.total_amount}</Card.Title>
                        <Card.Subtitle style={textColor}>of $100,000 backed</Card.Subtitle>
                        </Col>
                        <Col md={true}  className="borderR mt-3 me-md-3"><Card.Title>{this.state.total_backer}</Card.Title>
                        <Card.Subtitle style={textColor}>total backers</Card.Subtitle>
                        </Col>
                        <Col md={true} className="mt-3"><Card.Title>{this.state.remanaing_days}</Card.Title>
                        <Card.Subtitle style={textColor}>days left</Card.Subtitle></Col>
                   </Row><br/>
                   <ProgressBar now={this.state.total_amount} min={10000} max={100000} />
                </Card.Body>
            </Card>
        </div>
        )
    }
}
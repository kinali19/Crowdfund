import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap'
import { Radio } from 'antd'
import './modal.css'


function ProjectList(props) {
    const [amt, pledgeAmt] = useState(0);
    const [remaining, checkRemaining] = useState(0)
    const [isSelected, selectedProject] = useState(false)
    const [isError, validate] = useState(false)
    


    const continueClick = () => {
        const value = (amt === 0 ? props.data.amount : amt);
        const projects =  [ ...props.projects] 
        const updatedArr =  projects.map((item, index) => {
           if(item.id === props.selectedIndex){
               item.selectedAmount = value
               item.remaining = item.remaining !== null ? item.remaining - 1 : item.remaining
           }
           return item;
         }); 
        if (value >= props.data.amount) {
            const project = { ...props.data }
            project.selectedAmount = value;
            project.totalBackers = props.data.totalBackers + 1;
            props.updateSelected(project);
            props.onHide(true);
            props.thankyouModalShow(true)
            
        }
        else
            validate(true)
    }
    useEffect(() => {
        checkRemaining(parseInt(props.data.remaining))
        // UpdateSelectedArr(props.data)
        if (props.selectedIndex === props.data.id) {
            selectedProject(true)
        }
        else {
            selectedProject(false)
        }
    })

    const changeHandler = (event) => {
        if(event.target.value >= props.data.amount){
            validate(false)
            pledgeAmt(event.target.value)
        }
        else{
            validate(true)
        }
    }

    return (
        <Radio.Button className="mb-5" value={props.data.id} disabled={remaining === 0 ? true : false}>
            <Card className={[" bg-white w-auto rounded", isSelected ? 'active' : '']} style={remaining === 0 ? { opacity: '.4' } : {}} key={props.data.id}>
                <Card.Body>
                    <Row className={["d-flex align-items-center", isSelected ? 'border-bottom' : '']} >

                        <Col>
                            <Row className="d-flex">
                                <Col xs={2} md={1} className="d-flex align-items-start">
                                    <Form.Check type="radio" id={props.data.id}
                                        disabled={remaining === 0 ? true : false}
                                        name="radio" className="card-radio-check"
                                        onChange={() => console.log('')}
                                        checked={isSelected ? true : false} /></Col>
                                <Col xs={10} md={5}>
                                    <Card.Subtitle className="mb-3 mb-md-4 fw-bold main-title">{props.data.title}</Card.Subtitle>
                                    <Card.Subtitle className="mb-4 mb-md-4 amt-desc fw-bold d-block d-sm-block d-md-none" >{props.data.subtitle}</Card.Subtitle>
                                </Col>
                                <Col xs={4} md={4} className="d-flex align-self-center justify-content-md-start d-none d-md-block ">
                                    <Card.Subtitle className="mb-4 amt-desc fw-bold" >{props.data.subtitle}</Card.Subtitle>
                                </Col>
                                <Col xs={12} md={2} className="d-flex align-items-start justify-content-md-end mt-4 mt-md-0 order-last order-md-4"><Card.Subtitle>
                                    <span className="fw-bold">{props.data.remaining}</span>
                                    &nbsp;
                                    {props.data.remaining ? <sup style={{ color: 'hsl(0, 0%, 48%)' }}>left</sup> : ''}
                                </Card.Subtitle>
                                </Col>
                                <Col className='order-4 order-md-5'> <Card.Text>
                                    {props.data.description}
                                </Card.Text>
                                </Col>
                            </Row>
                            <Row>

                            </Row>
                            <br />
                        </Col>
                    </Row>

                    <Row className={["pt-2", isSelected ? '' : 'd-none']}>
                        <Col xs={12} md={6} className="d-flex align-self-center justify-content-center justify-content-md-start p-3 p-md-0">
                            <Card.Text>Enter your pledge</Card.Text>
                        </Col>
                        <Col xs={5} md={3} className="d-flex align-self-end justify-content-md-end">
                            <InputGroup>
                                <InputGroup.Text style={{ borderRadius: "25px 0 0 25px" }}>$</InputGroup.Text>
                                <FormControl
                                    type="number"
                                    required
                                    style={{ borderRadius: "0 25px 25px 0" }}
                                    defaultValue={props.data.amount}
                                    onChange={changeHandler} />

                            </InputGroup>
                        </Col>
                        <Col xs={7} md={3} className="d-flex align-self-end justify-content-end ">
                            <Button variant="default"
                                disabled={props.data.remaining === 0 || isError ? true : false}
                                className="btnContinue"
                                onClick={continueClick}
                            >Continue
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Form.Control.Feedback type="invalid" style={isError && isSelected ? { display: 'block' } : { display: 'none' }}>
                Please provide a valid amount to pledge!
            </Form.Control.Feedback>
          
        </Radio.Button>
    )
}

export default ProjectList
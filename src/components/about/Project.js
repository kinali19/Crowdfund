import {useState} from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import './about.css'
import BackthisProject from '../projects/BackthisProject'
import React from 'react'

const textColor = {
    color: "hsl(176, 50%, 47%)"
}

function Project(props) {
    const [modalShow, setModalShow] = useState(false);

    const selectedProject = (obj) => {
        props.onSelect(obj);
    }
    return (
        <>
        {props.data.showinDashboard ? 
            <Card className="p-2 p-md-4 mb-5 bg-white w-auto rounded" style={props.data.remaining === 0 ? { opacity: '.4' } : {}} key={props.data.id}>
                <Card.Body>
                    <Row className="d-flex">
                        <Col xs={12} md={6}>
                            <Card.Subtitle className="mb-4 fw-bold">{props.data.title}</Card.Subtitle>
                        </Col>
                        <Col xs={12} md={6} className="d-flex align-self-center justify-content-md-end">
                            <Card.Subtitle className="mb-4" style={textColor}>{props.data.subtitle}</Card.Subtitle>
                        </Col>
                    </Row>
                    <Card.Text>
                        {props.data.description}
                    </Card.Text><br />
                    <Row className="d-flex">
                        <Col xs={12} md={6} className="d-flex align-items-center"><Card.Subtitle><span className="fw-bold">{props.data.remaining}</span>&nbsp;<sup style={{ color: 'hsl(0, 0%, 48%)' }}>left</sup></Card.Subtitle></Col>
                        <Col xs={12} md={6} className="d-flex align-self-center justify-content-md-end mt-3 mt-md-0">
                            <Button variant="default"
                            onClick = {() => setModalShow(true)}
                             disabled={props.data.remaining === 0 ? true : false} 
                             className="btnReward">{props.data.remaining === 0 ? 'Out of Stock' : 'Select Reward'}
                            </Button>
                        </Col>
                        <BackthisProject show={modalShow} onHide={() => setModalShow(false)} selectedIndex={props.data.id} callbackFromParent={selectedProject}/>
                    </Row>
                </Card.Body>
            </Card>
        : ''}
        </>
    )
}

export default Project
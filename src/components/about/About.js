import React from "react";
import { Card } from 'react-bootstrap'
import { projects } from '../../utility/constants'
import Project from './Project'

export default function About(props) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <Card className="shadow p-4 mb-5 bg-white rounded">
                    <Card.Body>
                        <Card.Title className="mb-4">About this Project</Card.Title>
                        <Card.Text>
                            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height.
                            Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. <br />
                            <br />
                            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
                        </Card.Text>
                    </Card.Body>
                    {projects.map((ele, i) => {
                        return (<Project data={ele} key={i} onSelect={(obj) => props.onSelect(obj)}/>)
                    })}
                </Card>
            </div>
        )
}
import React, { useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal'
import './modal.css'
import ProjectList from "./ProjectList"
import { projects } from '../../utility/constants'
import { Radio } from 'antd'
import Thankyou from '../Thankyou'

function BackProject(props) {
  const [selectedIndex, selectedPledge] = useState(0);
  const [projectsSelected, updateSelected] = useState([])
  const [thankyouModalShow, setThankModalShow] = useState(false);

  useEffect(() => {
      updateSelected(projects)
      if(props.selectedIndex){
        selectedPledge(props.selectedIndex)
      }
  },[],selectedIndex)


  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="project-modal"
    >
      <Modal.Header className="border-0 mt-2 " closeButton>
        <Modal.Title className="fw-bold h5" id="contained-modal-title-vcenter">
          Back this Project <br /><p className="subtitle">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Radio.Group
          className=""
          defaultValue={selectedIndex}
          onChange={(e) => {
            selectedPledge(e.target.value)
          }}
        >
          {projectsSelected.map((ele, i) => {
            return (<ProjectList data={ele} key={i}
               selectedIndex={selectedIndex} 
                thankyouModalShow={(val) => setThankModalShow(val)}
                onHide={props.onHide} 
                projects={projectsSelected}
                updateSelected={(obj) => props.callbackFromParent(obj)}/>) //onSelectPledge={(value) => props.selectAmt(value)}
          })}
        </Radio.Group>
      </Modal.Body>
    </Modal>
    <Thankyou
    {...props}
                show={thankyouModalShow}
                onHide={() => setThankModalShow(false)}
            />
    </>
  );
}

export default BackProject
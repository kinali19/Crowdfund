import {Modal,Button,Image} from 'react-bootstrap'
import checkIcon from '../assets/icon-check.svg'
export default function Thankyou(props){
    return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="thank-modal"
        >
       
          <Modal.Body style={{textAlign:'center'}} className="m-3">
            <Image src={checkIcon} alt="check icon" className="mb-4"/>
            <h5 className="fw-bold">Thanks for your support!</h5>
            <p className="card-text mt-3">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed. 
            </p>
            <Button className="btnGotit mt-3" onClick={() => {props.onHide(true)}}>Got it!</Button>
          </Modal.Body>
        </Modal>
      );
    
}
import React, {useState} from 'react'
import { Card, Button, Image } from 'react-bootstrap'
import '../discover/MasterCraft.css'
// import BookmarkIcon from '../../assets/icon-bookmark.svg';
import MastercraftIcon from '../../assets/logo-mastercraft.svg';
import BackthisProject from '../projects/BackthisProject'

const BookmarkIcon = (props) =>(
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill={props.fill} cx="28" cy="28" r="28"/><path fill={props.stroke} d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
    )

    
function MasterCraft(props) {
    const [modalShow, setModalShow] = useState(false);
    const [bookmarkVal, bookmarked] = useState(false);

        const selectedProject = (obj) => {
            props.onSelect(obj);
        }

    return (
            <>
                <div className="d-flex justify-content-center align-items-center position-relative">
                    <Image src={MastercraftIcon} roundedCircle />
                    <Card className="text-center shadow p-4 mb-5 bg-white rounded">
                        <Card.Body>
                            <Card.Title>Mastercarft Bamboo Moniter Riser</Card.Title>
                            <Card.Text>
                                A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button 
                                variant="default" 
                                className="btnProject"
                                onClick = {() => setModalShow(true)}
                                >
                                Back this Project
                                </Button>
                                
                                <BackthisProject show={modalShow} onHide={() => setModalShow(false)} callbackFromParent={selectedProject}/>
                               
                                <Button variant="default" size="lg" className={["btnBookmark pr-0 border-0", bookmarkVal ? 'active' : ''].join(' ')}
                                    onClick={() => bookmarked(!bookmarkVal)}>
                                    <BookmarkIcon 
                                    fill={bookmarkVal ? 'hsl(176, 72%, 28%)' : 'hsl(0, 0%, 48%)' }
                                    stroke={bookmarkVal ? '#fff' : '#B1B1B1'}/><span className="d-none d-sm-none d-md-block">&nbsp; Bookmark</span>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </>
        )
}

export default MasterCraft
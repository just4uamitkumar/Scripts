import React, { useEffect, useState } from 'react';
import {Container,  Row,  Button, Col, Card, CardBody, CardFooter, 
    CardHeader, CardTitle, CardText} from 'reactstrap';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../../actions/itemAction';
import PropTypes from 'prop-types';
import ItemModal from '../../common/ItemModal';

const Home = (props) => {
    const [isModal, setIsModal] = useState(false)    
    const pageTitle = 'Learn Script'    

    useEffect(() => {
        props.getItems();
    }, [])

    const toggle = () => {
        setIsModal(!isModal)
    }

    const onDeeleteClick = (id) => {
        props.deleteItem(id)
    }

    const {items} = props.item

    return(
        <div className="pageCont">
                <div className="pageHeader">
                    <Container>
                        <h1>{pageTitle}</h1>                        
                        <Button color="dark" onClick={toggle}>Add New Skill</Button>
                    </Container>                
                </div>
                
                <div className="content">
                    <Container>
                    <ItemModal toggle={toggle} isModal={isModal}/>
                        <div className="contentWraper">
                            <Row>
                                {items.map(({_id, name, duration, price}) => (
                                    <Col sm={3} key={_id}>
                                        <Card>
                                            <CardHeader className="text-center bg-success">
                                                {name}
                                                <Button onClick={() => onDeeleteClick(_id)}>x</Button>
                                            </CardHeader>

                                            <CardBody>
                                                <CardTitle>Special Title Treatment</CardTitle>
                                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                
                                            </CardBody>
                                            
                                            <CardFooter className="bg-warning">
                                                <span>{duration}</span>
                                                <span>{price}</span> 
                                            </CardFooter>
                                        </Card>
                                    </Col>                        
                                ))}
                            </Row>              
                        </div>
                       
                    </Container>                
                </div>
            </div>
    )
}

Home.propTypes = {
    getItems:PropTypes.func.isRequired,
    item:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item:state.item
})

export default connect(mapStateToProps, {getItems, deleteItem})(Home);


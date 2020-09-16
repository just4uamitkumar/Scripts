import React, {useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form,
FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemAction';

const ItemModal = (props) => {

    const [name, setName ] = useState('')
    const [duration, setDuration ] = useState('')
    const [price, setPrice ] = useState('')   

    const onChange = (e) => {
        //[e.target.name ] = e.target.value
        setName([e.target.value])
        setDuration( [e.target.value])
        setPrice( [e.target.value])
    }

    const onSubmit = e => {
        debugger;
        e.preventDefault();

        const newItem = {
            name: name,
            price: price,
            duration:duration
        }

        //Add item via addItem action
        props.addItem(newItem);

        //Close Modal
        props.toggle();
    }


    return(
        <Modal isOpen={props.isModal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>New Item</ModalHeader>
            <ModalBody>
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Add Item"
                            onChange={onChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <Input type="text" name="price" id="price" placeholder="Add Price"
                            onChange={onChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="duration">Duration</Label>
                        <Input type="text" name="duration" id="duration" placeholder="Add Duration"
                            onChange={onChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Button type="reset" color="warning">Reset</Button>
                        <Button type="submit" color="primary">
                            Add to List
                        </Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
    )
}


const mapsStateToProps = state => ({
    item:state.item
}) 

export default connect(mapsStateToProps, {addItem})(ItemModal);
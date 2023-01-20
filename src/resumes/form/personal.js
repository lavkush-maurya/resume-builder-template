import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';


const Personal = () => {


    const [inputList, setInputList] = useState([{ photo: "", firstName: "", lastName: "", phone: "", address: "", }]);
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        console.log(list);
    };

    return (

        <AccordionItem eventKey='0'>
            <AccordionHeader>Personal Details</AccordionHeader>
            <AccordionBody>

                <Row className="mb-3">
                    {inputList.map((x, i) => {
                        return (
                            <React.Fragment key={i}>
                                <div className="box">
                                    <Form.Group className="mb-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Form.Label>Add Your Professional Photo</Form.Label>
                                        <Form.Control type="file" required value={x.photo}
                                            onChange={e => handleInputChange(e, i)} name='photo' />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name='firstName'
                                            value={x.firstName}
                                            onChange={e => handleInputChange(e, i)}
                                            placeholder="First name"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name='lastName'
                                            value={x.lastName}
                                            onChange={e => handleInputChange(e, i)}
                                            placeholder="Last name"
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            required
                                            type="number"
                                            name='phone'
                                            value={x.phone}
                                            onChange={e => handleInputChange(e, i)}
                                            placeholder="Enter your phone number"
                                        />
                                    </Form.Group>

                                    <FormGroup as={Col} md="12" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name='address'
                                            value={x.address}
                                            onChange={e => handleInputChange(e, i)}
                                            placeholder="Leave a Address here"
                                            style={{ height: '8rem' }} />
                                    </FormGroup>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </Row>
            </AccordionBody>
        </AccordionItem>

    );
}
export default Personal;
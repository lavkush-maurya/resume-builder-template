import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import React, { useState } from 'react';
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const Interest = () => {
    const [inputList, setInputList] = useState([{ interest: "" }]);
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { interest: "" }]);
    };

    return (


            <AccordionItem eventKey='7'>
                <AccordionHeader>Interest</AccordionHeader>
                <AccordionBody>
                    <Row className="mb-3">
                        <Form.Group as={Row} md="12" style={{ display: 'flex' }}>
                            {inputList.map((x, i) => {
                                return (
                                    <div className="box">
                                        <Form.Group as={Col} md="6" className='p-2' style={{ display: 'flex', flexWrap: 'wrap' }}>

                                            <FormControl
                                                name="interest"
                                                required
                                                placeholder="Example Playing Chess, Read books"
                                                value={x.interest}
                                                onChange={e => handleInputChange(e, i)} />

                                            {inputList.length !== 1 && <Button className='my-2 mx-2' onClick={() => handleRemoveClick(i)} variant="outline-danger">Delete</Button>}
                                            {inputList.length - 1 === i && <Button className='my-2 mx-2' onClick={handleAddClick} variant="outline-success">Add</Button>}

                                        </Form.Group>
                                    </div>
                                );
                            })}
                        </Form.Group>
                    </Row>
                </AccordionBody>
            </AccordionItem>

    );
}
export default Interest;
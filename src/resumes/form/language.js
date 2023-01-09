import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import React, { useState } from 'react';
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const Language = () => {
    const [inputLang, setInputLang] = useState([{ lang: "" }]);
    const handleInputChange = (abc, index1) => {
        const { name, value } = abc.target;
        const list1 = [...inputLang];
        list1[index1][name] = value;
        setInputLang(list1);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index1 => {
        const list1 = [...inputLang];
        list1.splice(index1, 1);
        setInputLang(list1);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputLang([...inputLang, { lang: "" }]);
    };
    return (


            <AccordionItem eventKey='6'>
                <AccordionHeader>Languages</AccordionHeader>
                <AccordionBody>
                    <Row className="mb-3">
                        <Form.Group as={Row} md="12" style={{ display: 'flex' }}>
                            {inputLang.map((x, i) => {
                                return (
                                    <div className="box">
                                        <Form.Group as={Col} md="6" className='p-2' style={{ display: 'flex', flexWrap: 'wrap' }}>

                                            <FormControl
                                                name="lang"
                                                placeholder="Example English, Hindi"
                                                value={x.lang}
                                                onChange={abc => handleInputChange(abc, i)} />

                                            {inputLang.length !== 1 && <Button className='my-2 mx-2' onClick={() => handleRemoveClick(i)} variant="outline-danger">Delete</Button>}
                                            {inputLang.length - 1 === i && <Button className='my-2 mx-2' onClick={handleAddClick} variant="outline-success">Add</Button>}

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
export default Language;
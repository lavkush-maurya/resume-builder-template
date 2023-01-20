import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';


const Objective = () => {

    const [inputList, setInputList] = useState([{ objective: "", }]);
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        console.log(list);
    };


    return (

        <AccordionItem eventKey='9'>
            <AccordionHeader>Objective</AccordionHeader>
            <AccordionBody>
                <Row className="mb-3">
                    {inputList.map((x, i) => {
                        return (
                            <React.Fragment key={i}>
                                <div className="box">
                                    <Form.Group as={Col} md="12" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Form.Control
                                            as="textarea"
                                            name='objective'
                                            value={x.objective}
                                            onChange={e => handleInputChange(e, i)}
                                            placeholder="Short and engaging pitch about yourself"
                                            style={{ height: '8rem' }} />
                                    </Form.Group>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </Row>
            </AccordionBody>
        </AccordionItem>

    );
}
export default Objective;
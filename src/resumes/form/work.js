import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';


const Work = () => {

    const [inputList, setInputList] = useState([{ position: "", compName: "", compStart: "", compEnd: "", description: "", }]);
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        console.table(list);
    };





    return (

        <AccordionItem eventKey='8'>
            <AccordionHeader>Work Experience</AccordionHeader>
            <AccordionBody>
                <Row className="mb-3">
                    {inputList.map((x, i) => {
                        return (
                            <React.Fragment key={i}>
                                <div className="box">
                                    <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name='position'
                                            value={x.position}
                                            onChange={e => handleInputChange(e, i)}
                                            placeholder="Example Front-end Developer"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name='compName'
                                            value={x.compName}
                                            onChange={e => handleInputChange(e, i)}
                                            placeholder="Example Infosys, DarvinTech"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Form.Label style={{ margin: '0.4rem' }}>Start date:</Form.Label>
                                        <input style={{ margin: '0.4rem' }} type="month" id="start" name="compStart" value={x.compStart} onChange={e => handleInputChange(e, i)} htmlFor="startDate" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Form.Label style={{ margin: '0.4rem' }}>End date:</Form.Label>
                                        <input style={{ margin: '0.4rem' }} type="month" id="end" name="compEnd" value={x.compEnd} onChange={e => handleInputChange(e, i)} htmlFor="endDate" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Describe your role here"
                                            name='description'
                                            value={x.description}
                                            onChange={e => handleInputChange(e, i)}
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
export default Work;
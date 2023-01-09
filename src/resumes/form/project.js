import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';

const Project = () => {
    return (

            <AccordionItem eventKey='4'>
                <AccordionHeader>Personal Project</AccordionHeader>
                <AccordionBody>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Project Title"
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="3" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label style={{ margin: '0.4rem' }}>Start date:</Form.Label>
                            <input style={{ margin: '0.4rem' }} type="date" id="start" name="proj-start" for="startDate" />
                        </Form.Group>
                        <Form.Group as={Col} md="3" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label style={{ margin: '0.4rem' }}>End date:</Form.Label>
                            <input style={{ margin: '0.4rem' }} type="date" id="end" name="proj-end" for="endDate" />
                        </Form.Group>

                        <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>Project Description</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                placeholder="Detail about your project"
                            />
                        </Form.Group>
                    </Row>
                </AccordionBody>
            </AccordionItem>

    );
}

export default Project;
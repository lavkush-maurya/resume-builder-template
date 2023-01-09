import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';


const Work = () => {
    return (

            <AccordionItem eventKey='8'>
                <AccordionHeader>Work Experience</AccordionHeader>
                <AccordionBody>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>Position</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Example Front-end Developer"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Example Infosys, DarvinTech"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label style={{ margin: '0.4rem' }}>Start date:</Form.Label>
                            <input style={{ margin: '0.4rem' }} type="date" id="start" name="comp-start" for="startDate" />
                        </Form.Group>
                        <Form.Group as={Col} md="3" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label style={{ margin: '0.4rem' }}>End date:</Form.Label>
                            <input style={{ margin: '0.4rem' }} type="date" id="end" name="comp-end" for="endDate" />
                        </Form.Group>
                        <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Describe your role here"
                                style={{ height: '4rem' }} />
                        </Form.Group>
                    </Row>
                </AccordionBody>
            </AccordionItem>

    );
}
export default Work;
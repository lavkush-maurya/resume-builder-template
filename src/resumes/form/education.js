import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';


const Education = () => {
    return (

            <AccordionItem eventKey='3'>
                <AccordionHeader>Education</AccordionHeader>
                <AccordionBody>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>Study Program</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Example MCA"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>College Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Place of Education / Institution"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label style={{ margin: '0.4rem' }}>Start date:</Form.Label>
                            <input style={{ margin: '0.4rem' }} type="date" id="start" name="clg-start" for="startDate" />
                        </Form.Group>
                        <Form.Group as={Col} md="3" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label style={{ margin: '0.4rem' }}>End date:</Form.Label>
                            <input style={{ margin: '0.4rem' }} type="date" id="end" name="cld-end" for="endDate" />
                        </Form.Group>
                        <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>Percentage</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Percentage or CGPA"
                            />
                        </Form.Group>
                    </Row>
                </AccordionBody>
            </AccordionItem>

    );
}
export default Education;
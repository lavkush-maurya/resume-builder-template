import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';


const Personal = () => {

    return (
        <>
            <AccordionItem eventKey='0'>
                <AccordionHeader>Personal Details</AccordionHeader>
                <AccordionBody>
                    <Form.Group className="mb-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Form.Label>Add Your Professional Photo</Form.Label>
                        <Form.Control type="file" required />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your phone number"
                            />
                        </Form.Group>

                        <FormGroup as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a Address here"
                                style={{ height: '4rem' }} />
                        </FormGroup>
                    </Row>
                </AccordionBody>
            </AccordionItem>
        </>
    );
}
export default Personal;
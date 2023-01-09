import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';


const Objective = () => {
    return (

        <AccordionItem eventKey='8'>
            <AccordionHeader>Objective</AccordionHeader>
            <AccordionBody>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Form.Control
                            as="textarea"
                            placeholder="Short and engaging pitch about yourself"
                            style={{ height: '4rem' }} />
                    </Form.Group>
                </Row>
            </AccordionBody>
        </AccordionItem>

    );
}
export default Objective;
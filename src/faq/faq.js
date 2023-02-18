import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import Footer from "../components/footer/footer";
import "./faq.css";

const FAQs = () => {
  return (
    <>
      <div className="container faq">
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="12"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <h2> How can we help you ?</h2>
          </Form.Group>
          <Form.Group
            as={Col}
            md="12"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control required type="text" placeholder="Enter Your Email" />
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe Your Query Here...."
              style={{ height: "8rem" }}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="12"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <Button className="my-2 mx-2" variant="outline-success">
              Submit
            </Button>
          </Form.Group>
        </Row>
      </div>
      <Footer />
    </>
  );
};
export default FAQs;

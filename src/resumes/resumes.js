import './resumes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Col, Form, Row } from "react-bootstrap";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Personal from './form/personal';
import Social from './form/social';
import Education from './form/education';
import Project from './form/project';
import Skill from './form/skill';
import Language from './form/language';
import Interest from './form/interest';
import Work from './form/work';
import Objective from './form/objective';


const Resumes = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <Row>
                    <Col md="6">
                        <div className="container p-0">
                            <Form>
                                <Accordion defaultActiveKey={['0']}>
                                    <Personal />
                                    <Social />
                                    <Education />
                                    <Project />
                                    <Skill />
                                    <Language />
                                    <Interest />
                                    <Work />
                                    <Objective />
                                </Accordion>
                            </Form>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="container p-0">
                            <Form>
                                <Accordion defaultActiveKey={['0']}>
                                    <Personal />
                                    <Social />
                                    <Education />
                                    <Project />
                                    <Skill />
                                    <Language />
                                    <Interest />
                                    <Work />
                                    <Objective />
                                </Accordion>
                            </Form>
                        </div>
                    </Col>

                </Row>
            </div>
            <Footer />
        </>
    );
}

export default Resumes;
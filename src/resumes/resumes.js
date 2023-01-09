import './resumes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Col, Form, Row } from "react-bootstrap";
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Education from './form/education';
import Interest from './form/interest';
import Language from './form/language';
import Objective from './form/objective';
import Personal from './form/personal';
import Project from './form/project';
import Skill from './form/skill';
import Social from './form/social';
import Work from './form/work';


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
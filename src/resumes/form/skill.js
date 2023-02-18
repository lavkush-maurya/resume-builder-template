import React, { useContext, useEffect } from "react";
import { SKILLCONTEXT } from "../../context/resumeContext/skillContext";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const Skill = () => {
  const { inputSkill, handleInputChange, handleAddClick, handleRemoveClick } =
    useContext(SKILLCONTEXT);

  useEffect(() => {
    console.log("inputSkill Skill =>>>", inputSkill);
  }, [inputSkill]);

  return (
    <AccordionItem eventKey="5">
      <AccordionHeader>Skill</AccordionHeader>
      <AccordionBody>
        <Row className="mb-3">
          <Form.Group as={Row} md="12" style={{ display: "flex" }}>
            {inputSkill.map((x, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="box">
                    <Form.Group
                      as={Col}
                      md="6"
                      className="p-2"
                      style={{ display: "flex", flexWrap: "wrap" }}
                    >
                      <FormControl
                        name="skill"
                        required
                        placeholder="Example Html, CSS"
                        value={x.skill}
                        onChange={(e) => handleInputChange(e, i)}
                      />

                      {inputSkill.length !== 1 && (
                        <Button
                          className="my-2 mx-2"
                          onClick={() => handleRemoveClick(i)}
                          variant="outline-danger"
                        >
                          Delete
                        </Button>
                      )}
                      {inputSkill.length - 1 === i && (
                        <Button
                          className="my-2 mx-2"
                          onClick={handleAddClick}
                          variant="outline-success"
                        >
                          Add
                        </Button>
                      )}
                    </Form.Group>
                  </div>
                </React.Fragment>
              );
            })}
          </Form.Group>
        </Row>
      </AccordionBody>
    </AccordionItem>
  );
};
export default Skill;

import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import { Fragment } from "react";
import { EDUCATIONCONTEXT } from "../../context/resumeContext/educationContext";
import { INTERESTCONTEXT } from "../../context/resumeContext/interestContext";
import { LANGUAGECONTEXT } from "../../context/resumeContext/languageContext";
import { OBJECTIVECONTEXT } from "../../context/resumeContext/objectiveContext";
import { PERSONALCONTEXT } from "../../context/resumeContext/personalContext";
import { PROJECTCONTEXT } from "../../context/resumeContext/projectContext";
import { SKILLCONTEXT } from "../../context/resumeContext/skillContext";
import { SOCIALCONTEXT } from "../../context/resumeContext/socialContext";
import { WORKCONTEXT } from "../../context/resumeContext/workContext";
import styles from "./simple.module.css";

const Simple = () => {
  const { inputPersonal } = useContext(PERSONALCONTEXT);
  const { inputSocial } = useContext(SOCIALCONTEXT);
  const { inputEducation } = useContext(EDUCATIONCONTEXT);
  const { inputProject } = useContext(PROJECTCONTEXT);
  const { inputSkill } = useContext(SKILLCONTEXT);
  const { inputLanguage } = useContext(LANGUAGECONTEXT);
  const { inputInterest } = useContext(INTERESTCONTEXT);
  const { inputWork } = useContext(WORKCONTEXT);
  const { inputObjective } = useContext(OBJECTIVECONTEXT);

  return (
    <Fragment>
      <div className={styles.app}>
        <Avatar
          sx={{ width: "100px", height: "100px" }}
          src={inputPersonal.photo}
          alt="Picture"
        />
        {inputPersonal.firstName}
        {inputPersonal.lastName}
        {inputPersonal.phone}
        {inputPersonal.address}
      </div>
      <div>
        {inputSocial.email}
        {inputSocial.linkedIn}
        {inputSocial.github}
        {inputSocial.instagram}
      </div>
      <div>
        {inputEducation.map((input, index) => (
          <div key={index}>
            <span>{input.studyProgram}</span>
            <span>{input.collegeName}</span>
            <span>{input.clgStart}</span>
            <span>{input.clgEnd}</span>
            <span>{input.percentage}</span>
          </div>
        ))}
      </div>
      <div>
        {inputProject.map((input, index) => (
          <div key={index}>
            <span>{input.projectName}</span>
            <span>{input.projStart}</span>
            <span>{input.projEnd}</span>
            <span>{input.description}</span>
          </div>
        ))}
      </div>
      <div>
        {inputSkill.map((input, index) => (
          <div key={index}>
            <span>{input.skill}</span>
          </div>
        ))}
      </div>
      <div>
        {inputLanguage.map((input, index) => (
          <div key={index}>
            <span>{input.language}</span>
          </div>
        ))}
      </div>
      <div>
        {inputInterest.map((input, index) => (
          <div key={index}>
            <span>{input.interest}</span>
          </div>
        ))}
      </div>

      <div className="work-experience-section px-3 px-lg-4">
        <h2 className="h3 mb-4">Work Experience</h2>
        <div className="timeline">
          {inputWork.map((input, index) => (
            <div
              className="timeline-card timeline-card-primary card shadow-sm"
              key={index}
            >
              <div className="card-body">
                <div className="h5 mb-1">
                  {input.position}
                  <span className="text-muted h6"> at {input.compName}</span>
                </div>
                <div className="text-muted text-small mb-2">
                  {input.compStart} / {input.compEnd}
                </div>
                <div>{input.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        {inputWork.map((input, index) => (
          <div key={index}>
            <span>{input.position}</span>
            <span>{input.compName}</span>
            <span>{input.compStart}</span>
            <span>{input.compEnd}</span>
            <span>{input.description}</span>
          </div>
        ))}
      </div> */}
      <div>
        <span>{inputObjective.objective}</span>
      </div>
    </Fragment>
  );
};

export default Simple;

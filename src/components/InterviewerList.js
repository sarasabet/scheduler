import React from "react";
import PropTypes from 'prop-types';
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem.js";
//parent is Application


export default function InterviewerList(props) {

  const { interviewers, onChange, interviewer } = props;
  const interviewersArray = [];
  //map each and every {interviwers} to a componenet with a unique key , push it back tto [interviewersArray],
  interviewers.map(currentInterviewer => {
    return interviewersArray.push(
      <InterviewerListItem
        key={currentInterviewer.id}
        name={currentInterviewer.name}
        avatar={currentInterviewer.avatar}
        selected={currentInterviewer.id === interviewer}
        setInterviewer={(e) => onChange(currentInterviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewersArray}
      </ul>
    </section>
  );
};
//this block is  a test to check type of props 
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};


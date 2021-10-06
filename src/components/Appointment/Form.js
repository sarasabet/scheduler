import React, { useState } from 'react';
import Button from "components/Button.js";
import InterviewerList from "components/InterviewerList.js";

export default function From(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  

  const { onCancel, onSave } = props;
  // validate input/student name not be empty 
  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError('')
    props.onSave(name, interviewer);
  }

  

  //When the user clicks the Cancel button, we clear the form values
  const reset = () => {
    setName("")
    setInterviewer(null)
  }

  const cancel = () => {
    reset()
    onCancel()
  }



  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>

          <input
            data-testid="student-name-input"
            className="appointment__create-input text--semi-bold"

            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter Student Name"


          />
        </form>
        <section className="appointment__validation">{error}</section>


        <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel} >Cancel</Button>
          <Button confirm onClick={() => validate()} >Save</Button>
        </section>
      </section>
    </main>

  )
}

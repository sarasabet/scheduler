import React, { useState } from 'react';
import Button from "components/Button.js";
import InterviewerList from "components/InterviewerList.js";

export default function From(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  //When the user clicks the Cancel button, we clear the form values
  const reset = () => {
    setName("")
    setInterviewer(null)
  }

  const cancel = () => {
    reset()
    props.onCancel()
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
 
          <input
            className="appointment__create-input text--semi-bold"

            value={name}
            onChange={(event) => setName(event.target.value)}
    
            type="text"
            placeholder="Enter Student Name"

          />
        </form>
     
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel} >Cancel</Button>
          <Button confirm onClick={props.onSave} >Save</Button>
        </section>
      </section>
    </main>

  )
}

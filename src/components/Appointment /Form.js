import React from "react";
import Button from "components/Button.js";
import InterviewerList from "components/InterviewerList.js";

export default function From(props) {
  console.log({props})
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            value={props.value}
            {/*the value odes not work if is called name , why ? ?? */}
            type="text"
            placeholder="Enter Student Name"

          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={props.interviewer}
          setInterviewer={props.setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger coChange={props.onCancel} >Cancel</Button>
          <Button confirm onClick={props.onSave} >Save</Button>
        </section>
      </section>
    </main>

  )
}
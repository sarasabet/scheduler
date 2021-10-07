import React, { Fragment } from 'react'

import "components/Application.scss";
import Header from './Header.js';
import Show from './Show.js';
import Empty from './Empty.js';
import Form from "./Form.js";
import useVisualMode from "hooks/useVisualMode";
import Status from './Status.js';
import Confirm from './Confirm.js';
import Error from "./Error";

export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const EDIT = "EDIT";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  // if props.interview exit, it means there is an interview, the mode should be show 
  const { mode, transition, back } = useVisualMode(

    props.interview ? SHOW : EMPTY

  );

  function save(name, interviewer) {
    if (!interviewer) { return null }
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING)
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function deleteAppointment(id) {

    transition(DELETING, true)
    props
      .cancelInterview(id)
      .then(() => transition(EMPTY))
      .catch(() => { transition(ERROR_DELETE, true) })
  };

  return (
    <Fragment>
      <article className='appointment'>
        <Header time={props.time} />

        {mode === EMPTY &&
          <Empty onAdd={() => transition(CREATE)}
          />
        }
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            onEdit={() => transition(EDIT)}
            onDelete={() => transition(CONFIRM)}
          />
        )}
        {mode === CREATE && (<Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
        )}
        {mode === SAVING && (
          <Status message='Saving'
          />
        )}
        {mode === EDIT && (
          <Form
            name={props.interview.student}
            interviewer={props.interview.interviewer.id}
            interviewers={props.interviewers}
            onCancel={() => back()}
            onSave={ save}
            // {/*   onSave={() => save()}*/}
          />
        )}
        {mode === DELETING && (
          <Status message='Deleting'
          />
        )}
        {mode === CONFIRM && (
          <Confirm
            message="Are you sure you would like to delete this appointment?"
            onCancel={() => back()}
            onConfirm={() => deleteAppointment(props.id)}
          />
        )}
        {mode === ERROR_SAVE && (
          <Error
            message="Appointment could not be saved!!"
            onClose={() => back()}
          />
        )}
        {mode === ERROR_DELETE && (
          <Error
            message="Appointment could not be deleted!!"
            onClose={() => back()}
          />
        )}
      </article>
    </Fragment>


  )
}


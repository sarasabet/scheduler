import React, { Fragment, useDebugValue } from 'react'


import "components/Application.scss"
import Header from './Header.js'
import Show from './Show.js'
import Empty from './Empty.js'
import useVisualMode from "hooks/useVisualMode";




export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  // if props.interview exit, it means there is an interview, the mode should be show 
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY

  );

  return (
    <Fragment>
      <article className='appointment'>
        <Header time={props.time} />

        {mode === EMPTY &&
          <Empty onAdd={() => transition(EMPTY)}/>
        }

        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
          />
        )}


      </article>
    </Fragment>


  )
}
import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList.js";
import Appointment from "components/Appointment/index.js"


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 3,
    time: "1:30pm",
    interview: {
      student: "Johnny",
      interviewer: {
        id: 2,
        name: "Tori Malcom",
        avatar: "https://i.imgur.com/Nmx0Qxo.png"
      }
    }
  },
  {
    id: 4,
    time: "2pm",
  },
  {
    id: 5,
    time: "2:30pm",
    interview: {
      student: "Rosie",
      interviewer: {
        id: 3,
        name: "Mildred Nazir",
        avatar: "https://i.imgur.com/T2WwVfS.png"
      }
    }
  },
  {
    id: 6,
    time: "4pm",
    interview: {
      student: "Moo",
      interviewer: {
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg"
      }
    }
  }
];

export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  //udpate dayeState 
  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    axios.get('/api/days')
      .then(response => {
        const days = response.data
        console.log("days:", days);
        setState(prev => ({ ...prev,days }))
      });
  }, [])


  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            day={state.day}
            days={state.days}
            setDay={setState}
          />

        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map(appointment => {
          return (

            <Appointment
              key={appointment.id}
              id={appointment.id}
              time={appointment.time}
              interview={appointment.interview}
            />
          )
        })}
      </section>


    </main>
  );
}


import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });

  //udpate dayeState 
  const setDay = day => {
    setState({ ...state, day });
  }

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
      .then(all => {

        setState(prev => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }))
      });
  }, []);

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const days = updateSpots(id, appointments)
        setState({
          ...state,
          days,
          appointments
        });
      });
  };
  // to cancel /delete an interview from API 
  const cancelInterview = async id => {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const days = updateSpots(id, appointments)
        setState({
          ...state,
          days,
          appointments
        });
      });
  }

  const updateSpots = (id, appointments) => {

    return state.days.map(day => {

      let availableSpots = 0;

      if (day.appointments.includes(id)) {
        for (const appointment_id of day.appointments) {
          if (appointments[appointment_id].interview === null) {
            availableSpots += 1
          }
        }
        day.spots = availableSpots


      }
      return day
    })




  }


  return {

    state,
    setDay,
    bookInterview,
    cancelInterview,

  }
}

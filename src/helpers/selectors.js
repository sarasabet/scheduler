export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(element => element.name === day);

  if (filteredDays.length > 0) {
    const appointments = filteredDays[0].appointments;
    const appointmentsForDay = [];

    for (const appointment of appointments) {
      if (state.appointments[appointment]) {
        appointmentsForDay.push(state.appointments[appointment])
      }
    }

    return appointmentsForDay;
  }

  return filteredDays;
};

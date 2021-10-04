import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);


  function transition( mode, replace=false) {

    setMode(mode)
    let newHistory;
    if(replace) {
      newHistory = [...history.slice(0-1)]
    } else {
      newHistory =[...history, mode]
    }
   setMode(mode)
  }


  const back  = () => {
    let newHistory;
    if (history.length > 1) {
      newHistory = [...history.slice(0, -1)]
    } else {
      newHistory = [...history]
    }
    setMode(history[history.length -1])

  }

  return { mode, transition, back }
};


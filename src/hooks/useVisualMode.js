import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  console.log("1",history, mode)

  function transition( mode, replace=false)  {
    console.log("transition",transition)
    if(replace) {
      setHistory(prev => [...prev.slice(0,-1), mode]) 
    } else {
      setHistory(prev => [...prev, mode]) 
    }
   setMode(mode)
  }
  function back() {
    if (history.length > 1) {
      console.log('2',history, mode)
      setMode(history[history.length - 2]);
      setHistory(prev => [...prev.slice(0, -1)]);
    }
  }
 

  return { mode, transition, back }
};


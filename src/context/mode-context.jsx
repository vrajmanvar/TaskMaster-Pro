/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModeContext = createContext({
  mode: "dark",
  toggleMode: () => {},
});

export const ModeContextProvider = (props) => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </ModeContext.Provider>
  );
};

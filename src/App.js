import React, { useState, useEffect } from "react";
import "./styles.css";
import Rendermaincomponent from "./Components/Checkbox";

export default function App() {
  const [disabledButton, setDisabledButton] = useState(true);
  const [storeCheckBoxLabels, setStoreCheckBoxLabels] = useState([]);
  const [selectedCounter, setSelectedCounter] = useState("");
  const handleCheckboxes = (checkStatus, checkboxLabels) => {
    if (checkStatus === true) {
      setStoreCheckBoxLabels([...storeCheckBoxLabels, checkboxLabels]);
    } else if (checkStatus === false) {
      setStoreCheckBoxLabels(
        [...storeCheckBoxLabels].filter(
          (filteredLabels) => filteredLabels !== checkboxLabels
        )
      );
    }
  };

  useEffect(() => {
    setSelectedCounter(storeCheckBoxLabels.length);
    if (storeCheckBoxLabels.length === 0) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [storeCheckBoxLabels]);

  return (
    <>
      <h1>Multi Select Checkbox</h1>
      <div className="App">
        <Rendermaincomponent
          disabledButton={disabledButton}
          handleCheckboxes={handleCheckboxes}
          selectedCounter={selectedCounter}
        />
      </div>
    </>
  );
}

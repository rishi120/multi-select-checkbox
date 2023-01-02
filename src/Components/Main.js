import React from "react";
import Rendercheckboxes from "./Checkbox";

const Rendermaincomponent = ({
  disabledButton,
  handleCheckboxes,
  selectedCounter
}) => {
  return (
    <Rendercheckboxes
      disabledButton={disabledButton}
      handleCheckboxes={handleCheckboxes}
      selectedCounter={selectedCounter}
    />
  );
};

export default Rendermaincomponent;

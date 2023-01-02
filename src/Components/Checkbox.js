import react from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import "../styles.css";

const Rendercheckboxes = ({
  disabledButton,
  handleCheckboxes,
  selectedCounter
}) => {
  const checkBoxLabels = ["Checkbox 1", "Checkbox 2", "Checkbox 3"];

  return (
    <div className="checkbox-wrapper">
      <p>{selectedCounter}/3 Selected</p>
      <FormGroup className="form-group">
        {checkBoxLabels.map((renderCheckBoxLabels, index) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) =>
                    handleCheckboxes(e.target.checked, renderCheckBoxLabels)
                  }
                />
              }
              label={renderCheckBoxLabels}
              key={index}
            />
          );
        })}
      </FormGroup>
      {disabledButton === true ? (
        <Button disabled variant="contained">
          Confirm
        </Button>
      ) : (
        <Button variant="contained"> Confirm</Button>
      )}
    </div>
  );
};

export default Rendercheckboxes;

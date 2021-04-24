import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Button,
  Chip,
} from "@material-ui/core";

import Nationality, { countryNameMap } from "model/nationality";
import ReactCountryFlag from "react-country-flag";
import useSettings from "./settings-hook";
import useSettingsStyles from "./settings-styles";

export default function SettingsScreen() {
  const classes = useSettingsStyles();
  const {
    handleRestartAppTutorial,
    nationalities,
    setNationalitiesWrapper,
    tourFinished,
  } = useSettings();
  return (
    <Box>
      <Typography variant="h4">Settings</Typography>
      <TextField
        value={nationalities}
        select
        className={classes.nationalitiesField}
        margin="normal"
        size="small"
        variant="outlined"
        label="Nationalities"
        data-testid="nationality-input"
        onChange={(e) => setNationalitiesWrapper(e.target.value as any)}
        SelectProps={{
          multiple: true,
          MenuProps: {
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          },
          renderValue: (nats) =>
            (nats as Nationality[]).map((nat) => (
              <Chip
                key={nat}
                className={classes.countryChip}
                variant="outlined"
                label={
                  <>
                    <ReactCountryFlag
                      countryCode={nat as Nationality}
                      svg={true}
                      className={classes.countryFlag}
                    />
                    {countryNameMap[nat]}
                  </>
                }
              />
            )),
        }}
      >
        {[Nationality.CH, Nationality.FR, Nationality.GB, Nationality.ES].map(
          (nat) => (
            <MenuItem value={nat} key={nat}>
              <ReactCountryFlag
                countryCode={nat}
                svg={true}
                className={classes.countryFlag}
              />
              {countryNameMap[nat]}
            </MenuItem>
          )
        )}
      </TextField>
      <br />
      <Button
        variant="outlined"
        color="primary"
        disabled={!tourFinished}
        onClick={handleRestartAppTutorial}
      >
        Restart app tutorial
      </Button>
    </Box>
  );
}

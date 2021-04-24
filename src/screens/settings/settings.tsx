import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Button,
} from "@material-ui/core";

import Nationality from "model/nationality";
import ReactCountryFlag from "react-country-flag";
import useSettings from "./settings-hook";
import useSettingsStyles from "./settings-styles";

export default function SettingsScreen() {
  const classes = useSettingsStyles();
  const {
    handleRestartAppTutorial,
    nationality,
    changeNationality,
    tourFinished,
  } = useSettings();
  return (
    <Box>
      <Typography variant="h4">Settings</Typography>
      <TextField
        value={nationality}
        select
        margin="normal"
        size="small"
        variant="outlined"
        label="Nationality"
        onChange={(e) => changeNationality(e.target.value as Nationality)}
      >
        <MenuItem value={Nationality.CH}>
          <ReactCountryFlag
            countryCode={Nationality.CH}
            svg={true}
            className={classes.countryFlag}
          />
          Switzerland
        </MenuItem>
        <MenuItem value={Nationality.ES}>
          <ReactCountryFlag
            countryCode={Nationality.ES}
            svg={true}
            className={classes.countryFlag}
          />
          Spain
        </MenuItem>
        <MenuItem value={Nationality.FR}>
          <ReactCountryFlag
            countryCode={Nationality.FR}
            svg={true}
            className={classes.countryFlag}
          />
          French
        </MenuItem>
        <MenuItem value={Nationality.GB}>
          <ReactCountryFlag
            countryCode={Nationality.GB}
            svg={true}
            className={classes.countryFlag}
          />
          Great Britain
        </MenuItem>
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

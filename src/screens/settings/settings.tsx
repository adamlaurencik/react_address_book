import { Box, TextField, Typography, MenuItem } from "@material-ui/core";
import useLocalStorage from "hooks/local-storage-hook";
import Nationality from "model/nationality";
import ReactCountryFlag from "react-country-flag";
import useSettingsStyles from "./settings-styles";

export default function SettingsScreen() {
  const [nationality, setNationality] = useLocalStorage(
    "nationality",
    Nationality.CH
  );

  const classes = useSettingsStyles();

  return (
    <Box>
      <Typography variant="h4">Settings</Typography>
      <br />
      <TextField
        value={nationality}
        select
        size="small"
        variant="outlined"
        label="Nationality"
        onChange={(e) => setNationality(e.target.value as Nationality)}
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
    </Box>
  );
}

import { Box, TextField, Typography, MenuItem } from "@material-ui/core";
import useLocalStorage from "hooks/local-storage-hook";
import Nationality from "model/nationality";

export default function SettingsScreen() {
  const [nationality, setNationality] = useLocalStorage(
    "nationality",
    Nationality.CH
  );

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
        <MenuItem value={Nationality.CH}>Switzerland</MenuItem>
        <MenuItem value={Nationality.ES}>Spain</MenuItem>
        <MenuItem value={Nationality.FR}>French</MenuItem>
        <MenuItem value={Nationality.GB}>Great Britain</MenuItem>
      </TextField>
    </Box>
  );
}

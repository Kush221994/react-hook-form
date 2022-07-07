import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Country = () => {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }} fullWidth>
        <Select
          value={country}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Choose Your Country</em>
          </MenuItem>
          <MenuItem value={1}>Afghanistan</MenuItem>
          <MenuItem value={2}>America</MenuItem>
          <MenuItem value={3}>Bangladesh</MenuItem>
          <MenuItem value={4}>Belgium</MenuItem>
          <MenuItem value={5}>Canada</MenuItem>
          <MenuItem value={6}>China</MenuItem>
          <MenuItem value={7}>Democratic Republic of the Congo</MenuItem>
          <MenuItem value={8}>Denmark</MenuItem>
          <MenuItem value={9}>Egypt</MenuItem>
          <MenuItem value={10}>Ethiopia</MenuItem>
          <MenuItem value={11}>Finland</MenuItem>
          <MenuItem value={12}>France</MenuItem>
          <MenuItem value={13}>Georgia</MenuItem>
          <MenuItem value={14}>Greece</MenuItem>
          <MenuItem value={15}>Haiti</MenuItem>
          <MenuItem value={16}>Hungary</MenuItem>
          <MenuItem value={17}>India</MenuItem>
          <MenuItem value={18}>Ireland</MenuItem>
          <MenuItem value={19}>Japan</MenuItem>
          <MenuItem value={20}>Jordan</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Country;

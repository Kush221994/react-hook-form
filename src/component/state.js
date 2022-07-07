import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const State = () => {
  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }} fullWidth>
        <Select
          value={state}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Choose Your State</em>
          </MenuItem>
          <MenuItem value={1}>Andhra Pradesh</MenuItem>
          <MenuItem value={2}>Arunachal Pradesh </MenuItem>
          <MenuItem value={3}>Assam</MenuItem>
          <MenuItem value={4}>Bihar</MenuItem>
          <MenuItem value={5}>Goa</MenuItem>
          <MenuItem value={6}>Gujarat</MenuItem>
          <MenuItem value={7}>Haryana</MenuItem>
          <MenuItem value={8}>Himachal Pradesh</MenuItem>
          <MenuItem value={9}>Jammu & Kashmir</MenuItem>
          <MenuItem value={10}>Karnataka</MenuItem>
          <MenuItem value={11}>Kerala</MenuItem>
          <MenuItem value={12}>Madhya Pradesh</MenuItem>
          <MenuItem value={13}>Maharashtra</MenuItem>
          <MenuItem value={14}>Manipur </MenuItem>
          <MenuItem value={15}>Meghalaya</MenuItem>
          <MenuItem value={16}>Mizoram</MenuItem>
          <MenuItem value={17}>Nagaland </MenuItem>
          <MenuItem value={18}>Orissa</MenuItem>
          <MenuItem value={19}>Punjab</MenuItem>
          <MenuItem value={20}>Rajasthan</MenuItem>
          <MenuItem value={21}>Sikkim</MenuItem>
          <MenuItem value={22}>Tamil Nadu </MenuItem>
          <MenuItem value={23}>Tripura</MenuItem>
          <MenuItem value={24}>Uttar Pradesh</MenuItem>
          <MenuItem value={25}>West Bengal</MenuItem>
          <MenuItem value={26}>Chhattisgarh </MenuItem>
          <MenuItem value={27}>Uttarakhand </MenuItem>
          <MenuItem value={28}>Jharkhand</MenuItem>
          <MenuItem value={29}>Telangana</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default State;

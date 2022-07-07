import React from "react";
import { useForm } from "react-hook-form";
import Country from "./country";
import State from "./state";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

const Home2 = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Box
        sx={{
          width: 500,
          height: 500,

          mx: "auto",
          mt: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ mx: "auto", mt: "20px", fontWeight: "bold", fontSize: 30 }}>
          Material UI with React Hook Form
        </Box>
        <Box>
          <TextField
            {...register("firstName")}
            sx={{ mt: "10px" }}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name="firstName"
            fullWidth
          />
          <TextField
            sx={{ mt: "10px" }}
            {...register("lastName")}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="lastName"
            fullWidth
          />
          <TextField
            sx={{ mt: "10px" }}
            {...register("email")}
            id="outlined-basic"
            label="E-Mail"
            variant="outlined"
            name="email"
            fullWidth
          />
          <TextField
            sx={{ mt: "10px" }}
            {...register("Address")}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            name="address"
            fullWidth
          />{" "}
          <Box sx={{ mt: "10px", ml: "10px", fontWeight: "bold" }}>
            Phone Number:
          </Box>
          <Box sx={{ mt: "10px" }}>
            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, width: "20ch" }}
              {...register("phoneNumber")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ mt: "10px", fontWeight: "bold", ml: "10px" }}>
            Choose Your Gender
          </Box>
          <Box sx={{ mt: "10px" }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              {...register("gender")}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                {...register("gender")}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                {...register("gender")}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                {...register("gender")}
              />
            </RadioGroup>
          </Box>
          <Box sx={{ mt: "10px", fontWeight: "bold", ml: "10px" }}>
            Country:
          </Box>
          <Box>
            <Country />
          </Box>
          <Box sx={{ mt: "10px", fontWeight: "bold", ml: "10px" }}>State:</Box>
          <Box>
            <State />
          </Box>
          <FormControlLabel
            control={<Checkbox />}
            label="I Agree All Terms and Conditions"
          />
          <Box sx={{ display: "flex", flexDirection: "column", mx: "auto" }}>
            {" "}
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home2;

import * as React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
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
import { IconButton } from "@mui/material";
import img1 from "../assets/git.png";

const Home2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row-reverse", bgcolor: "#FB6B90" }}
    >
      <Box
        sx={{
          display: "flex",

          justifyContent: "flex-end",
        }}
      >
        <a href="https://github.com/Kush221994/react-hook-form" target="_blank">
          <IconButton>
            <img src={img1} className="img" />
          </IconButton>
        </a>
      </Box>
      <Box
        sx={{
          width: 500,

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
            {...register("firstName", { required: "*First name is required" })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
            sx={{ mt: "10px" }}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name="firstName"
            autoComplete="off"
            fullWidth
          />
          <TextField
            sx={{ mt: "10px" }}
            {...register("lastName", { required: "*LastName is required" })}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="lastName"
            autoComplete="off"
            fullWidth
          />
          <TextField
            sx={{ mt: "10px" }}
            {...register("email", { required: "*E-Mail is required" })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            id="outlined-basic"
            label="E-Mail"
            variant="outlined"
            name="email"
            autoComplete="off"
            fullWidth
          />
          <TextField
            sx={{ mt: "10px" }}
            {...register("address", { required: "*Address is required" })}
            error={Boolean(errors.address)}
            helperText={errors.address?.message}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            name="address"
            autoComplete="off"
            fullWidth
          />{" "}
          <Box sx={{ mt: "10px", ml: "10px", fontWeight: "bold" }}>
            Phone Number:
          </Box>
          <Box sx={{ mt: "10px" }}>
            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, width: "20ch" }}
              {...register("phoneNumber", {
                required: "*Enter your phone number",
                minLength: 10,
                maxLength: 10,
              })}
              error={Boolean(errors.phoneNumber)}
              helperText={errors.phoneNumber?.message}
              autoComplete="off"
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
              {...register("gender", { required: "*Select your gender" })}
              error={Boolean(errors.gender)}
              helperText={errors.gender?.message}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                {...register("gender", { required: "*Select your gender" })}
                error={Boolean(errors.gender)}
                helperText={errors.gender?.message}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                {...register("gender", { required: "*Select your gender" })}
                error={Boolean(errors.gender)}
                helperText={errors.gender?.message}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                {...register("gender", { required: "*Select your gender" })}
                error={Boolean(errors.gender)}
                helperText={errors.gender?.message}
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
            {...register("Agreement", {
              required: "*Accept the tems and conditions",
            })}
            label="I Agree All Terms and Conditions"
            name="Agreement"
          />
          <ErrorMessage
            errors={errors}
            name="Agreement"
            render={({ message }) => <p>{message}</p>}
          />
          <Box sx={{ display: "flex", flexDirection: "column", mx: "auto" }}>
            {" "}
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home2;

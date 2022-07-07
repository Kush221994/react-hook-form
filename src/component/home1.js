import React from "react";

import { useForm } from "react-hook-form";

const Home1 = () => {
  const { register, handleSubmit } = useForm();
  // const [data, setData] = useState("");
  // const onSubmit = (event) => {
  //   setData(event.target.data);
  // };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form">
      <div className="main-content">
        <input {...register("firstName")} type="text" placeholder="FirstName" />

        <input {...register("lastName")} type="text" placeholder="LastName" />

        <input
          {...register("Password")}
          type="password"
          placeholder="Password"
        />

        <select {...register("category")}>
          <option value="">select...</option>
          <option value="option A">Option A</option>
          <option value="option B">Option B</option>
          <option value="option C">Option C</option>
          <option value="option ">Option D</option>
        </select>
        <label>
          Male
          <input
            {...register("gender")}
            value="male"
            type="radio"
            placeholder="Male"
          />
        </label>
        <label>
          Female
          <input
            {...register("gender")}
            value="female"
            type="radio"
            placeholder="Female"
          />
        </label>
        <label>
          Maruti
          <input {...register("car")} value="maruti" type="checkbox" />
        </label>

        <label>
          Tata
          <input {...register("car")} value="tata" type="checkbox" />
        </label>
        <input {...register("range")} type="range" min="1" max="100" />
        <button onClick={handleSubmit(onSubmit)}>Submit</button>
        {/* <p>{data}</p> */}
      </div>
    </div>
  );
};

export default Home1;

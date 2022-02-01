import React from "react";
import { TextField, Grid, InputLabel } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, isError }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
    <InputLabel>{label}</InputLabel>
    <Controller
        render={({ field }) => <TextField {...field} />}
        name={name}
        defaultValue=""
        control={control}
        label={label}
        fullWidth
        required
       error={isError} 
        variant="outlined"
        />
</Grid>
  );
};

export default FormInput;

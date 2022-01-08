import TextField from '@mui/material/TextField';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const NameField = ({name, label}) => {
    const { control , formState: {errors}} = useFormContext();
    const hasError = errors[name];
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({field }) => (
                    <TextField 
                        margin="normal"
                        {...field}
                        label={label}
                        fullWidth
                        error={!!hasError}
                        helperText={errors[name]?.message}
                    />
                )}
            />
        </>
    );
};

export default NameField;
import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Breadcrum from './Breadcrum'

export default function AddUser() {

    return (
        <div>
            <Breadcrum></Breadcrum>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                </div>
            </Box>
        </div>

    );
}
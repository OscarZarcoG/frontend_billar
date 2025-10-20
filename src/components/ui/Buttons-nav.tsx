import React from "react";
import { Button, Stack } from "@mui/material";
import { getButtonStyles } from "../../utils/landing/styles";

export const ButtonsNav = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" sx={getButtonStyles('outline')}>
                Login
            </Button>
            
            <Button
                variant="contained"
                sx={getButtonStyles('primary')}
            >
                Register
            </Button>
        </Stack>
    );
}
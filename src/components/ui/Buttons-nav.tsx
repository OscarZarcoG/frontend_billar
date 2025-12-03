import React from "react";
import { Button, Stack } from "@mui/material";
import { getButtonStyles } from "../../utils/landing/styles";
import { useTranslation } from "../../hooks/language/useTranslation";
import LanguageSelector from "./LanguageSelector";

export const ButtonsNav = () => {
    const { t } = useTranslation();
    
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            {/* <LanguageSelector variant="compact" />  */}
            
            <Button 
                variant="outlined" 
                    sx={getButtonStyles('outline')} 
                onClick={() => window.location.href = '/login'}
            >
                {t('common.login')}
            </Button>
            
            <Button
                variant="contained"
                sx={getButtonStyles('primary')}
                onClick={() => window.location.href = '/register'}
            >
                {t('common.register')}
            </Button>
        </Stack>
    );
}

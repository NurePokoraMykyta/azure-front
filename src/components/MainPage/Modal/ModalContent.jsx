import React from "react";
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const theme = createTheme();

const ModalContent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    borderRadius: theme.shape.borderRadius,
    width: 400,
}));

export default ModalContent;
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import EastIcon from '@mui/icons-material/East';
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';
import Page from './Page';

const LandingPage = ({ onButtonClick, titleRef }) => {
    const theme = useTheme();
    return (
    <Page ref={titleRef}>
        <Stack alignItems='flex-start' justifyContent="space-around" height="100%">
            <Box>
                <Typography variant="h1">Hi, I'm <span style={{ color: theme.palette.primary.main }}>Madel Bautista</span></Typography>
                <Typography variant="h5">and I am a Full Stack Software Engineer.</Typography>
            </Box>
            <Button 
                variant="outlined" 
                endIcon={<EastIcon/>}
                onClick={() => onButtonClick()}
            >Work With Me</Button>
        </Stack>
    </Page>
);

}
export default LandingPage;
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import EastIcon from '@mui/icons-material/East';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';

export const LandingPage = () => {
    const theme = useTheme();
    return (
    <Stack alignItems='flex-start' spacing={1} justifyContent="center" height="100vh">
            <Typography variant="h1">Hi, I'm <span style={{ color: theme.palette.primary.main }}>Madel Bautista</span></Typography>
            <Typography variant="h5">and I'm a Software Engineer.</Typography>
            <Button variant="outlined" endIcon={<EastIcon/>}>Work With Me</Button>
    </Stack>
);

}
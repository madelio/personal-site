import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import { getPalette } from '../theme';


//TODO: Add isInverted to flip the color to dark mode
const Page = ({ title, children, theme}) => {
    const { palette }= getPalette(theme);
return (
    <Container sx={{ height: '100vh', backgroundColor: palette.background.main }}>
        {title && 
            <Typography sx={{ color: palette.secondary.main }} variant="h1">
                {title}
            </Typography>
        }
        {children}
    </Container>
)}
export default Page;
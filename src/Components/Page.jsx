import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import { forwardRef } from 'react';
// import { getPalette } from '../theme';


//TODO: Add isInverted to flip the color to dark mode
const Page = forwardRef(({ title, children }, ref) => {
    // const { palette }= getPalette(theme);
return (
    <Container sx={{ height: '100vh' }} >
        {title && 
            <Typography variant="h1" color="secondary" ref={ref}>
                {title}
            </Typography>
        }
        {children}
    </Container>
)});

export default Page;
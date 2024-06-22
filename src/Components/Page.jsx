import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


//TODO: Add isInverted to flip the color to dark mode
const Page = ({ title, children, isInverted }) => (
    <Box sx={{height: '100vh',  backgroundColor: isInverted && '#fefae0'}} >
        {title && 
            <Typography color="secondary" variant="h1">
                {title}
            </Typography>
        }
        {children}
    </Box>
)
export default Page;
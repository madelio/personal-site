import Page from '../Page';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const AboutMe = () => {
    return (
        <Page title="About Me">
            <Stack spacing={2}>
                <Typography>
                    With over six years of experience in the software development industry, I specialize in Full Stack development. My expertise spans various frameworks, including Ember and React, and extends to backend technologies like SQL Server and C#. Additionally, I have experience in mobile development using Xamarin.
                </Typography>
                <Typography>
                    Throughout my career, I have consistently focused on writing clean, scalable code while solving interesting and complex problems. My diverse skill set and dedication to high-quality software have enabled me to contribute effectively to various projects, ensuring they are both efficient and maintainable. I am always eager to learn and adapt, constantly seeking out new challenges that allow me to innovate and grow as a developer.
                </Typography>
            </Stack>
        </Page>
    )
}

export default AboutMe;
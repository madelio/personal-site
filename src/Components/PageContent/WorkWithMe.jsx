import Page from '../Page';
import { Typography } from '@mui/material';

const WorkWithMe = ({ titleRef }) => {
    return (
        <Page title="Work with Me" theme="dark" ref={titleRef}>
            <Typography>Contact me at:</Typography>
            <Typography>madel.bautista@gmail.com</Typography>
        </Page>
    )
}

export default WorkWithMe;
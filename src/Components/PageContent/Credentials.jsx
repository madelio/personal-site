import Page from '../Page';
import Stack from '@mui/material/Stack';
import ListGroup from '../ListGroup';
import { Typography } from '@mui/material';

const Credentials = () => {
    const educationList = ['B.S. Mathematics-Computer Science', 'Management Science Mninor']
    const frontEndFrameworks = ['ReactJS', 'EmberJS'];
    return (
    <Page title="Credentials">
        <Stack>
            <ListGroup
                title="Education"
                items={educationList}
            />
            <ListGroup
                title="Skills"
                items={frontEndFrameworks}
            />
        </Stack>
    </Page>
)}

export default Credentials;
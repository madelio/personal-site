import Page from '../Page';
import Stack from '@mui/material/Stack';
import ListGroup from '../ListGroup';
import { Typography } from '@mui/material';

const Credentials = ({ titleRef }) => {
    const educationList = ['B.S. Mathematics-Computer Science', 'Management Science Mninor']
    const frontEndFrameworks = ['ReactJS', 'EmberJS'];
    return (
    <Page title="Credentials" ref={titleRef}>
        <Stack>
            {/* <ListGroup
                title="Education"
                items={educationList}
            />
            <ListGroup
                title="Skills"
                items={frontEndFrameworks}
            /> */}
        </Stack>
    </Page>
)}

export default Credentials;
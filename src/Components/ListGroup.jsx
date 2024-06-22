import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ListGroup = ({ title, items }) => (
    <List
        subheader={<ListSubheader>{title}</ListSubheader>}
    >
        {
            items?.map(item => (
                <ListItem>
                    <ListItemText>
                        {item}
                    </ListItemText>
                </ListItem>
            ))
        }
    </List>
)
export default ListGroup;

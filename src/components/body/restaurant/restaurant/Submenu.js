import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     'aria-controls': `scrollable-auto-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


const Submenu = () => {
    const category = useSelector((state) => state.category)

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    
    let arr = new Array([]);
    const indexCount = () => {
        let length = category.length
        for (let i=0; i<length; i++) {
            arr.push(i)
        }
        return arr
    }

    indexCount()

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="inherit"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >          
            {category.map((c) => (
                <Tab key={c._id} component={Link} to={`/restaurant/${c.categoryCode}`} label={c.foodCategory} />
            ))}
            </Tabs>
            </AppBar>
        </div>
    )
}
export default React.memo(Submenu)

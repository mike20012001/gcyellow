import React, { useEffect } from 'react'
import { getFoodList } from '../../../actions/menuActions'
import { useDispatch, useSelector } from 'react-redux'
import Submenu from '../restaurant/restaurant/Submenu'

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './stylesMenu'
import MenuHeader from './MenuHeader'
import MenuContents from './MenuContents'
import Flyer from './Flyer'





function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'span'}>{children}</Typography>
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
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Menu = (props) => {
    const dispatch = useDispatch()
    const foodList = useSelector((state) => state.menu) // 메뉴
    const restaurantInfo = useSelector((state) => state.restaurant) // 레스토랑
    const filtered = restaurantInfo.filter((c) =>  c.restaurantCode === props.match.params.code) 
    const params = props.match.params



    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };



    useEffect(() => {
        dispatch(getFoodList(params)) //레스토랑 정보도 같이 가져오면 home 으로 history.push 하지 않아도 될까>?
    }, [params, dispatch])

    return (
        <div className={classes.root}>
            <Submenu />
            <div>
                <MenuHeader filtered={filtered} />
                <Accordion style={{background: 'transparent', maxWidth: '740px', width:'100%', margin: '5px auto', boxShadow:'none'}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <AppBar position="static" style={{background:'transparent', color: 'black', boxShadow:'none'}}>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                        <Tab label="전단" {...a11yProps(0)} style={{paddingTop:'0', marginTop: '0'}}/>
                        <Tab label="메뉴" {...a11yProps(1)} style={{paddingTop:'0', marginTop: '0'}} />
                        </Tabs>
                    </AppBar>
                    {/* <p style={{fontSize:'1rem', fontWeight:'bold', margin: '0'}}>메뉴</p> */}
                    </AccordionSummary>
                    <AccordionDetails style={{width: '90%', border: '1px solid gray', margin: '0 auto'}}>
                      <TabPanel value={value} index={0}>
                        <Flyer filtered={filtered}/>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <MenuContents foodList={foodList}/>
                      </TabPanel>
                    </AccordionDetails>
                </Accordion>
            </div>                 
        </div>
    )
}

export default Menu

import React from 'react';
import { withRouter } from 'react-router-dom';

const GoBack = ({ history }) => 
    <button className="goback" onClick={() => history.goBack()} style={{background:'tomato', color:'white', padding:'7px', borderRadius:'5px', border: '1px solid white', fontSize:'10px', marginRight:'10px'}}> 뒤로가기 </button>

export default withRouter(GoBack);

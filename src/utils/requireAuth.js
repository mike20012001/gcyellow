import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function RequireAuth () {
    const history = useHistory();
    const auth = useSelector((state) => state.auth);

    useEffect(() =>{
        if(!auth.isAuthenticated) {
            alert('로그인 필요')
            history.push('/login')
        }
    })

    return (
        <h1>hello</h1>
    )

}
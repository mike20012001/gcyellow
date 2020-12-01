import React, {useState} from 'react'
import Register from '../../admin/Register'

const Login = () => {
    const [ auth, setAuth ] = useState(false)

    return (
        <div>
            <div style={{border: '1px solid black'}}>
                <button onClick={() => setAuth(true)}>로그인</button>
                <button onClick={() => setAuth(false)}>로그아웃</button>
            </div>
            {auth ? <div>
            <Register />
            </div> : ""}
        </div>
    )
}

export default Login
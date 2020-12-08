import React, { useCallback, useState, useEffect } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
  } from 'reactstrap';
import { connect} from 'react-redux'
import { clearErrors } from '../../../actions/errorActions'
import { register } from '../../../actions/authActions'
import 'bootstrap/dist/css/bootstrap.css';

const Signup = ({ isAuthenticated, error, register, clearErrors}) => {

    const [ modal, setModal ] = useState(false);
    const [ name, setName] = useState('')
    const [ email, setEmail ] = useState('')
    const [ mobile, setMobile ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ msg, setMsg ] = useState(null)

    const handleToggle = useCallback(() => {
         // clear errors
         clearErrors();
         setModal(!modal)
    }, [clearErrors, modal])


    const handleChangeName = (e) => 
        setName(e.target.value);

    const handleChangeEmail = (e) => 
        setEmail(e.target.value);

    const handleChangePassword = (e) => 
        setPassword(e.target.value);
  

    const handleChangeMobile = (e) => 
        setMobile(e.target.value);
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
  
      // Create user object
      const user = {
        name,
        email,
        password,
        mobile,
        role: ""
      };
  
      // Attempt to login
      register(user);
    };
  
    useEffect(() => {
      // Check for register error
      if (error.id === 'REGISTER_FAIL') {
        setMsg(error.msg);
      } else {
        setMsg(null);
      }
  
      // If authenticated, close modal
      if (modal) {
        if (isAuthenticated) {
          handleToggle();
        }
      }
    }, [error, handleToggle, isAuthenticated, modal]);



    return (
        <div>
         
            <NavLink onClick={handleToggle} href="#"  style={{color:"#ffffff", padding:'0'}}>
            사업자 회원가입
            </NavLink>

            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>회원가입 (사업자)</ModalHeader>
                <ModalBody>
                    {msg ? <Alert color="danger">{msg}</Alert> : null}
                    <Form onSubmit={handleOnSubmit}>
                        <FormGroup>
                        <Label for="name">이름</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="홍길동"
                            className="mb-3"
                            onChange={handleChangeName}
                        />

                        <Label for="email">이메일</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="hello@gmail.com"
                            className="mb-3"
                            onChange={handleChangeEmail}
                        />

                        <Label for="password">패스워드</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="패스워드"
                            className="mb-3"
                            onChange={handleChangePassword}
                        />

                        <Label for="mobile">전화번호</Label>
                        <Input
                            type="text"
                            name="mobile"
                            id="mobile"
                            placeholder="전화번호"
                            className="mb-3"
                            onChange={handleChangeMobile}
                        />

                        <Button color="dark" style={{ marginTop: '2rem' }} block>
                            Register
                        </Button>
                        </FormGroup>
                    </Form>
                    </ModalBody>
            </Modal>
      </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated, // reducer의 index(rootReducer)에서 정보를 얻어옴.
    error: state.error
})

export default connect(mapStateToProps, {register, clearErrors})
(Signup)

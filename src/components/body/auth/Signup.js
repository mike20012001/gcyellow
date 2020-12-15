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
                <ModalHeader toggle={handleToggle}>회원가입 (사업주님)</ModalHeader>
                <ModalBody>
                    {msg ? <Alert color="danger" style={{fontSize:'0.8rem', borderRadius:'0', padding:'5px 15px', fontWeight:'bold'}}>{msg}</Alert> : null}
                    <Form onSubmit={handleOnSubmit}>
                        <FormGroup style={{fontSize:'0.9rem', margin:'0', fontWeight:'bold'}}>
                        <Label for="name">이름</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="홍길동"
                            className="mb-3"
                            style={{outline:'none', border:'none', borderRadius:'0', borderBottom:'1px solid gray', fontSize:'0.8rem', padding:'20px 0 20px 70px', margin:'-39px 0px', width:'95%'}}
                            onChange={handleChangeName}
                        />

                        <Label for="email">이메일</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="hello@gmail.com"
                            className="mb-3"
                            style={{outline:'none', border:'none', borderRadius:'0', borderBottom:'1px solid gray', fontSize:'0.8rem', padding:'20px 0 20px 70px', margin:'-39px 0px', width:'95%'}}
                            onChange={handleChangeEmail}
                        />

                        <Label for="password">패스워드</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="패스워드"
                            className="mb-3"
                            style={{outline:'none', border:'none', borderRadius:'0', borderBottom:'1px solid gray', fontSize:'0.8rem', padding:'20px 0 20px 70px', margin:'-39px 0px', width:'95%'}}
                            onChange={handleChangePassword}
                        />

                        <Label for="mobile">전화번호</Label>
                        <Input
                            type="text"
                            name="mobile"
                            id="mobile"
                            placeholder="010-5555-6666"
                            className="mb-3"
                            style={{outline:'none', border:'none', borderRadius:'0', borderBottom:'1px solid gray', fontSize:'0.8rem', padding:'20px 0 20px 70px', margin:'-39px 0px', width:'95%'}}
                            onChange={handleChangeMobile}
                        />

                        <Button color="dark" style={{ marginTop: '2rem', borderRadius:'0' }} block>
                            등록하기
                        </Button>
                        <div style={{margin:'1.7rem 0', textAlign:'center'}}>
                          현재는 사업주님의 회원가입만 가능하며,
                          <p style={{fontSize:'0.8rem', fontWeight:'normal'}}><br/>*본 사이트는 중개료 / 수수료를 받지 않습니다.</p>
                        </div>
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

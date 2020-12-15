import React, { useState, useEffect, useCallback } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';
import { clearErrors } from '../../../actions/errorActions';

const Login = ({ isAuthenticated, error, login, clearErrors }) => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const handleToggle = useCallback(() => {
    // Clear errors
    clearErrors();
    setModal(!modal);
  }, [clearErrors, modal]);

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };

    // Attempt to login
    login(user);
  };

  useEffect(() => {
    // Check for register error
    if (error.id === 'LOGIN_FAIL') {
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
      <NavLink onClick={handleToggle} href="#" style={{color:"#ffffff", padding: '0'}}>
      사업자 로그인
      </NavLink>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>사업주님 로그인</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger" style={{fontSize:'0.8rem', borderRadius:'0', padding:'5px 15px', fontWeight:'bold'}}>{msg}</Alert> : null}
          <Form>
            <FormGroup>
              <Label for="email" style={{fontSize:'0.8rem', margin:'1.5rem 0'}}>가입시 등록하신 <b>메일주소로 로그인</b> 할 수 있습니다.</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="메일주소"
                className="mb-3"
                style={{outline:'none', border:'none', borderRadius:'0', borderBottom:'1px solid gray', fontSize:'0.9rem', padding:'20px 20px', margin:'10px 10px', width:'95%'}}
                onChange={handleChangeEmail}
              />

              {/* <Label for="password">Password</Label> */}
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="비밀번호"
                className="mb-3"
                style={{outline:'none', border:'none', borderRadius:'0', borderBottom:'1px solid gray', fontSize:'0.9rem', padding:'20px 20px', margin:'10px 10px', width:'95%'}}
                onChange={handleChangePassword}
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem', borderRadius:'0' }}
                block
                onClick={handleOnSubmit}
              >
                로 그 인
              </Button>
            </FormGroup>
          </Form>
          <div style={{display: 'flex', fontSize:'0.8rem', marginTop:'2rem', fontWeight:'bold', justifyContent:'center'}}>
            <p>아이디 찾기</p>&nbsp; / &nbsp;<p>비밀번호 찾기</p>
            </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
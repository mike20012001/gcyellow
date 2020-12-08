import React, { Fragment, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
// import RegisterModal from './auth/RegisterModal';
// import LoginModal from './auth/LoginModal';
// import Logout from './auth/Logout';
// import { IAppNavbar, IAuthReduxProps } from '../types/interfaces';

// const AppNavbar = ({ auth }: IAppNavbar) => {
const AppNavbar = ({auth})  => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const authLinks = (
    <Fragment>
      <NavItem>
        <span className="navbar-text mr-3">
          <strong>
            {/* {auth && auth.user ? `Welcome ${auth.user.name}` : ''} */}
            어서옵쇼
          </strong>
        </span>
      </NavItem>
      <NavItem>
        {/* <Logout /> */}
        로그아웃
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        {/* <RegisterModal /> */}
        레지스터 모달
      </NavItem>
      <NavItem>
          로그인 모달
        {/* <LoginModal /> */}
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">ShoppingList</NavbarBrand>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    삼항 연산자 auth와 guestlink
                </NavItem>
               {auth && auth.isAuthenticated ? authLinks : guestLinks} 
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = () => ({
   auth
})

// export default AppNavbar
export default connect(mapStateToProps, null)(AppNavbar)
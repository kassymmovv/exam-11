import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import {useDispatch, useSelector} from "react-redux";


import UserMenu from "./UserMenu";
import AnonymousMenu from "./AnonymousMenu";
import {logoutUser} from "../../store/actions/action";

const Toolbar = () => {
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">LALAFO</NavbarBrand>
            <NavLink tag={RouterNavLink} to="/">All</NavLink>

            <Nav className="ml-auto" navbar>
                {user ? (
                    <UserMenu user={user} logout={() => dispatch(logoutUser())} />

                ) : (
                    <AnonymousMenu/>
                )}
            </Nav>
        </Navbar>
    );
};



export default  Toolbar;
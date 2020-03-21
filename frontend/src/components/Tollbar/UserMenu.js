import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle,  NavLink, UncontrolledDropdown} from "reactstrap";
import {Link, NavLink as RouterNavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const UserMenu = ({user, logout}) => {
    const categories = useSelector(state => state.categories.categories);

    return (

        <UncontrolledDropdown nav inNavbar>
            {categories.map(k => (
                <NavLink tag={RouterNavLink} to={`/products/${k._id}`} key={k._id}>{k.title}</NavLink>
            ))}
            <DropdownToggle nav caret>
                Hello, {user.username}!
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem >
                    View profile
                </DropdownItem>
                <DropdownItem divider />

                <Link to={"/register"}>
                    <DropdownItem onClick={logout}>
                        logout
                    </DropdownItem>
                </Link>

            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

export default UserMenu;
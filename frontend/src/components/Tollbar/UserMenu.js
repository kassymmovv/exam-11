import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";

const UserMenu = ({user, logout}) => {
    return (
        <UncontrolledDropdown nav inNavbar>
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
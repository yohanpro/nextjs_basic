import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const PortButtonDropDown = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="port-dropdown" caret size="sm">

            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Make a draft/ Publish Story</DropdownItem>
                <DropdownItem color="danger">Delete</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
};

export default PortButtonDropDown;
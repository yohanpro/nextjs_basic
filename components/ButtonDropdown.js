import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const PortButtonDropDown = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const { items } = props;
    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="port-dropdown" caret size="sm">
            </DropdownToggle>
            <DropdownMenu>
                {items.map((item, index) => <DropdownItem key={index} {...item.handlers}>{item.text}</DropdownItem>)}
            </DropdownMenu>
        </ButtonDropdown>
    );
};

export default PortButtonDropDown;
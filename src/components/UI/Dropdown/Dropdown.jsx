import { useState, useRef, useEffect, createContext, useContext } from 'react';
import './Dropdown.css';

const DropdownContext = createContext();

const Dropdown = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <DropdownContext.Provider value={{ open, setOpen, selected, setSelected }}>
            <div className="dropdown" ref={ref}>
                {children}
            </div>
        </DropdownContext.Provider>
    );
};

const DropdownTrigger = ({ children }) => {
    const { setOpen, selected } = useContext(DropdownContext);
    return (
        <button
            className="dropdown-toggle"
            onClick={() => setOpen(prev => !prev)}
            type="button"
        >
            {selected ? selected.label : children}
        </button>
    );
};

const DropdownMenu = ({ children }) => {
    const { open } = useContext(DropdownContext);
    return open ? <ul className="dropdown-menu">{children}</ul> : null;
};

const DropdownItem = ({ option, children, onSelect }) => {
    const { setSelected, setOpen } = useContext(DropdownContext);

    const handleClick = () => {
        setSelected(option);
        setOpen(false);
        if (onSelect) onSelect(option);
    };

    return (
        <li className="dropdown-item" onClick={handleClick}>
            {children || option.label}
        </li>
    );
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
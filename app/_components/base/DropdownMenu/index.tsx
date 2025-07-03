'use client';

// External Dependencies
import React, { useState, useRef, useEffect } from 'react';

// Local Dependencies
import dropdownMenuStyles from './dropdownMenuStyles';

// Local Variables
const {
  DropdownMenuMainContainerStyle,
  DropdownMenuMenuStyle,
  DropdownMenuMenuItemStyle,
} = dropdownMenuStyles;

// Type Definitions
type TypeDropdownMenuOption = {
  name: string;
  value: string;
  onClick?: () => void;
};

type DropdownMenuProps = {
  triggerElement: React.ReactNode;
  optionData: TypeDropdownMenuOption[];
};

// Component Definition
export default function DropdownMenu(props: DropdownMenuProps) {
  const { triggerElement, optionData } = props;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: TypeDropdownMenuOption) => {
    const { onClick } = option;

    if (onClick) onClick();
    setIsOpen(false);
  };

  return (
    <div className={DropdownMenuMainContainerStyle} ref={dropdownMenuRef}>
      <div onClick={toggleDropdown}>{triggerElement}</div>
      {isOpen && (
        <ul className={DropdownMenuMenuStyle}>
          {optionData.map((optionItem) => {
            const { name } = optionItem;
            return (
              <li
                key={name}
                onClick={() => handleOptionClick(optionItem)}
                className={DropdownMenuMenuItemStyle}
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  )
}

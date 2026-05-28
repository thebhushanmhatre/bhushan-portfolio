import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Input } from 'reactstrap';

import { useTheme } from '../../contexts/ThemeContext';

const FilterDropdown = ({ title, options, selected, onSelect, onRemove }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const { darkMode } = useTheme();

  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} className="mx-3">
        <DropdownToggle caret color={darkMode ? "outline-light" : "outline-dark"}>
          {title}
        </DropdownToggle>
        <DropdownMenu>
          {options.map((option) => (
             <DropdownItem key={option.value} toggle={false} onClick={() => onSelect(option)}>
                 <div className="d-flex align-items-center">
                    <Input 
                      type="checkbox" 
                      checked={selected.some(s => s.value === option.value)} 
                      readOnly
                      style={{ marginRight: '10px', pointerEvents: 'none' }}
                    />
                    {option.label}
                 </div>
              </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <div className="d-flex flex-wrap align-items-center">
          {selected.map(item => (
              <Badge 
                  color="secondary" 
                  className="m-1 px-3 py-2 d-inline-flex align-items-center" 
                  key={item.value} 
                  pill
                  style={{ fontSize: '0.9rem' }}
              >
                  {item.label} 
                  <span 
                      style={{ cursor: 'pointer', marginLeft: '8px', fontWeight: 'bold', fontSize: '1.2rem', lineHeight: '0.8' }} 
                      onClick={() => onRemove(item)}
                      aria-label="Remove"
                  >
                      &times;
                  </span>
              </Badge>
          ))}
      </div>
    </>
  );
};

export default FilterDropdown;

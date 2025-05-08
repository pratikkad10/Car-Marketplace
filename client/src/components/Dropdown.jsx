import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="dropdown">
      <button
        className="flex justify-between px-2 items-center dropdown-toggle bg-white w-80 h-8 border-grey-300 border rounded cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption} <RiArrowDropDownLine size={40} />
      </button>
      {isOpen && (
        <ul className="cursor-default dropdown-menu flex flex-col justify-center border border-grey-300 rounded w-50">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item px-2 mt-1 hover:bg-blue-500 "
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;







//usecase of dropdown component in app.jsx

// function App() {
//   const [selectedValue, setSelectedValue] = useState('');

//   const handleSelect = (option) => {
//       setSelectedValue(option);
//       console.log('Selected option:', option);
//   };

//   const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Electric', 'Gas', 'Hybrid'];

//   return (
//       <div>
//           <Dropdown options={dropdownOptions} onSelect={handleSelect} />
//       </div>
//   );
// }
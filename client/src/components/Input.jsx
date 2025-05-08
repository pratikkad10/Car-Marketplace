import React from 'react';

const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  errorMessage = '',
  name,
  required = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label htmlFor={name} className=" font-normal text-[16px] text-gray-700">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`p-2 border rounded-md focus:outline-none focus:ring-[0.02px] focus:ring-customBlue-500 ${
          errorMessage ? 'border-red-500' : 'border-gray-400'
        }`}
      />
      {errorMessage && <span className="text-sm text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default Input;



//usecase of input component in app.jsx

// function App() {

//   const [name, setName] = useState('');
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     setName(e.target.value);
//     setError(e.target.value ? '' : 'Name is required');
//   };
  
//   return (
//     <div className="p-6">
//     <Input
//       label="Name"
//       name="name"
//       value={name}
//       onChange={handleInputChange}
//       placeholder="Enter your name"
//       errorMessage={error}
//       required
//       className="max-w-md"
//     />
//   </div>
//   );
// }

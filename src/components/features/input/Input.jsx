import "./input.css";

const Input = ({ type, name, placeholder, handleChange,value, disabled }) => {
    return (
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        required
      />
    );
  };
  
  export default Input;
  
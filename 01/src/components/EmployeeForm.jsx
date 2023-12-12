import { useState } from "react";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    yearlySalary: "",
    age: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="formContainer">
      <form className="formStyle" action="">
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="enter full name"
          type="text"
        />
        <input placeholder="enter yearly salary" type="text" />
        <input placeholder="enter age" type="text" />
        <button>create</button>
      </form>
    </div>
  );
};

export default EmployeeForm;

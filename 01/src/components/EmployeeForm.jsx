import localEmployees from "./localEmployees";
import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import "./style.css";

const EmployeeForm = () => {
  const [employeesArr, setEmployeesArr] = useState([...localEmployees]);
  const [formData, setFormData] = useState({
    fullName: "",
    yearlySalary: "",
    age: "",
  });

  const handleForm = (event) => {
    console.log("event", event);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    console.log("event", event);
    event.preventDefault();
    const newEmployee = {
      employee_name: formData.fullName,
      employee_salary: formData.yearlySalary,
      employee_age: formData.age,
    };
    setEmployeesArr([...employeesArr, newEmployee]);
  };

  console.log("employeesArr", employeesArr, employeesArr.length);

  const updateEmployee = (employee) => {
    // console.log(employee?.fullName);
    alert(employee?.fullName);
  };

  const employeesToDisplay = employeesArr.map((employee) => {
    return (
      <EmployeeCard
        key={employee.id}
        employee={employee}
        onButtonClick={updateEmployee}
      />
    );
  });

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="formStyle" action="">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleForm}
          placeholder="enter full name"
        />
        <input
          type="text"
          name="yearlySalary"
          value={formData.yearlySalary}
          onChange={handleForm}
          placeholder="enter yearly salary"
        />
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleForm}
          placeholder="enter age"
        />
        <button>create</button>
      </form>

      <div>
        <h1 className="employeeListTag">employee list</h1>
        <div className="employeeList">{employeesToDisplay}</div>
      </div>
    </div>
  );
};

export default EmployeeForm;

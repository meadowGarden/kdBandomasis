import { useEffect, useState } from "react";
import axios from "axios";
import localEmployees from "./localEmployees";
import EmployeeCard from "./EmployeeCard";
import "./style.css"

const EmployeeList = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://dummy.restapiexample.com/api/v1/employees", {
  //       headers: {
  //         "Access-Control-Allow-Credentials": true,
  //         "Access-Control-Allow-Origin": "*",
  //         // Accept: "application/json, text/plain, */*",
  //         Accept: "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       setEmployees(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // console.log("employees", employees);

  // if (isLoading) {
  //   return <div>data is loading, please wait...</div>;
  // }

  // const employeesToDisplay = employees.map((employee) => {
  const employeesToDisplay = localEmployees.map((employee) => {
    return <EmployeeCard key={employee.id} employee={employee} />;
  });

  return (
    <>
      <h1 className="employeeListTag">employee list</h1>
      <div className="employeeList">{employeesToDisplay}</div>
    </>
  );
};

export default EmployeeList;

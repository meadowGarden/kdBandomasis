import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const EmployeeCard = ({ employee, onButtonClick }) => {
  const { employee_name, employee_salary, employee_age, profile_image } =
    employee;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{ width: "100%" }} variant="top" src={profile_image} />
      <Card.Body>
        <Card.Title>{employee_name}</Card.Title>
        <Card.Text>
          age: {employee_age} <br /> yearly salary: {employee_salary}
        </Card.Text>
        <Button
          className="buttonToCart"
          onClick={() => onButtonClick(employee)}
        >
          add employee
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCard;

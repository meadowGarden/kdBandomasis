import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="titlePage">
        <h1>title</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam amet
          nesciunt enim facilis magni, non adipisci, dicta commodi molestiae
          dolor voluptatum. Velit cumque voluptatum, distinctio nulla iste
          facilis suscipit natus?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam amet
          nesciunt enim facilis magni, non adipisci, dicta commodi molestiae
          dolor voluptatum. Velit cumque voluptatum, distinctio nulla iste
          facilis suscipit natus?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam amet
          nesciunt enim facilis magni, non adipisci, dicta commodi molestiae
          dolor voluptatum. Velit cumque voluptatum, distinctio nulla iste
          facilis suscipit natus?
        </p>
        <button onClick={() => navigate("/newemployee")}>
          enter new employee
        </button>
      </div>
    </>
  );
};

export default Homepage;

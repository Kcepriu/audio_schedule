import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Schedule</h2>
      <buttom
        type="buttom"
        onClick={() => {
          navigate("/login");
        }}
      >
        To login
      </buttom>
    </>
  );
};

export default Schedule;

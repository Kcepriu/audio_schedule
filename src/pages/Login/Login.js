import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Login</h2>
      <buttom
        type="buttom"
        onClick={() => {
          navigate("/schedule");
        }}
      >
        To Schedule
      </buttom>
    </>
  );
};

export default Login;

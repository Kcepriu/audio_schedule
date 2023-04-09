import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn } from "reduxe/auth/selectors";

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return { isLoggedIn, user };
};
export default useAuth;

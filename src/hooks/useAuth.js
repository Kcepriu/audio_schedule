import { useState } from "react";

const useAuth = () => {
  const [isLoggedIn, seIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return { isLoggedIn, seIsLoggedIn, user, setUser };
};
export default useAuth;

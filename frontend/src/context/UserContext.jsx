import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem("anonymous_user_id");
    if (storedId) {
      setUserId(storedId);
    }
  }, []);

  const saveUserId = (id) => {
    localStorage.setItem("anonymous_user_id", id);
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userId, saveUserId }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUser = () => {
  return useContext(UserContext);
};
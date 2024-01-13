import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

export const UserContextProvider = ({ children }) => {
  const [user, setUsers] = useState({});

  return (
    <UserContext.Provider value={{ user, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

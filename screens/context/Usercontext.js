import { View, Text } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";

const Usercontext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("1");
  const [me, setMe] = useState("");
  return (
    <Usercontext.Provider
      value={{
        user,
        setUser,
        me,
        setMe,
      }}
    >
      {children}
    </Usercontext.Provider>
  );
};

export const UserState = () => {
  return useContext(Usercontext);
};

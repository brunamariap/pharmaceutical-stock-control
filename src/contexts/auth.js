import React, { createContext, useState } from "react";
import api from "../services/api";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const getDados = async () => {
    const response = await api.get("posts");
    setPosts(response.data);
    //console.log(response.data);
  };

  function login(employee_id, username, password) {
    getDados();
    for (let i = 0; i < posts.length; i++) {
      let obj = posts[i];
      let id_employee = obj["employee_id"];
      let full_name_employee = obj["employee_full_name"];
      let username_employee = obj["username"];
      let password_employee = obj["password"];
      //console.log(id_employee, username_employee, password_employee)

      if (
        employee_id === id_employee &&
        password_employee === password
      ) {
        console.log("entrou");
        setUser({employee_id: employee_id, username: username_employee, employee_full_name: full_name_employee, status:'Logado'})
      }
    }
  }

  function logout(){ setUser({}) }
  return(
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("isAuthenticated in context", isAuthenticated);

  useEffect(() => {
    async function checkLoggedIn() {
      const token = localStorage.getItem("token");
      console.log("Token in useEffect", token);
      if (token) {
        setIsAuthenticated(true);
      }
    }
    checkLoggedIn();
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

// import React, { createContext, useState, useContext, useEffect } from 'react';

// const LoginContext = createContext();

// export const useLogin = () => {
//    return useContext(LoginContext);
// };

// export const LoginProvider = ({ children }) => {
//    const [isLoggedIn, setIsLoggedIn] = useState(false);


//    useEffect(() => {
//       const user = localStorage.getItem('user');
//       if (user) {
//          setIsLoggedIn(true);
//       }
//    }, []);

//    const login = () => {
//       setIsLoggedIn(true);
//       localStorage.setItem('user', 'loggedIn');
//    };

//    const logout = () => {
//       setIsLoggedIn(false);
//       localStorage.removeItem('user');
//    };

//    return (
//       <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
//          {children}
//       </LoginContext.Provider>
//    );
// };


import React, { createContext, useState, useContext, useEffect } from 'react';

const LoginContext = createContext();

export const useLogin = () => {
   return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [user, setUser] = useState(null);

   useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
         setUser(JSON.parse(storedUser));
         setIsLoggedIn(true);
      }
   }, []);

   const login = (userData) => {
      setIsLoggedIn(true);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData)); // Simpan user di localStorage
   };

   const logout = () => {
      setIsLoggedIn(false);
      setUser(null);
      localStorage.removeItem('user');
   };

   return (
      <LoginContext.Provider value={{ isLoggedIn, user, login, logout }}>
         {children}
      </LoginContext.Provider>
   );
};
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  // 🔐 LOGIN con roles
  const login = async (username, password) => {
    // Credenciales de administrador
    if (username === "admin" && password === "123456") {
      const u = { username: "admin", role: "admin" };
      setUser(u);
      return { ok: true, user: u };
    }

    // Credenciales de usuario normal
    if (username === "usuario" && password === "654321") {
      const u = { username: "usuario", role: "user" };
      setUser(u);
      return { ok: true, user: u };
    }

    // Si no coincide ninguno
    return { ok: false, message: "Usuario o contraseña incorrectos" };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

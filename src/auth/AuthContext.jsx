import { createContext, useContext, useEffect, useState } from "react";
import { loginUsuario } from "../Api/usuarioService";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const login = async (email, password) => {
    try {
      const usuario = await loginUsuario(email, password);

      const usuarioNormalizado = {
        ...usuario,
        role: usuario.tipo_usuario?.toLowerCase(), 
      };

      setUser(usuarioNormalizado);

      return { ok: true, user: usuarioNormalizado };
    } catch (error) {
      console.error("Error en login:", error);
      return {
        ok: false,
        message: "Credenciales incorrectas o servidor no disponible",
      };
    }
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











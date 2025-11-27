const API_URL = "http://localhost:8000/v1/api/usuarios";

export async function loginUsuario(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      mail: email,
      password: password
    }),
  });

  if (!response.ok) {
    throw new Error("Credenciales incorrectas");
  }

  return response.json();
}

export async function registrarUsuario(usuario) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });

  if (!response.ok) {
    const msg = await response.text();
    throw new Error(msg);
  }

  return response.text();
}




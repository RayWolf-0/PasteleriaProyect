# ---------- Etapa 1: Construcción ----------
FROM node:20-alpine AS build

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código
COPY . .

# Construir la app optimizada de producción
RUN npm run build


# ---------- Etapa 2: Servidor web ----------
FROM nginx:alpine

# Copiar los archivos del build al servidor Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto donde Nginx sirve la app
EXPOSE 80

# Iniciar Nginx en modo “foreground”
CMD ["nginx", "-g", "daemon off;"]

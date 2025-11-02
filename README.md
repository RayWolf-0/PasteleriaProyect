Proyecto Pastelería React – Pipeline CI/CD

Este proyecto implementa un pipeline automatizado con GitHub Actions para garantizar la integración, la calidad y el despliegue continuo del sistema.

Descripción General

El pipeline CI/CD integra las fases de construcción, pruebas, análisis y despliegue del proyecto, asegurando trazabilidad, control de calidad y entornos reproducibles mediante contenedores Docker.

Estructura del Pipeline

Archivo principal:

.github/workflows/pipeline.yml


Ejecución automática:
El pipeline se ejecuta automáticamente cada vez que se realiza un push o pull request en la rama master.

Etapa	Descripción	Indicador
Build	Construcción de la imagen Docker del proyecto.	IE1
Test	Ejecución de pruebas unitarias con Karma y Jasmine.	IE2
Scan	Escaneo de dependencias y análisis de vulnerabilidades.	IE3
Deploy	Despliegue simulado mediante Docker Compose.	IE4

Trazabilidad:
Todas las ejecuciones del pipeline se registran en la pestaña Actions de GitHub.
Se conserva la información del commit, autor y estado de cada etapa.
Permite auditar y reproducir errores fácilmente.

Calidad:
Las pruebas unitarias validan la funcionalidad de los componentes del sistema.
Los escaneos de seguridad garantizan dependencias seguras.
El uso de Docker y Docker Compose mantiene entornos estables y reproducibles.
El pipeline automatiza validaciones, reduciendo errores humanos.

# Prueba tecnica 

Este proyecto es una aplicación web para visualizar propiedades inmobiliarias en diferentes categorías. Fue desarrollado utilizando React y Vite.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Instalación

Sigue estos pasos para instalar las dependencias y ejecutar el proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado Node.js y npm en tu máquina. Puedes descargar Node.js desde [aquí](https://nodejs.org/).

### Paso a Paso

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd tu-repositorio
    ```
3. Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

## Uso

Para ejecutar la aplicación en un entorno de desarrollo, utiliza el siguiente comando:
```bash

npm run dev


Esto iniciará el servidor de desarrollo y la aplicación estará disponible en http://localhost:3000.

Comandos Adicionales
Para construir el proyecto para producción:
bash
Copiar código
npm run build
Para previsualizar la versión construida:
bash
Copiar código
npm run preview
Estructura del Proyecto
El proyecto está estructurado de la siguiente manera:

css
Copiar código
.
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── components
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── ProgressBar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles
│       └── styles.css
├── Data.js
├── package.json
└── README.md
public: Contiene el archivo HTML principal.
src: Contiene los componentes de React, los archivos principales de la aplicación y los estilos.
Data.js: Contiene los datos utilizados en la aplicación.
package.json: Contiene las dependencias del proyecto y scripts.
README.md: El archivo que estás leyendo ahora mismo.
Dependencias
Las principales dependencias de este proyecto son:

React
Vite
Puedes encontrar la lista completa de dependencias en el archivo package.json.
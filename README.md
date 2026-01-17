# Tienda Online - Productos

Página web de tienda online con diseño responsive para mostrar cuatro productos, con enlaces a WhatsApp e Instagram.

## Características

- ✅ Diseño responsive (adaptable para celular, tablet y desktop)
- ✅ Cuatro productos con imágenes, descripciones y precios
- ✅ Enlaces directos a WhatsApp para consultas
- ✅ Enlaces a Instagram
- ✅ Diseño moderno y atractivo
- ✅ Animaciones y efectos hover

## Configuración

### 1. Configurar número de WhatsApp

Edita el archivo `script.js` y reemplaza el número de teléfono:

```javascript
const phoneNumber = '1234567890'; // Reemplaza con tu número
```

**Formato del número:**
- Código de país + número sin espacios ni símbolos
- Ejemplo Argentina: `5491123456789`
- Ejemplo México: `521234567890`
- Ejemplo España: `34612345678`

### 2. Configurar enlace de Instagram

Edita el archivo `index.html` y reemplaza el enlace de Instagram:

```html
<a href="https://instagram.com/tu_perfil" target="_blank" class="instagram-link">
```

Reemplaza `tu_perfil` con tu usuario de Instagram.

### 3. Personalizar productos

Edita el archivo `index.html` para cambiar:
- Nombres de productos
- Descripciones
- Precios
- Imágenes (reemplaza las URLs de placeholder con tus imágenes)

### 4. Personalizar imágenes

Puedes:
- Agregar tus propias imágenes en una carpeta `images/`
- Usar servicios como Imgur o Cloudinary
- Actualizar las rutas en el HTML

## Estructura del Proyecto

```
.
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript para funcionalidad
└── README.md       # Este archivo
```

## Cómo usar

1. Clona o descarga este repositorio
2. Configura tu número de WhatsApp y enlace de Instagram
3. Personaliza los productos según tus necesidades
4. Sube a GitHub Pages o tu servidor preferido

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings > Pages
4. Selecciona la rama `main` como fuente
5. Tu sitio estará disponible en `https://tu-usuario.github.io/tu-repositorio`

## Tecnologías utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animaciones)
- JavaScript (Vanilla)
- Font Awesome (iconos)

## Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

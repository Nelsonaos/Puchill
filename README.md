# Tienda Online - Productos

Página web de tienda online con diseño responsive para mostrar cuatro productos, con enlaces a WhatsApp e Instagram.

## Características

- ✅ Diseño responsive (adaptable para celular, tablet y desktop)
- ✅ Productos con imágenes, descripciones y precios
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

### Pasos para activar GitHub Pages:

1. ✅ Ya subiste los archivos a GitHub
2. Ve a tu repositorio en GitHub
3. Haz clic en **Settings** (Configuración) en la parte superior del repositorio
4. En el menú lateral izquierdo, busca y haz clic en **Pages**
5. En la sección **Source** (Fuente):
   - Selecciona la rama `main` (o `master` si es tu rama principal)
   - Deja la carpeta como `/ (root)`
6. Haz clic en **Save** (Guardar)
7. Espera 1-2 minutos y tu sitio estará disponible en:
   - `https://tu-usuario-de-github.github.io/nombre-del-repositorio/`

**Ejemplo:** Si tu usuario es `nelso` y el repositorio se llama `Puchill`:
- URL: `https://nelso.github.io/Puchill/`

⚠️ **Nota:** La primera vez puede tardar hasta 10 minutos en estar disponible. GitHub te mostrará la URL exacta cuando esté lista.

## 🔄 Cómo actualizar tu página después de hacer cambios

Una vez que GitHub Pages está activado, cada vez que hagas cambios y los subas a GitHub, tu página se actualizará automáticamente (puede tardar 1-2 minutos).

### Opción 1: Desde GitHub Desktop (Más fácil) 🖥️

1. **Haz tus cambios** en Cursor o cualquier editor
2. Abre **GitHub Desktop**
3. Verás los archivos modificados en la columna izquierda
4. En la parte inferior, escribe un **mensaje de commit** (ej: "Actualicé los productos")
5. Haz clic en **Commit to main** (o la rama que uses)
6. Haz clic en **Push origin** (botón azul arriba) para subir los cambios
7. Espera 1-2 minutos y recarga tu página web

### Opción 2: Desde Cursor con Terminal (Si tienes Git instalado) 💻

1. **Haz tus cambios** en los archivos
2. Abre la terminal en Cursor (`` Ctrl + ` `` o Terminal → New Terminal)
3. Ejecuta estos comandos uno por uno:

```bash
# Ver qué archivos cambiaron
git status

# Agregar todos los archivos modificados
git add .

# Crear un commit con un mensaje
git commit -m "Actualicé los productos"

# Subir los cambios a GitHub
git push
```

4. Espera 1-2 minutos y recarga tu página web

### Opción 3: Desde la web de GitHub 🌐

1. Ve a tu repositorio en GitHub
2. Haz clic en el archivo que quieres editar
3. Haz clic en el ícono de lápiz ✏️ (Edit)
4. Haz tus cambios
5. Desplázate hacia abajo, escribe un mensaje de commit
6. Haz clic en **Commit changes**
7. Espera 1-2 minutos y recarga tu página web

### ⏱️ Tiempo de actualización

- Los cambios suelen aparecer en **1-2 minutos**
- A veces puede tardar hasta **5 minutos**
- Si no ves los cambios, prueba:
  - Limpiar la caché del navegador (Ctrl + F5)
  - Esperar unos minutos más
  - Verificar que el commit se subió correctamente

## Tecnologías utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animaciones)
- JavaScript (Vanilla)
- Font Awesome (iconos)

## Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

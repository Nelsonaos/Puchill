# 📝 Guía Rápida: Actualizar tu Página Web

## 🎯 Proceso Simple

```
1. Editas archivos en Cursor
   ↓
2. Haces Commit (guardas los cambios)
   ↓
3. Haces Push (subes a GitHub)
   ↓
4. Esperas 1-2 minutos
   ↓
5. ¡Tu página se actualiza automáticamente!
```

---

## 🖥️ Método 1: GitHub Desktop (RECOMENDADO)

### Pasos:

1. **Edita tus archivos** en Cursor
   - `index.html` - Cambia productos, precios, textos
   - `styles.css` - Cambia colores, estilos
   - `script.js` - Cambia funcionalidad

2. **Abre GitHub Desktop**

3. **Verás tus cambios** en la lista de la izquierda

4. **Escribe un mensaje** en la parte inferior:
   ```
   Ejemplos:
   - "Actualicé los precios"
   - "Agregué nuevas imágenes"
   - "Cambié el diseño del header"
   ```

5. **Haz clic en "Commit to main"**

6. **Haz clic en "Push origin"** (botón azul arriba)

7. **Espera 1-2 minutos** y recarga tu página web

✅ **¡Listo!** Tus cambios ya están en línea.

---

## 💻 Método 2: Terminal en Cursor

### Si tienes Git instalado:

1. **Edita tus archivos** en Cursor

2. **Abre la terminal** en Cursor:
   - Presiona `` Ctrl + ` ``
   - O ve a: Terminal → New Terminal

3. **Ejecuta estos comandos:**

```bash
# Paso 1: Ver qué cambió
git status

# Paso 2: Agregar todos los cambios
git add .

# Paso 3: Guardar con un mensaje
git commit -m "Descripción de tus cambios"

# Paso 4: Subir a GitHub
git push
```

4. **Espera 1-2 minutos** y recarga tu página

✅ **¡Listo!** Tus cambios ya están en línea.

---

## 🌐 Método 3: Desde GitHub Web

1. Ve a tu repositorio en GitHub.com
2. Haz clic en el archivo que quieres editar
3. Haz clic en el ícono de lápiz ✏️
4. Edita el archivo
5. Desplázate abajo, escribe un mensaje
6. Haz clic en **"Commit changes"**
7. Espera 1-2 minutos

✅ **¡Listo!** Tus cambios ya están en línea.

---

## ⚠️ Solución de Problemas

### Los cambios no aparecen:

1. **Espera más tiempo** (hasta 5 minutos)
2. **Limpia la caché del navegador:**
   - Windows: `Ctrl + F5` o `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
3. **Verifica que el push fue exitoso:**
   - En GitHub Desktop: debería decir "Pushed to origin"
   - En terminal: debería decir "Successfully pushed"
4. **Revisa en GitHub.com** que los archivos se actualizaron

### Error "git no se reconoce":

- Instala Git desde: https://git-scm.com/download/win
- O usa GitHub Desktop (más fácil)

### No puedo hacer push:

- Verifica que estás conectado a internet
- Verifica tus credenciales de GitHub
- En GitHub Desktop: Settings → Accounts

---

## 💡 Consejos

- **Haz commits frecuentes** (cada vez que termines un cambio)
- **Usa mensajes descriptivos** en los commits
- **Verifica los cambios** antes de hacer push
- **Ten paciencia** - GitHub Pages puede tardar 1-2 minutos

---

## 📞 ¿Necesitas ayuda?

Si tienes problemas, verifica:
1. ✅ Que GitHub Pages esté activado (Settings → Pages)
2. ✅ Que estés en la rama correcta (main o master)
3. ✅ Que los archivos estén en la raíz del repositorio
4. ✅ Que el archivo principal se llame `index.html`

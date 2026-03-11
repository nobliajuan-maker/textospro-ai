[README.md](https://github.com/user-attachments/files/25917598/README.md)
# textospro.ai

Generador de **textos profesionales** con IA (mails formales, respuestas a reclamos, propuestas, notas bancarias). 
Rápido, sin registro, y pensado para **ingresos pasivos** con publicidad.

---

## 🚀 Deploy en Vercel (5 minutos)
1. Creá cuenta en https://vercel.com (con Google o GitHub).
2. **Add New → Project → Upload** y subí esta carpeta (ZIP o carpeta).
3. En **Project → Settings → Environment Variables**, agregá:
   - `PROVIDER` = `openrouter` (o `groq` | `mistral` | `openai` | `together`)
   - `API_KEY` = tu API key del proveedor elegido
   - `MODEL` = `qwen/qwen-2.5-32b-instruct` (recomendado para OpenRouter)
4. Guardá y hacé **Redeploy**. Tu sitio quedará online.

## 🔑 Conseguir API Key (OpenRouter recomendado)
1. Ir a https://openrouter.ai → **Sign up** → **API Keys** → **Create**.
2. Copiá la clave y pegala en `API_KEY` en Vercel.

## 💰 Publicidad (Google AdSense)
1. Registrate en https://adsense.google.com.
2. Agregá tu sitio y esperá aprobación.
3. Te darán un **script global** (pegalo en `<head>` de `index.html`).
4. Reemplazá los `<div class="ad-slot">` por bloques `<ins class="adsbygoogle">`.

## 📁 Estructura
```
textospro-ai/
├─ index.html          # UI
├─ /public
│  ├─ logo.svg
│  └─ favicon.ico
└─ /api
   └─ generate.js      # Función serverless (Vercel Edge)
```

## 🔒 Privacidad
No almacenamos los textos del usuario. Solo se envían a la API para generar la respuesta.

## 🛠️ Variables de entorno (ejemplo)
```
PROVIDER=openrouter
API_KEY=sk-or-v1-xxxxxxxxxxxxxxxx
MODEL=qwen/qwen-2.5-32b-instruct
```

## 📞 Contacto / Página extra
Para AdSense conviene agregar una página de **Contacto** simple. 
Podés crear `contacto.html` con un correo o formulario y enlazarlo desde el footer.

---

Hecho con ❤️ para publicar rápido y sin mantenimiento.

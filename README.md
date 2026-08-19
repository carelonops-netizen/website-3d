# Free 3D Website Starter

A working starter: Three.js (via React Three Fiber) for the 3D scene,
Framer Motion for the UI overlay animation. Every tool used here has a
permanent free tier — nothing here requires a paid plan.

## Run it locally

1. Install Node.js (free): https://nodejs.org — LTS version.
2. In this folder, run:
   ```
   npm install
   npm run dev
   ```
3. Open the localhost URL it prints. You'll see a rotating 3D knot with
   animated text over it. Drag to orbit the camera.

## Deploy it for free

1. Push this folder to a free GitHub repo (github.com — free account).
2. Go to vercel.com, sign up free with your GitHub account.
3. "Import Project" → pick the repo → it auto-detects Vite → Deploy.
4. You get a free `yourproject.vercel.app` URL, HTTPS included, no cost.
   (Netlify.com works the same way if you'd rather use that.)

## Swap in your own 3D model (still free)

1. Get a free model from sketchfab.com (filter by "downloadable" +
   CC license) or polyhaven.com, or make one in Blender (free).
2. Export/convert to `.glb`, drop it in `public/model.glb`.
3. In `Scene.jsx`, replace `SpinningKnot` with:
   ```jsx
   import { useGLTF } from '@react-three/drei'
   function MyModel() {
     const { scene } = useGLTF('/model.glb')
     return <primitive object={scene} />
   }
   ```

## Add components from 21st.dev (free tier)

21st.dev gives you React/Tailwind components (navbars, cards, pricing
tables) you can copy-paste into `src/components/`. If you use Tailwind,
add it with `npm install -D tailwindcss postcss autoprefixer` and follow
Tailwind's free Vite setup guide. Framer Motion components and 21st.dev
components can live side by side — they're both just React.

## Cost checklist

- Node.js, Vite, React, Three.js, R3F, Drei, Framer Motion: MIT-licensed, free forever
- GitHub repo: free
- Vercel/Netlify hosting on a `*.vercel.app` / `*.netlify.app` subdomain: free
- 21st.dev free tier: 100 AI-generation credits/month, unlimited component browsing
- Sketchfab/Poly Haven CC0 models: free
- The only thing that costs money later (optional) is a custom domain
  name (e.g. yoursite.com), roughly $10-15/year. Skip it and the
  `*.vercel.app` URL works fine indefinitely.

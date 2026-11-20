# Front end using React 
## Create React project
```
1.cd front end # goto frontend folder 
2.npm create vite@latest # press y if asked for install 
3.press . to as project name
4.select ignore
5-Select the react framwork
6-select javascript as varient 
7-select ESLinter as linter 
8-selct yes and contine
```
## Add Tailwind  for CSS
``` 
1-go to https://tailwindcss.com/
2- npm install npm install tailwindcss @tailwindcss/vite
3-open vite.config.js
    import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

paste this code in that file 

`
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
`
4-open src/index.css and remove all contents
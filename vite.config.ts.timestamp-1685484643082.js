// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
var vite_config_default = defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020"
    }
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" }
  },
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIHZpdGUuY29uZmlnLnRzXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICB9LFxuICB9LFxuICBlc2J1aWxkOiB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVqcy92aXRlL2lzc3Vlcy84NjQ0I2lzc3VlY29tbWVudC0xMTU5MzA4ODAzXG4gICAgbG9nT3ZlcnJpZGU6IHsgJ3RoaXMtaXMtdW5kZWZpbmVkLWluLWVzbSc6ICdzaWxlbnQnIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICBiYWJlbDoge1xuICAgICAgICBwbHVnaW5zOiBbJ2JhYmVsLXBsdWdpbi1tYWNyb3MnLCAnYmFiZWwtcGx1Z2luLXN0eWxlZC1jb21wb25lbnRzJ10sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLGNBQWM7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFFUCxhQUFhLEVBQUUsNEJBQTRCLFNBQVM7QUFBQSxFQUN0RDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osT0FBTztBQUFBLFFBQ0wsU0FBUyxDQUFDLHVCQUF1QixnQ0FBZ0M7QUFBQSxNQUNuRTtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

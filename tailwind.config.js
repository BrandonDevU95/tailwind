module.exports = {
   mode: 'jit', //Esta opcion activa el motor JIT o Just In Time
   purge: ['./*.html'], //Analiza las classes de Tailwind para solo usar esas en el proyecto final
   darkMode: 'media', //Activar el modo oscuro
   content: [],
   theme: {
      extend: {},
   },
   plugins: [],
};

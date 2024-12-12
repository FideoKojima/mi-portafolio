<template>
  <section class="min-h-screen bg-slate-900 relative overflow-hidden">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"
      ></div>
    </div>

    <!-- Contenido principal -->
    <div
      class="container mx-auto px-4 h-screen flex flex-col justify-center items-center relative z-10"
    >
      <div class="text-center max-w-4xl">
        <!-- Introducción animada -->
        <div class="mb-8">
          <p class="text-gray-400 text-base">Desarrollador Web Frontend</p>
        </div>

        <!-- Nombre -->
        <h1 class="text-6xl md:text-7xl font-bold mb-6">
          <span class="text-white">Luis</span>
          <span class="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
            Suarez
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Me especializo en crear experiencias web únicas y memorables. Actualmente aprendiendo y
          construyendo con Vue.js y tecnologías modernas.
        </p>

        <!-- Botones -->
        <div class="flex justify-center gap-4 mb-16">
          <a
            href="#projects"
            class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium overflow-hidden"
          >
            <span class="relative z-10">Ver Proyectos</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </a>

          <a
            href="#contact"
            class="px-8 py-4 border-2 border-gray-300 text-gray-300 rounded-lg font-medium hover:border-white hover:text-white transition-colors duration-300"
          >
            Contactar
          </a>
        </div>

        <!-- Tecnologías -->
        <div class="text-center">
          <p class="text-gray-400 text-sm mb-4">Tecnologías que uso:</p>
          <div class="flex flex-wrap justify-center gap-6">
            <div
              v-for="tech in technologies"
              :key="tech.name"
              class="group relative w-16 h-16 flex items-center justify-center p-3 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 border border-slate-600 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
            >
              <!-- Tooltip -->
              <div
                class="absolute -top-10 px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
              >
                {{ tech.name }}
              </div>

              <div class="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity">
                <svg class="w-full h-full" viewBox="0 0 128 128" v-html="tech.paths"></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  {
    name: 'Vue.js',
    paths: `<path fill="#fff" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
            <path fill="#41B883" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>`,
  },
  {
    name: 'JavaScript',
    paths: `<path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
            <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581z"/>`,
  },
  {
    name: 'Bootstrap',
    paths: `<path fill="#7952B3" d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"/>`,
  },
  {
    name: 'CSS3',
    paths: `<path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/>`,
  },
  {
    name: 'HTML5',
    paths: `<path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
            <path fill="#fff" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>`,
  },
  {
    name: 'Git',
    paths: `<path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0c-2.842-2.844-3.545-7.019-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L40.983 20.333L3.229 58.123c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327.034-11.501z"/>`,
  },
  {
    name: 'Tailwind CSS',
    paths: `<path fill="#38BDF8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z"/>`,
  },
  {
    name: 'Node.js',
    paths: `<path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772c8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086c-3.146 1.783-3.726 2.02-6.677 3.043c-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073z"/>`,
  },
]
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}

.delay-700 {
  animation-delay: 700ms;
}
</style>

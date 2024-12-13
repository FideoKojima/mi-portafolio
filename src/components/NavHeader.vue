<template>
  <header class="fixed w-full top-0 z-50 bg-slate-900">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo o Nombre -->
      <div
        class="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text font-spaceGrotesk z-50"
      >
        Luis Suarez
      </div>

      <!-- Navegación Desktop -->
      <div class="hidden md:flex gap-6">
        <a href="#about" class="text-gray-300 hover:text-white transition-colors">Sobre mí</a>
        <a href="#skills" class="text-gray-300 hover:text-white transition-colors">Habilidades</a>
        <a href="#projects" class="text-gray-300 hover:text-white transition-colors">Proyectos</a>
        <a href="#contact" class="text-gray-300 hover:text-white transition-colors">Contacto</a>
      </div>

      <!-- Botón Menú Mobile -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden text-gray-300 hover:text-white z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          :class="isMenuOpen ? 'text-slate-800' : 'text-gray-300'"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Menú Mobile con Transición -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="translate-x-full opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="translate-x-0 opacity-100"
        leave-to-class="translate-x-full opacity-0"
      >
        <!-- Menú Mobile con Transición -->
        <div
          v-if="isMenuOpen"
          class="fixed md:hidden top-16 bottom-4 right-4 w-[90%] bg-white z-40 rounded-3xl shadow-2xl"
        >
          <div class="pt-20 px-6 h-full overflow-y-auto">
            <!-- Menú Principal -->
            <div class="space-y-1">
              <a
                href="#about"
                @click="isMenuOpen = false"
                class="block py-3 px-4 text-lg text-slate-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Sobre mí
              </a>
              <a
                href="#skills"
                @click="isMenuOpen = false"
                class="block py-3 px-4 text-lg text-slate-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Habilidades
              </a>
              <a
                href="#projects"
                @click="isMenuOpen = false"
                class="block py-3 px-4 text-lg text-slate-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Proyectos
              </a>
              <a
                href="#contact"
                @click="isMenuOpen = false"
                class="block py-3 px-4 text-lg text-slate-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Contacto
              </a>
            </div>

            <!-- Tecnologías -->
            <div class="mt-8">
              <h3 class="text-sm font-semibold text-gray-400 uppercase mb-4 px-4">Tecnologías</h3>
              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="tech in technologies"
                  :key="tech.name"
                  class="p-3 bg-gray-100 rounded-xl text-slate-700 flex items-center gap-3"
                >
                  <div class="w-6 h-6" v-html="tech.icon"></div>
                  <span class="text-sm">{{ tech.name }}</span>
                </div>
              </div>
            </div>

            <!-- Redes Sociales -->
            <div class="mt-12 px-4">
              <h3 class="text-sm font-semibold text-gray-400 uppercase mb-4">Conecta conmigo</h3>
              <div class="flex gap-4">
                <a
                  href="https://github.com/FideoKojima"
                  target="_blank"
                  class="text-slate-600 hover:text-slate-900 transition-colors duration-200"
                >
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/luisesuareza/"
                  target="_blank"
                  class="text-slate-600 hover:text-slate-900 transition-colors duration-200"
                >
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Overlay con Transición -->
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 bg-black/20 -z-10"
          @click="isMenuOpen = false"
        ></div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const technologies = [
  {
    name: 'Vue.js',
    icon: `<svg viewBox="0 0 128 128">
            <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
            <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
          </svg>`,
  },
  {
    name: 'JavaScript',
    icon: `<svg viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
            <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581z"/>
          </svg>`,
  },
  {
    name: 'HTML5',
    icon: `<svg viewBox="0 0 128 128">
            <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
            <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
          </svg>`,
  },
  {
    name: 'CSS3',
    icon: `<svg viewBox="0 0 128 128">
            <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
            <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/>
          </svg>`,
  },
  {
    name: 'Tailwind',
    icon: `<svg viewBox="0 0 128 128">
            <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z" fill="#38BDF8"/>
          </svg>`,
  },
  {
    name: 'Git',
    icon: `<svg viewBox="0 0 128 128">
            <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0c-2.842-2.844-3.545-7.019-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L40.983 20.333L3.229 58.123c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327.034-11.501z"/>
          </svg>`,
  },
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');

.font-spaceGrotesk {
  font-family: 'Space Grotesk', sans-serif;
}
</style>

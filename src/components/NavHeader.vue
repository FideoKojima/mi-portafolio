<template>
  <header class="fixed w-full top-0 z-50 bg-slate-900">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo o Nombre -->
      <div
        class="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text"
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
        <div
          v-if="isMenuOpen"
          class="fixed md:hidden top-16 bottom-0 right-0 w-[94%] bg-white z-40 rounded-l-3xl shadow-2xl"
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
                  v-for="(tech, index) in technologies"
                  :key="index"
                  class="p-3 bg-gray-100 rounded-xl text-slate-700 flex items-center gap-2"
                >
                  <span class="text-sm">{{ tech }}</span>
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

const technologies = ['Vue.js', 'JavaScript', 'HTML & CSS', 'Tailwind', 'Git', 'Node.js']
</script>

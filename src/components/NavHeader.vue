<template>
  <header
    class="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800"
  >
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo o Nombre -->
      <div class="text-xl font-bold text-white">Luis Suarez</div>

      <!-- Navegación Desktop -->
      <div class="hidden md:flex gap-6">
        <a href="#about" class="text-gray-300 hover:text-white transition-colors">Sobre mí</a>
        <a href="#skills" class="text-gray-300 hover:text-white transition-colors">Habilidades</a>
        <a href="#projects" class="text-gray-300 hover:text-white transition-colors">Proyectos</a>
        <a href="#contact" class="text-gray-300 hover:text-white transition-colors">Contacto</a>
      </div>

      <!-- Botón Menú Mobile -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-300 hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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
    </nav>

    <!-- Menú Mobile -->
    <div v-if="isMenuOpen" class="md:hidden bg-slate-900 border-t border-slate-800">
      <div class="container mx-auto px-4 py-2 flex flex-col gap-2">
        <a
          href="#about"
          @click="isMenuOpen = false"
          class="py-2 text-gray-300 hover:text-white transition-colors"
        >
          Sobre mí
        </a>
        <a
          href="#skills"
          @click="isMenuOpen = false"
          class="py-2 text-gray-300 hover:text-white transition-colors"
        >
          Habilidades
        </a>
        <a
          href="#projects"
          @click="isMenuOpen = false"
          class="py-2 text-gray-300 hover:text-white transition-colors"
        >
          Proyectos
        </a>
        <a
          href="#contact"
          @click="isMenuOpen = false"
          class="py-2 text-gray-300 hover:text-white transition-colors"
        >
          Contacto
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <section id="projects" class="py-24 bg-slate-800">
    <div class="container mx-auto px-4">
      <!-- Encabezado centrado -->
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">Mis Proyectos</h2>
        <p class="text-lg text-gray-300">
          Una selección de los proyectos que he desarrollado durante mi formación.
        </p>
      </div>

      <!-- Grid de proyectos -->
      <div class="max-w-5xl mx-auto space-y-20">
        <article
          v-for="project in projects"
          :key="project.title"
          class="bg-slate-700/30 rounded-2xl p-8 backdrop-blur-sm border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300"
        >
          <div class="text-center mb-8">
            <span class="text-5xl mb-6 block">{{ project.emoji }}</span>
            <h3 class="text-2xl font-bold text-white mb-4">
              {{ project.title }}
            </h3>
            <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
              {{ project.description }}
            </p>
          </div>

          <!-- Tecnologías usadas -->
          <div class="flex flex-wrap justify-center gap-3 mb-8">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-4 py-2 bg-slate-800/50 text-blue-300 rounded-full text-sm border border-slate-600/50"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Vista previa -->
          <div
            class="aspect-video bg-slate-800/50 rounded-xl overflow-hidden mb-8 mx-auto max-w-3xl"
          >
            <div class="w-full h-full flex items-center justify-center">
              <div class="text-4xl">{{ project.emoji }}</div>
            </div>
          </div>

          <!-- Enlaces -->
          <div class="flex justify-center gap-4">
            <a
              :href="project.demoLink"
              target="_blank"
              class="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium transform hover:-translate-y-1 transition-all duration-300"
            >
              Ver Demo
            </a>
            <a
              :href="project.codeLink"
              target="_blank"
              class="px-8 py-3 bg-slate-700 text-white rounded-lg font-medium transform hover:-translate-y-1 transition-all duration-300 border border-slate-600"
            >
              Ver Código
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Mi Portafolio',
    description:
      'Sitio web personal desarrollado con Vue.js y Tailwind CSS. Implementa diseño responsivo, animaciones suaves y una experiencia de usuario moderna.',
    technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    emoji: '👨‍💻',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Dashboard App',
    description:
      'Aplicación de dashboard interactiva con gráficos dinámicos y manejo de datos en tiempo real.',
    technologies: ['Vue.js', 'Node.js', 'Express'],
    emoji: '📊',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'E-commerce Store',
    description:
      'Tienda en línea con carrito de compras, gestión de productos y proceso de checkout.',
    technologies: ['Vue.js', 'Vuex', 'Firebase'],
    emoji: '🛍️',
    demoLink: '#',
    codeLink: '#',
  },
]
</script>

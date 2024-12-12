<script setup>
const projects = [
  {
    title: 'Flora y Fauna',
    description:
      'Single Page Application que demuestra buenas prácticas de maquetación y diseño responsivo. Desarrollada con HTML5 y CSS3 utilizando la metodología BEM para una estructura de código limpia y mantenible.',
    technologies: ['HTML5', 'CSS3', 'BEM', 'Responsive Design'],
    emoji: '🌿',
    demoLink: 'https://flora-fauna-five.vercel.app/',
    codeLink: 'https://github.com/FideoKojima/flora_fauna',
  },
  {
    title: 'PokéAPI',
    description:
      'Aplicación web que consume la API de Pokémon para mostrar información detallada de diferentes Pokémon. Implementa manipulación dinámica del DOM y manejo de datos en JavaScript.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    emoji: '⚡',
    demoLink: 'https://poke-api-mu-three.vercel.app/',
    codeLink: 'https://github.com/FideoKojima/PokeApi',
  },
  {
    title: 'API REST Dashboard',
    description:
      'Dashboard interactivo con operaciones CRUD completas. Demuestra integración con APIs REST, manejo de datos backend y lógica de negocio avanzada.',
    technologies: ['JavaScript', 'REST API', 'CRUD', 'Async/Await'],
    emoji: '🔄',
    demoLink: 'https://desafio-consumo-api-rest-two.vercel.app/',
    codeLink: 'https://github.com/FideoKojima/DesafioConsumoAPI-REST',
  },
]
</script>

<template>
  <section id="projects" class="py-24 bg-slate-800">
    <div class="container mx-auto px-4">
      <!-- Encabezado -->
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">Mis Proyectos</h2>
        <p class="text-xl text-gray-300">
          Una selección de proyectos que demuestran mi progreso y habilidades en desarrollo web.
        </p>
      </div>

      <!-- Grid de proyectos -->
      <div class="max-w-6xl mx-auto space-y-24">
        <article v-for="project in projects" :key="project.title" class="group">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Preview del proyecto -->
            <div
              class="relative h-64 md:h-full bg-slate-700/50 rounded-2xl overflow-hidden border border-slate-600/50"
            >
              <div
                class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10"
              >
                <span class="text-6xl">{{ project.emoji }}</span>
              </div>
            </div>

            <!-- Información del proyecto -->
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-white">
                {{ project.title }}
              </h3>

              <p class="text-gray-300">
                {{ project.description }}
              </p>

              <!-- Tecnologías -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-1 bg-slate-700/50 text-blue-300 rounded-full text-sm border border-slate-600/50"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Enlaces -->
              <div class="flex gap-4">
                <a
                  :href="project.demoLink"
                  target="_blank"
                  rel="noopener"
                  class="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Ver Demo
                </a>
                <a
                  :href="project.codeLink"
                  target="_blank"
                  rel="noopener"
                  class="px-6 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

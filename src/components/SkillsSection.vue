<template>
  <section id="skills" class="py-24 bg-slate-900">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-white text-center mb-16">Mis Habilidades</h2>

      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <!-- Frontend Skills -->
        <div class="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50">
          <h3 class="text-2xl font-semibold text-white mb-8 text-center">Frontend</h3>
          <div class="space-y-6">
            <div v-for="skill in frontendSkills" :key="skill.name">
              <div class="flex items-center gap-3 mb-2">
                <!-- Ícono -->
                <div class="w-6 h-6">
                  <svg viewBox="0 0 128 128" v-html="skill.icon"></svg>
                </div>
                <div class="flex justify-between items-center w-full">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <span class="text-blue-400">{{ skill.level }}%</span>
                </div>
              </div>
              <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-700"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend Skills -->
        <div class="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50">
          <h3 class="text-2xl font-semibold text-white mb-8 text-center">Backend & Herramientas</h3>
          <div class="space-y-6">
            <div v-for="skill in backendSkills" :key="skill.name">
              <div class="flex items-center gap-3 mb-2">
                <!-- Ícono -->
                <div class="w-6 h-6">
                  <svg viewBox="0 0 128 128" v-html="skill.icon"></svg>
                </div>
                <div class="flex justify-between items-center w-full">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <span class="text-indigo-400">{{ skill.level }}%</span>
                </div>
              </div>
              <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Skills -->
      <div class="max-w-6xl mx-auto mt-12 text-center">
        <h3 class="text-2xl font-semibold text-white mb-8">Habilidades Adicionales</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <div
            v-for="skill in softSkills"
            :key="skill"
            class="px-6 py-3 bg-slate-800/50 text-gray-300 rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const frontendSkills = [
  {
    name: 'Vue.js',
    level: 85,
    icon: `<path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
           <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>`,
  },
  {
    name: 'JavaScript',
    level: 80,
    icon: `<path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
           <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581z"/>`,
  },
  {
    name: 'HTML5',
    level: 90,
    icon: `<path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
           <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>`,
  },
  {
    name: 'CSS3',
    level: 85,
    icon: `<path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
           <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/>`,
  },
  {
    name: 'Tailwind CSS',
    level: 75,
    icon: `<path fill="#38BDF8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z"/>`,
  },
  {
    name: 'Bootstrap',
    level: 70,
    icon: `<path fill="#7952B3" d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"/>`,
  },
]

const backendSkills = [
  {
    name: 'Node.js',
    level: 70,
    icon: `<path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772c8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086c-3.146 1.783-3.726 2.02-6.677 3.043c-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073z"/>`,
  },
  {
    name: 'Git',
    level: 85,
    icon: `<path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0c-2.842-2.844-3.545-7.019-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L40.983 20.333L3.229 58.123c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327.034-11.501z"/>`,
  },
  {
    name: 'GitHub',
    level: 80,
    icon: `<path fill="#fff" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.705-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>`,
  },
  {
    name: 'VS Code',
    level: 85,
    icon: `<path fill="#007ACC" d="M95 2.3l30.5 12.3v98.7L94.8 125.7 45.8 77l-31 24.1L2.5 94.9V33.1l12.3-5.9 31 24.3ZM14.8 45.7V83.2l18.5-19Zm48.1 18.5L94.8 89.3V39Z"/>`,
  },
  {
    name: 'Terminal',
    level: 75,
    icon: `<path fill="#fff" d="M7 3h114c2.2 0 4 1.8 4 4v114c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4zm114.4 118V7H6.6v114h114.8z"/><path fill="#fff" d="M18.2 19.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.2 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.2 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>`,
  },
  {
    name: 'NPM',
    level: 70,
    icon: `<path fill="#C12127" d="M2,10.9v104.1h124v-104H2z M25.9,105.5H14.6V32.4h11.3V105.5z M124.3,105.5H40.6V32.4h83.7V105.5z"/><path fill="#C12127" d="M70.9,45.2v47.1h-12V45.2H70.9z M90.5,45.2v47.1h-12V45.2H90.5z M110.1,45.2v47.1h-12V45.2H110.1z"/>`,
  },
]

const softSkills = [
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Resolución de problemas',
  'Atención al detalle',
  'Metodologías ágiles',
  'Control de versiones',
]
</script>

<style scoped>
.skill-bar-animation {
  transition: width 1s ease-in-out;
}
</style>

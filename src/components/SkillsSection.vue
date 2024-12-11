<template>
  <section id="skills" class="py-24 bg-slate-900">
    <div class="container mx-auto px-4">
      <!-- Encabezado -->
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">Mis Habilidades</h2>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Skills Grid -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <!-- Frontend Skills -->
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 class="text-2xl font-bold text-white mb-8 text-center">Frontend</h3>
            <div class="space-y-6">
              <div class="skill-item" v-for="skill in frontendSkills" :key="skill.name">
                <div class="flex justify-between mb-2">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <span class="text-blue-400">{{ skill.level }}%</span>
                </div>
                <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 class="text-2xl font-bold text-white mb-8 text-center">Herramientas</h3>
            <div class="space-y-6">
              <div class="skill-item" v-for="skill in backendSkills" :key="skill.name">
                <div class="flex justify-between mb-2">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <span class="text-indigo-400">{{ skill.level }}%</span>
                </div>
                <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="text-center">
          <h3 class="text-2xl font-bold text-white mb-8">Habilidades Adicionales</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <div
              v-for="skill in softSkills"
              :key="skill"
              class="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 text-gray-300 hover:bg-slate-700/50 transition-colors duration-300"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const frontendSkills = [
  { name: 'JavaScript', level: 75 },
  { name: 'Vue.js', level: 70 },
  { name: 'HTML & CSS', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Responsive Design', level: 85 },
]

const backendSkills = [
  { name: 'Node.js', level: 60 },
  { name: 'Git', level: 75 },
  { name: 'GitHub', level: 80 },
  { name: 'VS Code', level: 85 },
]

const softSkills = [
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Resolución de problemas',
  'Atención al detalle',
  'Metodologías ágiles',
  'Control de versiones',
  'Diseño UI/UX básico',
]
</script>

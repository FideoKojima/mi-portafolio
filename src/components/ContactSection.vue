<template>
  <section id="contact" class="py-24 bg-slate-900">
    <div class="container mx-auto px-4">
      <!-- Encabezado centrado -->
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">¡Hablemos!</h2>
        <p class="text-lg text-gray-300">
          ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas.
        </p>
      </div>

      <div class="max-w-xl mx-auto">
        <!-- Card principal -->
        <div class="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
          <!-- Información de contacto -->
          <div class="text-center mb-12">
            <div class="space-y-6">
              <!-- Email -->
              <a
                href="mailto:luissuarez@email.com"
                class="block p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700/80 transition-colors"
              >
                <svg
                  class="w-8 h-8 mx-auto mb-2 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  />
                </svg>
                <div class="text-gray-300">Gmail</div>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/in/luisesuareza/"
                target="_blank"
                rel="noopener noreferrer"
                class="block p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700/80 transition-colors"
              >
                <svg
                  class="w-8 h-8 mx-auto mb-2 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
                <div class="text-gray-300">LinkedIn</div>
              </a>

              <!-- GitHub -->
              <a
                href="https://github.com/FideoKojima"
                target="_blank"
                rel="noopener noreferrer"
                class="block p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700/80 transition-colors"
              >
                <svg
                  class="w-8 h-8 mx-auto mb-2 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <div class="text-gray-300">GitHub</div>
              </a>
            </div>
          </div>

          <!-- Formulario -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="space-y-2">
              <label class="block text-gray-300 text-center" for="name">Tu nombre</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 transition-all duration-300"
                placeholder="Escribe tu nombre"
                required
              />
            </div>

            <div class="space-y-2">
              <label class="block text-gray-300 text-center" for="email">Tu email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 transition-all duration-300"
                placeholder="ejemplo@email.com"
                required
              />
            </div>

            <div class="space-y-2">
              <label class="block text-gray-300 text-center" for="message">Tu mensaje</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                class="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 transition-all duration-300"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium transform hover:-translate-y-1 transition-all duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  console.log('Formulario enviado:', formData.value)
  formData.value = {
    name: '',
    email: '',
    message: '',
  }
}
</script>

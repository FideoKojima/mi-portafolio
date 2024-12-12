<template>
  <section id="contact" class="py-24 bg-slate-900">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-white text-center mb-16">¡Hablemos!</h2>

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Información de contacto -->
          <div class="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50">
            <h3 class="text-2xl font-semibold text-white mb-8">Conectemos</h3>

            <div class="space-y-6">
              <!-- Email -->
              <a
                href="mailto:suarezluis.ea@gmail.com"
                class="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <span
                  class="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:bg-slate-700 transition-colors"
                >
                  <svg viewBox="0 0 24 24" class="w-6 h-6">
                    <path
                      fill="currentColor"
                      d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                    />
                  </svg>
                </span>
                <div>
                  <div class="group-hover:hidden">Email</div>
                  <div class="hidden group-hover:block">suarezluis.ea@gmail.com</div>
                </div>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/in/luisesuareza/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <span
                  class="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:bg-slate-700 transition-colors"
                >
                  <svg viewBox="0 0 24 24" class="w-6 h-6">
                    <path
                      fill="currentColor"
                      d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                    />
                  </svg>
                </span>
                <div>
                  <div class="group-hover:hidden">LinkedIn</div>
                  <div class="hidden group-hover:block">linkedin.com/in/luisesuareza</div>
                </div>
              </a>

              <!-- GitHub -->
              <a
                href="https://github.com/FideoKojima"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <span
                  class="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:bg-slate-700 transition-colors"
                >
                  <svg viewBox="0 0 24 24" class="w-6 h-6">
                    <path
                      fill="currentColor"
                      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                    />
                  </svg>
                </span>
                <div>
                  <div class="group-hover:hidden">GitHub</div>
                  <div class="hidden group-hover:block">github.com/FideoKojima</div>
                </div>
              </a>
            </div>

            <div
              class="mt-8 p-6 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20"
            >
              <p class="text-gray-300">
                Estoy disponible para proyectos freelance y oportunidades de trabajo. Me especializo
                en desarrollo frontend con Vue.js y tecnologías modernas.
              </p>
            </div>
          </div>

          <!-- Formulario -->
          <form
            @submit.prevent="handleSubmit"
            class="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50"
          >
            <div class="space-y-6">
              <div>
                <label for="name" class="block text-gray-300 mb-2">Tu nombre</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  placeholder="¿Cómo te llamas?"
                  required
                />
              </div>

              <div>
                <label for="email" class="block text-gray-300 mb-2">Tu email</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label for="message" class="block text-gray-300 mb-2">Tu mensaje</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="4"
                  class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  placeholder="¿En qué puedo ayudarte?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium transform hover:-translate-y-1 transition-all duration-200"
              >
                Enviar Mensaje
              </button>
            </div>
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

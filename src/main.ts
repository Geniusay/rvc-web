import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import 'normalize.css'
import 'ress'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import './style/scss/index.scss'
      
import { createVuetify } from 'vuetify'
 
const vuetify = createVuetify({
  theme:{
    themes:{
       light:{
          dark:false,
          colors:{
      //       primary:'#316ce8',
      //       accent:'#607df9',
      //       secondary:'#a73aeb',
      //       info:'#0164d3',
      //       warning:'#fec500',
            error:'#ff4d7e',
      //       success:'#2cdd9b',
          },
          variables:{}
       }
    }
  },
  display:{
    thresholds:{
        // "xs": 0,
        // "sm": 600, // min
        // "md": 960,
        // "lg": 1280,
        // "xl": 1920,
        // "xxl": 2560
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')

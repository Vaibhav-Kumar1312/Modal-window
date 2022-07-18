import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

 app.directive('conso',{
     mounted:(el,binding)=>{el.style.fontSize="50px"}
 })


app.mount('#app')

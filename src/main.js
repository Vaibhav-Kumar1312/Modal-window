import { createApp } from 'vue'
import App from './App.vue'


// const AsyncModal = defineAsyncComponent(
//           () => {
//             return new Promise( 
//                    (resolve,reject) => { 
//                          setTimeout(() => resolve(Modal) ,3000)
//                                        }
//                            )
//                 } 
//            )

const app = createApp(App)

 app.directive('conso',{
     mounted:(el,binding)=>{el.style.fontSize="50px"}
 })


app.mount('#app')

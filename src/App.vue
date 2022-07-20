<template>
  <h1 >VUE</h1><br>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <input type ="text" ref ="inptElemnt">
  <button @click="handleClick">Click Me</button> -->
        <!-- <span>FALLATTR {{$attrs}}</span> -->
  
  <div v-if = "showModal">
    <Modal  @close="tgglModal">
      <h2>slots value1</h2>
      <p>slots value2</p>
      <template v-slot:links>
        <a href = "#">Sing up</a>
        <a href = "#">moe info</a>
      </template>
      </Modal>  
  </div>
  <!-- <AsyncModal/> -->
  <!-- <ModalAsync/> -->
  <div v-conso v-if = "showModal2">
    <Modal @close="tggleModal2" >
      <h1>test modal1</h1>
      <p>test modal2</p>
    </Modal>
  </div>
  
  
  <button  @click.alt="tgglModal">OPEN (alt)</button>
  <button @click.ctrl="tggleModal2">OPEN (ctrl)</button>

</template>

<script>

import Modal from './components/Modal.vue'
// import defineAsyncComponent from 'vue'
// import ModalAsync from './components/ModalAsync.vue'

// const AsyncModal = defineAsyncComponent(
//      () => {
//        return new Promise( 
//               (resolve,reject) => { 
//                     setTimeout(() => resolve(Modal) ,3000)
//                                   }
//                       )
//            } 
//        )

// const asyncModal = defineAsyncComponent(
//      () => {
//        return new Promise( 
//               (resolve,reject) => { 
//                   resolve(ModalAsync)
//                                   }
//                       )
//            } 
//        )







export default {
  name: 'App',
  components : {Modal },
  

 data(){
    return {
      showModal :false,
      showModal2:false
    }
  },
  provide:{
    message:'heelo'
  },
  methods:{
    handleClick(){
      console.log(this.$refs.inptElemnt);
      },
    tgglModal(){
      this.showModal = !this.showModal
    }  ,
    tggleModal2(){
      this.showModal2=!this.showModal2
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

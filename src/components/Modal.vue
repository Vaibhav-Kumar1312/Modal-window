<template>
    <div class="backdrop" @click.self="closeModal">
        <div  class="modal" >
            <!-- <span>FALLATTR {{ $attrs }}</span> -->
            <!-- <h2>{{header}}</h2>       ways to use props--> 
            <!-- <p>{{text}}</p> -->
            <h4  v-convo = "red">{{fullMsg}}</h4> 
            <slot></slot>
            <div class="actions">
                <!-- to use named slots in components -->
                <slot name="links"></slot>     
            </div>
        </div>
    </div>
</template>


<script>

// const convo = 
export default {
    props:['header' ,'text'],
    inject:{
        localMsg:{from:'message'}
    },
    directives:{'convo' : (el,binding)=>{
        el.style.color = this.binding.value
        console.log(this.binding.value)
        }},
    data(){
        return {
            fullMsg: `${this.localMsg} Vaibhav`
        }
    },
    methods:{
        closeModal(){
            this.$emit('close')
        }
    },
    // created() {
    // console.log(this.$attrs)
//   }
}
</script>






<style>
.modal {
width:500px;
padding: 20px; 
margin: 100px auto;
background:white;
border-radius: 10px;
}
.backdrop {
    top: 0;
    position: fixed;
    background:rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
</style>
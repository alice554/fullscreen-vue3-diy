<script setup lang="ts">
import componentItem from "./componentItem.vue";
import {reactive} from 'vue';
const state = reactive({
  isFullScreen:false
})

function test(){
  state.isFullScreen = !state.isFullScreen
}

function log(){
  console.log("###########")
}



function sdo(dose){
  console.log(dose)
}

function ldo(doing,callback){
  setTimeout(() =>{
console.log(doing);
callback('吃鸡')
  },1000)
}
sdo('买鸡')
sdo('杀鸡')
ldo('炖鸡',sdo)
sdo('玩手机')

function sdo(dose){
  console.log(dose)
}

function ldo(doing,callback){
  setTimeout(() =>{
console.log(doing);
callback('吃鸡')
  },1000)
}
sdo('买鸡')
sdo('杀鸡')
ldo('炖鸡')
sdo('吃鸡')












</script>

<template>
  <div>
    <componentItem v-model="state.isFullScreen" :teleport="false" @change="log">
      <div class="box">全屏</div>
    </componentItem>
    <button @click="test">测试</button>
  </div>
</template>

<style scoped>
.box{
  background-color:pink;
  width:400px;
  height:400px;
  margin:0 auto;
  font-size:50px;
  text-align:center;
}
</style>

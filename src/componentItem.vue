<script setup lang="ts" >
import { ref ,CSSProperties,computed, watch, reactive} from 'vue';
import screenfull from  "screenfull";

const wrapper = ref();
const state = reactive({
  isFullscreen:false
});
const props = withDefaults(
  defineProps<{
    modelValue:boolean
    pageOnly:boolean
    exitOnclickWapper:boolean
    teleport:boolean //当前元素是否全屏
  }>(),
  {
    modelValue:false,
    pageOnly:false,
    exitOnclickWapper:true,
    teleport:true
  }
)
const emit = defineEmits(['change'])
//如果为true，仅当前元素填充页面，浏览器不支持全屏api，改选项仍然开启
const isPageOnly = computed(()=>{
  return props.pageOnly || !screenfull.isEnabled
})

const wrapperStyle = computed(() =>{
  return isPageOnly.value && state.isFullscreen ? ({
    position:"fixed",
    left:"0",
    top: "0",
    width:"100%",
    height:"100%",
  } as CSSProperties) : undefined
})



//全屏方法
function request(){
  if(isPageOnly.value){
    state.isFullscreen = true
    document.addEventListener('keyup',keypressCallBack)
  }else{
    screenfull.request(props.teleport ? document.body : wrapper.value)
    state.isFullscreen = screenfull.isFullscreen
  }
  emit("change",state.isFullscreen)
}
function keypressCallBack(e:KeyboardEvent){
   if(e.key === "Escape") {
    exit()
   }
}
function shadeClick(e:Event){
  if(e.target === wrapper.value){
    if(props.exitOnclickWapper){
      exit()
    }
  }
}

watch(()=>props.modelValue,(value)=>{
  if(value !== state.isFullscreen){
    value ? request() : exit()
  }
})
</script>

<template>
  <div class="container" ref="wrapper"  :style="wrapperStyle" 
  @keyup="keypressCallBack" @click="shadeClick($event)">
   <slot></slot>
  </div>
</template>


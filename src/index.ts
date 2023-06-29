import {App} from "vue";
import screenfull from "screenfull";
import defaults from "lodash/fp/defaults";
// import { defaults } from "lodash";
import  componentItem  from "./componentItem.vue";
export{
    screenfull,
    componentItem
}
export default{
 install (app : App,{ name = 'fullscreen'}={}){
    app.component(name,defaults(componentItem,{name}))
 }
}
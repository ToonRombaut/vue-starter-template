import Vue from 'vue';
import ASScroll from "@ashthornton/asscroll";

let scroll = Vue.observable(new ASScroll({
    disableRaf: false,
    customScrollbar: false,
    touchScrollType: "transform",
    touchEase: 0.15,
}));
export default scroll;
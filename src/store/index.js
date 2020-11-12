import Vue from "vue"
import Vuex from "vuex"
import image1 from "../assets/images/1.jpg"
import image2 from "../assets/images/2.jpg"
import image3 from "../assets/images/3.jpg"
import image4 from "../assets/images/4.jpg"
import image5 from "../assets/images/5.jpg"
import image6 from "../assets/images/6.jpg"
import image7 from "../assets/images/7.jpg"

import image8 from "../assets/images/8.jpg"
import image9 from "../assets/images/9.jpg"
import image10 from "../assets/images/10.jpg"
import image11 from "../assets/images/11.jpg"
import image12 from "../assets/images/12.jpg"
import image13 from "../assets/images/13.jpg"
import image14 from "../assets/images/14.jpg"

import pop1 from '../assets/images/pop-1.jpg'
import pop2 from '../assets/images/pop-2.jpg'
import pop3 from '../assets/images/pop-3.jpg'
import pop4 from '../assets/images/pop-4.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards: [
            {
                title: "New Releases At The Box",
                images: [image1, image2, image3, image4, image5, image6, image7],
            },
            {
                title: "Most Popular At The Box",
                images: [image8, image9, image10, image11, image12, image13, image14],
            },
            {
                title: "Collections",
                images: [pop1, pop2, pop3, pop4],
            },
            {title: "Redbox Cinema On Demand"},
            {title: "Buy At The Box For $3.99+"},
            {title: "Rent On Demand Movies"}, 
            {title: "Black Voices. Black Stories."},
            {title: "Back At The Box"},
            {title: "On Demand Deals of the Week"}
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
})

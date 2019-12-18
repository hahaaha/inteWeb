import Vue from 'vue'

let test = Vue.component('test',{
    render: function(h) {
        return h(
            'div', { attrs: { id: 'app' }},['test',h('h1','tt')]
        )
    }
})

new Vue({
    render: h => h(test)
}).$mount('#app')
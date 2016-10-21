
var vm = new Vue({
    el: '#app',
    data: {
        key: '',
        value: ''
    },
    methods: {
        saveIntoDB () {
            localStorage.setItem(this.key, this.value)
            this.key = ''
            this.value = ''
        }
    }
})

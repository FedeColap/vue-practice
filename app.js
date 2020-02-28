new Vue({
    el: '#app',
    data: {
        message: 'Hello da Vue!',
        name: 'Federica',
        website: 'https://github.com/FedeColap', 
        portfolioTag: '<a href="https://fedecolap.github.io/portfolio/index.html">Here is my Portfolio</a>',
        age: '100'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' princess ' + this.name + '!'
        }
    }
}) 
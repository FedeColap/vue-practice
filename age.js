new Vue({
    el:'#age',
    data: {
        eta: '100',
        fedelogo: '<div id="littlefede"></div>',
    },
    methods: {
        add: function() {
            return this.eta++
        },
        subtract: function() {
            return this.eta--
        },
        fedefollows: function() {
            background(255, 255, 255);
            ellipse(100, 100, 50, 50);
            // this.fedelogo(mouseX, mouseY)
        }
    }
})
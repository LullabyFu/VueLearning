var vm = new Vue({
    el: '#example1',
    data: {
        isActive: true,
        hasError: false,
        redClass: 'red-font',
        styleClass: 'text-style',

        styleColor: 'green',
        fontSize: 20,

        styleObject: {
            'font-size': 18,
            color: 'brown'
        },

        style2: {
            'font-weight': 'bolder'
        }
    },
    computed: {
        classObject: function(){
            return {
                active: this.isActive && !this.hasError,
                'text-style': this.hasError
            }
        },

        bigFont: function(){
            return {
                color: 'red',
                fontSize: '18px'
            }
        }
    }
});
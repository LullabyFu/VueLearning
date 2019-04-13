var vm = new Vue({
    el: '#example1',
    data: {
        Parent: 'MY',
        itemArray: [
            { message: 'Hello', id: 1},
            { message: 'Janice', id: 2 }
        ],

        object1: {
            name: 'Janice',
            age: 20,
            job: 'student'
        },

        userProfile: {
            name: 'Andy'
        },

        numbers: [1, 2, 3, 4]
    },
    computed: {
        evenNumber: function(){
            return this.numbers.filter(function(number){
                return number % 2 === 0;
            })
        }
    },

    methods: {
        even: function(num){
            return num.filter(function(number){
                return number % 2 === 0;
            })
        }
    }
})

vm.userProfile = Object.assign({}, vm.userProfile, {
    age: 20,
    job: 'Student'
})
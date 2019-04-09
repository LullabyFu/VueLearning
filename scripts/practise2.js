var vm1 = new Vue({
    el: '#example1',
    data: {
        message: 'Hello, Alice',
        firstName: 'Janice',
        lastName: 'Fu',
        fullName: 'Janice Fu'
    },
    computed: {
        //计算属性的getter
        reversedMessage1: function(){
            //this指向vm实例
            return this.message.split('').reverse().join('');
        },

        fullName1: {
            get: function(){
                 return this.firstName + ' ' + this.lastName;
            },

             set: function(newValue){
                 var names = newValue.split(' ');
                 this.firstName = names[0];
                 this.lastName = names[names.length - 1];
             }
         }
    },
    watch:{
        firstName: function(val){
            this.fullName = val + ' ' + this.lastName;
        },
        
        lastName: function(val){
            this.fullName = this.firstName + ' ' + val;
        }
    },
    methods: {
        reversedMessage2: function(){
            return this.message.split('').reverse().join('');
        }
    }
});
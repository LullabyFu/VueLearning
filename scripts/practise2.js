var vm1 = new Vue({
    el: '#example1',
    data: {
        message: 'Hello, Alice',
        firstName: 'Janice',
        lastName: 'Fu',
        fullName: 'Janice Fu',
        password: '',
        response: ''
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
        },

        //使用watch测试ajax
        password: function(val){
            if(val=='666'){
                this.onSubmit();
            }
        }
    },
    methods: {
        reversedMessage2: function(){
            return this.message.split('').reverse().join('');
        },

        //ajax
        onSubmit: function(){
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        return success(xhr.responseText);
                    }
                    else{
                        return fail(xhr.responseText);
                    }
                }
            }

            function success(text){
                this.response = text;
            }
            function fail(text){
                this.response = text;
            }

            xhr.open("POST", "https://szuwechat.cn/tech", true);
            xhr.send(JSON.stringify({
                username: 'szu',
                password: '666'
            }));
        }
    }
});
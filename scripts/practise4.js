var vm = new Vue({
    el: '#example1',
    data: {
        show: true,
        ok: true,
        type: 'A',
        loginType: 'username',
        loginType1: 'username'
    },
    methods: {
        changeType: function(){
            if(this.loginType =='username')
            {
                this.loginType = 'email';
            }
            else{
                this.loginType = 'username';
            }
        },

        changeType1: function(){
            if(this.loginType1 =='username')
            {
                this.loginType1 = 'email';
            }
            else{
                this.loginType1 = 'username';
            }
        }
    }
})
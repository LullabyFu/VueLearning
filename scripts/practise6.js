var vm = new Vue({
    el: '#example',

    data: {
        counter: 0,
        name: 'Janice'
    },

    methods: {
        greet: function(event){
            alert('Hello ' + this.name);

            if(event){
                alert(event.target.tagName);
            }
        },

        sayHi: function(message){
            alert(message);_
        },

        warn: function(message, evet){
            //可访问原生事件对象
            if(event){
                event.preventDefault();//取消事件的默认动作
            }
            alert(message);
        }
    }
});

var obj = {
    foo: 'bar'
}

Object.freeze(obj);//冻结obj对象，无法对其进行修改

var vm = new Vue({
    el: '#hello', //与要绑定的H5标签的id一致

    //data对象中的所有属性都会加入vue的响应式系统中
    //属性值发生改变时，视图中会响应匹配更新为新的值
    data: {
        //只有vue实例创建时中存在的属性是响应式的
        a: 'hello, Janice',    //vm.a == data.a =>true

        OBJ: obj,    //修改不了obj，响应系统无法追踪变化

        rawHtml: '<span style="color: red">This is red</span>'
    },

    //生命周期钩子(是函数)，钩子的this上下文指向调用它的vue实例
    //不要在选项属性或回调上使用箭头函数！！
    created: function(){
        //vue实例一被创建就会执行
        console.log('a is: ' + this.a);
    }
});


//实例属性与方法，带有$，可与用户自定义的属性（如vm.a）区分开来
var data = { a: 1 };
var vm1 = new Vue({
    el: '#example',
    data: data
});

console.log(vm1.$data === data);//true
console.log(vm1.$data === vm1.data);//false
console.log(vm1.data);//undefined

//v-bind
var vm2 = new Vue({
    el: '#example1',
    data:{
        isButtonDisabled: false,
        id: 3,
        number: 5,
        ok: true,
        message: 'Hello, Janice'
    } 
});

var vm3 = new Vue({
    el: '#example2',
    data:{
        eventname: 'click',
        doSomething: function doSomething(){
            alert('Hello');
        }
    }
});




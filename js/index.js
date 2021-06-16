window.addEventListener('load', function () {
    // 定义数组来存放点名的信息
    let names = [];
    let inputs = null;
    // 获取信息
    let input = document.querySelector('.input');
    let del = document.querySelector('.del');
    let delAll = document.querySelector('.delAll');
    let box = document.querySelector('.box');
    let ul = box.querySelector('ul');
    let rollCall = document.querySelector('.rollCall');
    let boxs = document.querySelector('.boxs');
    if (names.length != 0) {
        roster();
    }
    // 点击输入框后将输入的字符串添加到数组内
    input.addEventListener('click', function () {
        inputs = prompt('可以输入单个名字,也可输入多个名字,中间用-隔开:');
        if (inputs == '') {
            alert('输入不能为空');
        } else if (inputs.indexOf('-') != -1) {
            lis = inputs.split('-');
            console.log(lis.length);
            for (let i = 0; i < lis.length; i++) {
                names.push(lis[i]);
            }
            roster();
        } else {
            names.push(inputs);
            roster();
        }
    })

    // 点击删除按钮,删除数组中的最后一个姓名
    del.addEventListener('click', function () {
        names.pop();
        roster();
    })
    // 点击清空,删除数组内所有的名字
    delAll.addEventListener('click', function () {
        names = [];
        // for (let i = names.length; i > 0; i--) {
        //     names.pop();
        // }
        roster();
    })
    // 创建花名册,用li来保存数组内的数据
    function roster() {
        for (let i = ul.children.length; i > 0; i--) {
            ul.removeChild(ul.children[ul.children.length - 1]);
        }
        for (let i = 0; i < names.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = names[i];
            ul.appendChild(li);
        }
    }
    // 生成随机数
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
    }
    // 随机点名
    rollCall.addEventListener('click', function () {
        let num = getRandom(0, names.length - 1);
        boxs.innerHTML = names[num];
    })
})
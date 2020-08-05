let html = document.querySelector("#html");

let style = document.querySelector("#style");
let string = `/*你好，我是 Jhon Titor
*接下来我演示一下我的菜鸡前端功底
*首先我要准备一个div
**/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把 div 变成一个太极图
*首先把div变成一个圆
**/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;    
}
/*太极是阴阳形成的
*一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;




// string = string.replace(/\n/g, "<br>") //通过正则表达式实现将所有回车换行

let string2 = ''
let n = 0;

let step = () => {
    setTimeout(() => {
        //如果回车就不照搬，否则照搬
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp";
        } else {
            string2 += string[n]

        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999)
        if (n < string.length - 1) {
            // n不是最后一个，就继续
            n += 1;
            step();
        } else { // n是最后一个

        }
    }, 50);
};

step();
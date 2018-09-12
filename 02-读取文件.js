//浏览器中的js不能读取文件node.js可以读取文件
//fs是filesystem的缩写就是文件系统的意思
//使用require加载fs模块
var fs=require('fs');
//2，读取文件,第一个参数是文件路径，第二个参数是一个回调函数error和data
/*
fs.readFile('./data/hello.txt',function (error,data) {
    console.log(data);
    //默认文件中存储二进制二进制转换成16进制了通过tostring方法转换成我们认识的字符
    console.log(data.toString());
});
*/
fs.readFile('./data/hello.txt',function (error,data) {
   if (error)
   {
       console.log("读取文件失败");
   }
   else {
       console.log(data.toString());
   }
});


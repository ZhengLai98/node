//使用node可以非常轻松的构建出一个web服务器
//在node中专门提供了一个node 模块帮助编写创建服务器
/*
* 1，加载http核心模块
* 2，使用http,createServer（）方法创建一个web服务器，返回一个Server实例
*提供对数据的服务,发请求接受请求，处理请求，进行反馈
* 当客户端请求过来会自动触发request请求事件然后执行第二个参数回调处理
* 4.启动服务器，绑定端口号
*/
var http=require('http');
var server=http.createServer();
server.on('request',function () {
    console.log("收到客户端的请求了");
});
server.listen(3000,function () {
    console.log("服务器启动成功，可以通过 http://localhost:3000 访问");
});
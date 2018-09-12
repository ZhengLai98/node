var http=require('http');
var server=http.createServer();
//request请求事件处理函数需要接受两个参数request请求对象请求对象可以用来获取客户端的一些请求信息如请求路径，response响应对象
//响应对象可以用来给客户端发响应消息
server.on('request',function (req,res) {
    console.log("收到客户端的请求,请求路径为"+req.url);
    //res即resquest有一个方法，write可以用来给客户端发送响应数据，write可以使用多次 但最后一次一定要使用end 来结束响应，否则客户端会一直等待
    res.write('hello');
    res.write('nodejs');
    res.end();
});
server.listen(3000,function () {
    console.log("服务器启动成功");
});
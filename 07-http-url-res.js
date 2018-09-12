var http=require('http');
var server=http.createServer();
server.on('request',function (req,res) {
    //console.log('收到请求，请求路径是：'+req.url);
   /* res.write('hello');
    res.write('world');
    res.end();*/
   //res.end('hello nodejs');
   /*
   * 根据不同的请求路径发送不同的响应结果
   *1，获取请求路径
   * 2，判断路径处理响应
   *注意：req.url获取的是端口号之后的那一部分路径也就是说所有的url都是以/开头的
   * *//*

   if (url==='/')
   {
       res.end('index page')
   }
   if(url==='/login'){
       res.end('login page');
   }else {
       res.end('404 Not Found.');
   }*/
    var url=req.url;
    if(url==='/products')
    {
        var products=[
            {
                name:"苹果X",
                price:8888,
            },

            {
                name:"香蕉X",
                price:8888,
            },

            {
                name:"小辣椒X",
                price:8888,
            },

        ];
        res.end(JSON.stringify(products));
    }

});
server.listen(3000,function () {
    console.log("srever seccessful");
});
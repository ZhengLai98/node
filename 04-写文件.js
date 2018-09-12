var fs=require('fs');
fs.writeFile('./data/你好.txt','你好我是郑殿双我正在学node.js',function (error) {
    console.log('文件写入成功');
});
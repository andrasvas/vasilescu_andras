//wrapper function
// function (__dirname, __filename, module, require, exports)
// {



    console.log('ok!');
    console.log(__dirname)

    const add = require("./calculator.js")

    console.log(add(1,2))

    const http = require("http")

    const server = http.createServer(function(req,res){
        res.writeHead(200)
        res.end("hello world")
    })

    server.listen(8080)
// }
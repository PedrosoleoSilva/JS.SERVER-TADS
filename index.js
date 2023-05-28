const {server} = require("./server");
const port = 3000; //porta servidor

server.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})





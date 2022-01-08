// class Server{
//     constructor(ip,port){
//         this.ip = ip
//         this.port = port
//     }
//     get url(){
//         return`https://${this.ip}:${this.port}`
//     }

// }

// function aws(Server){
//     Server.isAWS = true
//     Server.awsInfo = function(){
//         return Server.url
//     }
//     return Server
// }

// function azure(Server){
//     Server.isAzure = true
//     Server.port += 500
//     return Server
// }

// const s1 = aws(new Server('12.23.34.56', 7076))
// console.log(s1.isAWS)
// console.log(s1.awsInfo())

// const s2 = azure(new Server('11.22.33.55', 4411))
// console.log(s2.isAzure)
// console.log(s2.url)
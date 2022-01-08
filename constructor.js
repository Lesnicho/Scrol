// function Serve(name, ip){
//     this.name = name,
//     this.ip = ip
// }

// Serve.prototype.getUrl = function(){
//     retrun`https://${this.ip}:80`
// }
class Server {
    constructor(name,ip){
        this.name = name
        this.ip = ip
    }
    
    getUrl(){
        return `https://${this.ip}:80`
    }
}



const aws = new Server('Asd German','80,21,21,32')
console.log(aws.getUrl())
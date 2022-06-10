class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAws = true
    server.awsInfo = function () {
        return server.url
    }
    return server
}

function azure(server) {
    server.isAzure = true
    server.port += 500
    server.azureInfo = function () {
        return server.url
    }
    return server
}

const s1 = aws(new Server('12.12.12.12', 8080))
console.log(s1.awsInfo())
console.log(s1.url)

const s2 = azure(new Server('34.34.34.34', 1000))
console.log(s2.azureInfo())

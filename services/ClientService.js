class ClientService {
    static create(client){
        let clients  = ClientService.findAll()
        clients.push(client)
        localStorage.setItem("clients", JSON.stringify(clients))
    }

    static update(){
        const updated = JSON.stringify(this.clients)
        localStorage.setItem('clients', updated);
    }

    static findAll(){
        let clients = JSON.parse(localStorage.getItem('clients'))
        if(clients) return clients
        else return []  
    }

    static remove(client){
        this.clients.splice(client,1)
        this.update();
    }
}
const ListClient = Vue.component('list-client', {
    template: /*html*/ `
        <v-simple-table>
            <thead>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Ações</th>
            </thead>
            <tbody>
                <tr v-for="c in clients">
                    <td>{{c.name}}</td>
                    <td>{{c.email}}</td>
                    <td>{{c.cpf}}</td>
                    <td>
                        <v-btn fab text small color="info" @click=goToDetail(c)>
                            <v-icon>mdi-eye</v-icon>
                        </v-btn>
                        <v-btn fab text small color="error" @click="removeItem(c)">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    `,
    data(){
        return {
        clients: []
        }
    },
    methods:{
        listAll(){
            this.clients = ClientService.findAll()
        },
        goToDetail(client){
            // muda de rota (VueRouter)
            //  $route, $router
            this.$router.push({ name: 'detalhe', params: client })
        },
        removeItem(client){
            this.ClientService.remove(client);
            this.ClientService.update(client)
        }
    },
    created(){
        this.listAll()
    }

})
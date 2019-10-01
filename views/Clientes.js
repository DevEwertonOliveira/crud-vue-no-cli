const Clientes = Vue.component('clientes', {
    template: /*html*/ `
        <v-container>
            <h1>{{title}}</h1>

            <form-client @saved="updateList" @cancel="cancel" :client="client"></form-client>
        
            <list-client ref="list" ></list-client>
        </v-container>
    `,
    components: {
        NavBar,
        FormClient,
        ListClient
    },
    data() {
        return {
        title: 'Cadastro de cliente',
        client: {}
        }  
    },
    methods: {
        cancel(){
            this.client = {}
        },
        updateList(){
        this.$refs.list.listAll()
    
        },
    }
})
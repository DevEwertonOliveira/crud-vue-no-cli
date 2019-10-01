const DetalheCliente = Vue.component('detalhe-cliente', {
    template: /*html*/ `
        <div>
            <h1>Detalhe do cliente</h1>

            <h3>{{client.name}}</h3>
            <p>{{client.cpf}}</p>
            <p>{{client.email}}</p>
        </div>
    `,
    data(){
        return {
            client: {}
        }
    },
    mounted() {
        // $route, $routed
        console.log(this.$route.params)
        this.client = this.$route.params
    }
})
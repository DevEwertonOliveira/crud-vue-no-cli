const FormClient = Vue.component('form-cliente',{
    template: /*html*/ `
    <v-form>
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field outlined type="text" label="Nome do cliente" v-model="client.name"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field outlined type="text" label="Email do cliente" v-model="client.email"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field outlined type="number" label="CPF do cliente" v-model="client.cpf"></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="space-between" class="px-4">
                <v-btn color="success" @click="save" type="button">Salvar</v-btn>
                <v-btn color="error" text @click="cancel" type="button" >Cancelar</v-btn>
            </v-row>           
        </v-container>
    </v-form>
    `,
    props: ['client'],
    methods: {
        save(){
            ClientService.create(this.client)
            this.$emit('saved') 
            this.cancel()
        },
        cancel(){
            //Emitir evento de cancelar para o pai
            this.$emit('cancel')
        }
    }
});
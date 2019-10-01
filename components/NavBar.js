const NavBar = Vue.component("nav-bar", {
  template: /*html*/ ` 
        <v-app-bar app dark color="blue accent-4">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-tool-bar-title>Home</v-tool-bar-title>

            <v-spacer></v-spacer>

            <v-btn text to="/">Home</v-btn>
            <v-btn text to="/clientes">Cliente</v-btn>
            <v-btn text to="produtos"   >Produto</v-btn>
            
                
        </v-app-bar>
    `
});

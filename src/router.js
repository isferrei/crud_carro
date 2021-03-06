import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
    {
        
    // ======================
    // Full Layout
    // ======================
			path: '',
            component: () => import('./layout/full/MainContainer.vue'),
            // ======================
            // Theme routes / pages
            // ======================

            children: [
                {
                    path: '/',
                    redirect: '/dashboard'
                },
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    index: 1,
                    component: () => import('./views/StarterPage.vue')
                },{
                    path: '/locacoes',
                    name: 'Locações',
                    index: 2,
                    component: () => import('./views/components/paginas/locacoes/locacoes.vue')
                },
                {
                    path: '/veiculos',
                    name: 'Veiculos',
                    index: 13,
                    component: () => import('./views/components/paginas/veiculos/veiculos.vue')
                },{
                    path: '/clientes',
                    name: 'Clientes',
                    index: 14,
                    component: () => import('./views/components/paginas/clientes/clientes.vue')
                }
            ]
		},
    // Redirect to dashboard page, if no match found
        {
            path: '*',
            redirect: '/dashboard'
        },
        {
            path: '/cadastrarVeiculo',
            component: () => import('./views/components/paginas/veiculos/cadastrarVeiculo.vue'),
        },
        {
            path: '/cadastrarCliente',
            component: () => import('./views/components/paginas/clientes/cadastrarClientes.vue'),
        },
        {
            path: '/cadastrarUsuario',
            component: () => import('./views/components/paginas/usuarios/cadastrarUsuarios.vue'),
        },
        {
            path: '/login',
            component: () => import('./layout/full/header/login.vue'),
        }
	]
})
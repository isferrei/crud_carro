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
                },{
                    path: '/login',
                    name: 'login',
                    index: 3,
                    component: () => import('./views/components/paginas/login/login.vue')
                },{
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
                //     path: '/loading',
                //     name: 'Loading',
                //     index: 15,
                //     component: () => import('./views/components/paginas/loading/loading.vue')
                // },{
                //     path: '/navbar',
                //     name: 'Navbar',
                //     index: 16,
                //     component: () => import('./views/components/paginas/navbar/navbar.vue')
                // },{
                //     path: '/notification',
                //     name: 'Notification',
                //     index: 17,
                //     component: () => import('./views/components/paginas/notification/notification.vue')
                // },{
                //     path: '/number-input',
                //     name: 'Number input',
                //     index: 18,
                //     component: () => import('./views/components/paginas/number-input/number-input.vue')
                // },{
                //     path: '/pagination',
                //     name: 'Pagination',
                //     index: 19,
                //     component: () => import('./views/components/paginas/pagination/pagination.vue')
                // },{
                //     path: '/popup',
                //     name: 'Popup',
                //     index: 20,
                //     component: () => import('./views/components/paginas/popup/popup.vue')
                // },{
                //     path: '/progress',
                //     name: 'Progress',
                //     index: 21,
                //     component: () => import('./views/components/paginas/progress/progress.vue')
                // },{
                //     path: '/radio',
                //     name: 'Radio',
                //     index: 22,
                //     component: () => import('./views/components/paginas/radio/radio.vue')
                // },{
                //     path: '/switch',
                //     name: 'Switch',
                //     index: 26,
                //     component: () => import('./views/components/paginas/switch/switch.vue')
                // },{
                //     path: '/tabs',
                //     name: 'Tabs',
                //     index: 28,
                //     component: () => import('./views/components/paginas/tabs/tabs.vue')
                // },{
                //     path: '/textarea',
                //     name: 'Textarea',
                //     index: 29,
                //     component: () => import('./views/components/paginas/textarea/textarea.vue')
                // }

            ]
		},
    // Redirect to dashboard page, if no match found
        {
            path: '*',
            redirect: '/dashboard'
        }
	]
})
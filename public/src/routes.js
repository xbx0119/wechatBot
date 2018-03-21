import App from './app';
import Index from './views/index';
import Console from './views/console';


const routes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Index
            },
            {
                path: '/console',
                component: Console,
                // routes: [
                //     {
                //         path: '/child/:id/grand-child',
                //         component: GrandChild
                //     }
                // ]
            }
        ]
    }
]

export default routes;
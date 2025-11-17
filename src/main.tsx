import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {Provider} from "react-redux";
import {routes} from "./router/routes.tsx";
import {store} from "./redux/store.ts";


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
)

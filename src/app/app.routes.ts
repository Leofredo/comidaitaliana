import { AboutComponent, PortafolioComponent, ProductoComponent  } from './components/index.paginas';
import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent},
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });

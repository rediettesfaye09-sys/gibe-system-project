import { Routes } from '@angular/router';
import {Dashboard} from "./pages/dashboard/dashboard";
import {SelfService} from "./pages/self-service/self-service";

export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: Dashboard},
    {path: 'self-service', component: SelfService}
];

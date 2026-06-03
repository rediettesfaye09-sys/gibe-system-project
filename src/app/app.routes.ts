import { Routes } from '@angular/router';
import {Dashboard} from "./pages/dashboard/dashboard";
import {SelfService} from "./pages/self-service/self-service";
import { MfaManagement } from './pages/mfa-management/mfa-management';

export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: Dashboard},
    {path: 'self-service', component: SelfService},
    {path: 'mfa-management',component: MfaManagement }
    
];

import { Routes } from '@angular/router';
import {Dashboard} from "./pages/dashboard/dashboard";
import {SelfService} from "./pages/self-service/self-service";
import { MfaManagement } from './pages/mfa-management/mfa-management';
import { TokenClaims } from './pages/token-claims/token-claims';
export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    
    {path: 'dashboard', component: Dashboard, data:{title: 'Dashboard'}},
    {path: 'self-service', component: SelfService, data:{title: 'Self Service'}},
    {path: 'mfa-management',component: MfaManagement, data:{title: 'MFA Management'} },
    {path: 'token-claims', component: TokenClaims, data:{title: 'Token Claims'} }
    
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./views/home/home').then(c => c.Home) },
    { path: 'login', loadComponent: () => import('./views/login/login').then(c => c.Login) },
    { path: '**', loadComponent: () => import('./views/login/login').then(c => c.Login) },
];

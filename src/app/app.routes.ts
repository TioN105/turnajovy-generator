import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'leaderboard',
        loadComponent: () => import('./pages/leaderboard/leaderboard.page').then((m) => m.LeaderboardPage),
      },
      {
        path: 'matches',
        loadComponent: () => import('./pages/matches/matches.page').then((m) => m.MatchesPage),
      },
      {
        path: 'account',
        loadComponent: () => import('./pages/account/account.page').then((m) => m.AccountPage),
      },
      {
        path: '',
        redirectTo: '/tabs/matches',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/matches',
    pathMatch: 'full',
  },
];

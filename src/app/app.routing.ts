// Enable navigation from one view to the next as user performs application tasks
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SearchComponent} from '././search/search.component';

// an array of routes that describe how to navigate. Each route maps a URL path to a component
const appRoutes: Routes = [
  {path:'', component: SearchComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

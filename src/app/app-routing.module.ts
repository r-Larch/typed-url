
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { typedUrl } from 'typed-url';

import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent, UserRouteParams } from './user/user.component';
import { UserSettingsComponent, UserSettingsRouteParams } from './user-settings/user-settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'user',
    children: [
      { path: '', pathMatch: 'full', component: UserListComponent },
      { matcher: typedUrl<UserRouteParams>(':id/:name', { id: 'int', name: 'string' }), component: UserComponent },
      { path: ':name/:color', component: UserSettingsComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

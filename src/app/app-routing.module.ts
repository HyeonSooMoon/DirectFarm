import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page'

const routes: Routes = [
  //{path:'', redirectTo: '/main', pathMatch: 'full'}
  { path: '', loadChildren: './main/main.module#MainPageModule'}
  , { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' }
  ,{ path: 'login', component: LoginPage}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

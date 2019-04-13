import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dictionary',
    pathMatch: 'full'
  },
  {
    path: 'dictionary',
    loadChildren: './dictionary/dictionary.module#DictionaryPageModule'
  },
  {
    path: 'translate',
    loadChildren: './translate/translate.module#TranslatePageModule'
  },
  {
    path: 'add',
    loadChildren: './add/add.module#AddPageModule'
  },
  {
    path: 'word',
    loadChildren: './dictionary/word/word.module#WordPageModule'
  },
  {
    path: 'modify',
    loadChildren: './dictionary/modify/modify.module#ModifyPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

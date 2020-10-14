import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarTopicosComponent } from './topicos/consultar-topicos/consultar-topicos.component';

const routes: Routes = [
  { path: '', component: ConsultarTopicosComponent },

  {
    path: 'topicos',
    loadChildren: ()=>import('src/app/topicos/topico.module').then(t =>t.TopicosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

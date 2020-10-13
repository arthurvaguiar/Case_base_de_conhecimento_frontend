import { EditarTopicosComponent } from './editar-topicos/editar-topicos.component';
import { ConsultarTopicosComponent } from './consultar-topicos/consultar-topicos.component';
import { InserirTopicosComponent } from './inserir-topicos/inserir-topicos.component';
import { ListaTopicosComponent } from './lista-topicos/lista-topicos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


const routes: Routes = [
  { path: 'listar', component: ListaTopicosComponent },
  { path: 'inserir', component: InserirTopicosComponent },
  { path: 'consultar', component: ConsultarTopicosComponent },
  { path: 'editar', component: EditarTopicosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicoRoutingModule { }

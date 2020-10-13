import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TopicoRoutingModule } from './topico-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConsultarTopicosComponent } from './consultar-topicos/consultar-topicos.component';
import { InserirTopicosComponent } from './inserir-topicos/inserir-topicos.component';
import { ListaTopicosComponent } from './lista-topicos/lista-topicos.component';
import { EditarTopicosComponent } from './editar-topicos/editar-topicos.component';

@NgModule({
  declarations: [ListaTopicosComponent, InserirTopicosComponent, ConsultarTopicosComponent, EditarTopicosComponent],
  imports: [
    CommonModule,
    TopicoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ]
})
export class TopicosModule { }

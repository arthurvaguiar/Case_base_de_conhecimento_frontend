import { TopicosComponent } from './topicos/topicos.component';
import { UtilsModule } from './utils/utils.module';
import { TopicoService } from './topicos/topico.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { TopicosModule } from './topicos/topico.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    TopicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TopicosModule,
    ModalModule.forRoot(),
    UtilsModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    MatTableModule
  ],
  providers: [TopicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

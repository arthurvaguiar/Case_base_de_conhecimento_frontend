import { TopicoService } from './topico.service';
import { Topico } from './topico.model';
import { Component, OnInit } from '@angular/core';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';



@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.css']
})
export class TopicosComponent implements OnInit {
  titulo: string = "Lista de Tópicos";

  topicos: Topico[];


  constructor(private topicoService: TopicoService) { }

  ngOnInit(): void {
    this.topicoService.findAll().subscribe(
      t => this.topicos = t
    );
  }

}

import { TopicoForm } from './../topicoForm';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertModalService } from './../../utils/alert-modal.service';
import { TopicoService } from './../topico.service';
import { Component, OnInit } from '@angular/core';
import { Topico } from '../topico.model';
import { TERMOS } from 'src/app/termos/termos';

@Component({
  selector: 'app-consultar-topicos',
  templateUrl: './consultar-topicos.component.html',
  styleUrls: ['./consultar-topicos.component.css']
})
export class ConsultarTopicosComponent implements OnInit {

  filters = {
    titulo: '',
    categoria: ''
  };

  topicos: Topico[] = [];
  page: number = 0;

  constructor(
    private topicoService: TopicoService,
    private alertModalService: AlertModalService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onScroll() {
    this.page++;
    this.getByParameters();
  }

  applyFilters() {
    this.page = 0;
    this.topicos = [];
    this.getByParameters();
  }

  getByParameters() {
    this.spinner.show();

    this.topicoService.findByParameters( this.filters.titulo, this.filters.categoria).subscribe(
      response => {

        this.spinner.hide();
        this.topicos = this.topicos.concat(response['content']);
      }, error => {
        this.spinner.hide();
        this.alertModalService.showAlertDanger(TERMOS.mensagem_falha_filtrar_topicos);
      }
    );
  }

}



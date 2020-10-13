
import { AlertModalService } from './../../utils/alert-modal.service';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Topico } from "./../topico.model";
import { TopicoForm } from "./../topicoForm";
import { TopicoService } from "./../topico.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TERMOS } from "src/app/termos/termos";
import { NgxSpinnerService } from 'ngx-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableModule } from '@angular/material';

@Component({
  selector: 'app-editar-topicos',
  templateUrl: './editar-topicos.component.html',
  styleUrls: ['./editar-topicos.component.css']
})
export class EditarTopicosComponent implements OnInit {
  bsModalRef: BsModalRef;
  formGroup: FormGroup;
  topicoForm: TopicoForm;
  topico: Topico;
  formData: FormData;
  topicos: Topico[] = [];
  filters = {
    titulo: '',
    categoria: ''
  };
  constructor(private formBuilder: FormBuilder,
    private topicosService: TopicoService,
    private alertService: AlertModalService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute)
     { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.topicosService.findById(id).subscribe((response)=>{
      this.topicos = this.topicos.concat(response['content']);
    });
  }


  onScroll() {
   // this.page++;
    this.getByParameters();
  }
  applyFilters() {
  //  this.page = 0;
    this.topicos = [];
    this.getByParameters();
  }
  getByParameters() {
    this.spinner.show();

    this.topicosService.findByParameters(this.filters.titulo, this.filters.categoria).subscribe(
      response => {

        this.spinner.hide();
        this.topicos = this.topicos.concat(response['content']);
      }, error => {
        this.spinner.hide();
        this.alertService.showAlertDanger(TERMOS.mensagem_falha_filtrar_topicos);
      }
    );
  }

  editarTopico() {
    this.spinner.show();
''
    // this.topico = this.convertTopicoFormToTopico(this.formGroup.value);

    this.topicosService.update(this.topico).subscribe(
      response => {
        this.spinner.hide();
        this.alertService.showAlertSucess(TERMOS.mensagem_sucesso_inserir_topico);
        this.formGroup.reset();
      },
      erro => {
        this.spinner.hide();
        this.alertService.showAlertDanger(TERMOS.mensagem_falha_inserir_topico);
      }
    );
  }


}


import { AlertModalService } from './../../utils/alert-modal.service';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Topico } from "./../topico.model";
import { TopicoForm } from "./../topicoForm";
import { TopicoService } from "./../topico.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TERMOS } from "src/app/termos/termos";
import { NgxSpinnerService } from 'ngx-spinner';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-inserir-topicos',
  templateUrl: './inserir-topicos.component.html',
  styleUrls: ['./inserir-topicos.component.css']
})
export class InserirTopicosComponent implements OnInit {

  bsModalRef: BsModalRef;
  formGroup: FormGroup;
  topicoForm: TopicoForm;
  topico: Topico;
  formData: FormData;

  constructor(
    private formBuilder: FormBuilder,
    private topicosService: TopicoService,
    private alertService: AlertModalService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      titulo: [null, [Validators.required, Validators.maxLength(100), Validators.minLength(50)]],
      conteudo: [null, [Validators.required, Validators.maxLength(1500)]],
      categoria: [null, [Validators.required]],
      status: [null, [Validators.required]]
    });
  }

  inserirTopico() {
    this.spinner.show();

    this.topico = this.convertTopicoFormToTopico(this.formGroup.value);

    this.topicosService.insert(this.topico).subscribe(
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

  convertTopicoFormToTopico(topicoForm: TopicoForm): Topico {
    let topico: Topico = {
      id: null,
      titulo: topicoForm.titulo,
      conteudo: topicoForm.conteudo,
      categoria: topicoForm.categoria,
      status: topicoForm.status,
      dataCriacao: '',
    };

    return topico;
  }

}

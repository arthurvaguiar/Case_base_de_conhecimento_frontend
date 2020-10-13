import { TopicoService } from './../topico.service';
import { Topico } from './../topico.model';
import { AlertModalService } from "./../../utils/alert-modal.service";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { TERMOS } from "src/app/termos/termos";
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@Component({
  selector: 'app-lista-topicos',
  templateUrl: './lista-topicos.component.html',
  styleUrls: ['./lista-topicos.component.css']
})
export class ListaTopicosComponent implements OnInit {
  modalRef: BsModalRef;
  topicos: Topico[] = [];
  page: number = 0;


  constructor(
    public topicoService: TopicoService,
    private modalService: BsModalService,
    private alertModalService: AlertModalService ) { }

  ngOnInit(): void {
   this.getTopicosPaginated();
  }

  openModalFiltros(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "modal-tp" })
    );
  }

  onScroll() {
    this.page++;
    this.getTopicosPaginated();
  }

  getTopicosPaginated() {
    this.topicoService.findAll().subscribe(response => {
      this.topicos = this.topicos.concat(response['content']);
    },(error) => {
      this.alertModalService.showAlertDanger(TERMOS.mensagem_falha_buscar_topicos);
    });
  }

}

import { API_CONFIG } from './../config/api.config';
import { Topico } from './topico.model';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

const sufix = 'topicos';

@Injectable()
export class TopicoService {


  constructor(private http: HttpClient) {

  }

  findAll() {
    return this.http.get<Topico[]>(API_CONFIG.baseUrl + sufix);
  }

  findByParameters(titulo, categoria, page: number = 0, linesPerPage = 24) {
    let urlPesquisa = API_CONFIG.baseUrl + sufix + `?titulo=${titulo}`;
    if (categoria) {
      urlPesquisa = urlPesquisa + `&categoria=${categoria.toUpperCase()}`
    }
    console.log(urlPesquisa)
    return this.http.get(urlPesquisa);
  }

  findById(id): Observable<Topico> {
    return this.http.get<Topico>(API_CONFIG.baseUrl + sufix + `/${id}`);
  }

  insert(topico: Topico) {
    return this.http.post(API_CONFIG.baseUrl + sufix, topico, { observe: 'response', responseType: 'text' });
  }

  update(topico: Topico): Observable<Topico> {
    // return this.http.put(API_CONFIG.baseUrl+sufix+`/${id}`);

    const url = `${API_CONFIG.baseUrl}/${sufix}/${topico.id}`;
    console.log(topico);
    return this.http.put<Topico>(url, topico);
  }


}

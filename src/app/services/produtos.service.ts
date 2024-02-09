import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produtos.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private apiUrl = 'https://localhost:8080/streams';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.apiUrl);
  }
}

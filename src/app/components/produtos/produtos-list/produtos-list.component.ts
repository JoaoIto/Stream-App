import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../models/produtos.model';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-produtos-list',
  standalone: true,
  imports: [],
  templateUrl: './produtos-list.component.html',
  styleUrl: './produtos-list.component.css'
})
export class ProdutosListComponent implements OnInit {
  produtos: Produto[] = [];

  constructor (private produtoService: ProdutosService){

  }

  ngOnInit(): void {
      this.produtoService.getProdutos().subscribe(data => {
        this.produtos = data;
      })
  }
}

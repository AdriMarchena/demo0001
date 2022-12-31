import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  displayedColumns: string[] = ['prod_name', 'prod_desc', 'prod_price', 'actions'];
  dataSource: Product[] = [];

  constructor( 
    private productService: ProductService, 
    private router: Router   
  ) {

  }

  ngOnInit(): void {
    this.productService.listProducts().subscribe(data => {
      this.dataSource = data;
    })
  }

  verProducto(id: string) {
    localStorage.setItem('idProducto', id);
    console.log("id", id);
    this.router.navigate(['detail-product']);
  }
}
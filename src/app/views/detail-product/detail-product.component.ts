import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  product: Product = {
    prod_desc: '',
    prod_name: '',
    prod_price: 0,
    updated_at: ''
  };

  constructor(
    private productService: ProductService, 
    private router: Router   
  ) { 
    this.obtenerProducto();
  }

  ngOnInit(): void {
  }

  editarProducto(body: Product) {
    const idProduct = localStorage.getItem('idProducto');
    if( idProduct ) {
      this.productService.editProduct(body, idProduct ).subscribe( data => {
        console.log(data);
        this.router.navigate(['list-product']);
      });
    }
  }

  obtenerProducto() {
    const idProduct = localStorage.getItem('idProducto');
    if( !idProduct ) {
      this.router.navigate(['list-product']);
    } else {
      this.productService.verProduct(idProduct).subscribe(data => {
        console.log(data);
        this.product = data;
      });
    }
  }

}

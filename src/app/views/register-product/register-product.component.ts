import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit {

  constructor(
    private productService: ProductService, 
    private router: Router 
  ) {
  }

  ngOnInit(): void {
  }

  crearProducto(body: Product) {
    this.productService.addProduct(body).subscribe(data => {
      console.log("data", data);
      this.router.navigate(['list-product']);
    });
  }

}

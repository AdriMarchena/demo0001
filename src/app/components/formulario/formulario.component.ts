import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, OnChanges{

  createProduct: FormGroup | undefined;

  @Input() title: string = 'Crear producto';
  @Input() producto: Product = {
    prod_desc: '',
    prod_name: '',
    prod_price: 0,
    updated_at: ''
  }
  @Output() sendProduct = new EventEmitter<Product>();

  constructor() {
    this.inicializarFormulario()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inicializarFormulario();
  }

  ngOnInit(): void {
  }



  inicializarFormulario() {
    this.createProduct = new FormGroup({
      prodName: new FormControl(this.producto.prod_name, [
        Validators.required
      ]),
      prodDesc: new FormControl(this.producto.prod_desc, [
        Validators.required
      ]),
      prodPrice: new FormControl(this.producto.prod_price, [
        Validators.required
      ]),
    })
  }

  handleSubmit() {
    const { prodName, prodDesc, prodPrice } = this.createProduct?.value;
    const d = new Date();
    const update = d.getDate()+'-'+d.getMonth()+'-'+d.getFullYear;

    let body: Product = {
      prod_name: prodName,
      prod_desc: prodDesc,
      prod_price: prodPrice,
      updated_at: update
    }

    this.sendProduct.emit(body);

  }
}

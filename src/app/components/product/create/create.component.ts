import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private service: ProductService, private router: Router) { }
  
  createProduct() {
    this.service.showMessage('Produto criado com sucesso!');
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}

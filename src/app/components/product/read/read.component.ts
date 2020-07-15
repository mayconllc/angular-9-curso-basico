import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.read().subscribe(products => {
      this.products = products;
    })
  }

}

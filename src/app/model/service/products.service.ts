import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
   
    { id: 2, name: 'Um dia sem reclamar', price: 20.5, description: 'Rafael Montes', image:'../livro2.png'},
    { id: 3, name: 'Como fazer amigos ', price: 90.0, description: 'Rafael Montes', image:'../livro3.png'},
    { id: 1, name: 'A empregada', price: 45.0, description: 'Robert Stevenson', image:'../livro4.png'},
    { id: 2, name: 'Verity', price: 20.5, description: 'Rafael Montes', image:'../livro5.png'},
    { id: 3, name: 'FBI', price: 90.0, description: 'Rafael Montes', image:'../livro6.png'},
    { id: 2, name: 'Justiça Cosmica', price: 20.5, description: 'Rafael Montes', image:'../livro8.png'},
    { id: 3, name: 'Fernanda Montenegro', price: 90.0, description: 'Rafael Montes', image:'../livro9.png'},
    { id: 1, name: 'Riqueza Brasil', price: 45.0, description: 'Robert Stevenson', image:'../livro10.png'},
    { id: 2, name: 'Milionario', price: 20.5, description: 'Rafael Montes', image:'../livro11.png'},
    { id: 3, name: 'Homem mais rico', price: 90.0, description: 'Rafael Montes', image:'../livro12.png'},
  ];

  getProducts(): Iproducts[]{
    return this.products;
  }
}
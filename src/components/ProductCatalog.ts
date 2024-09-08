import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../service/CartService';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: '../components_html/product_catalog.html',
  styleUrls: ['../components_css/productcomponent.css']
})
export class ProductCatalogComponent {
  // List of products available in the catalog
  products: Product[] = [
    { id: 1, name: 'Guacamole con Totopos', price: 70, descripcion: 'Guacamole fresco hecho con aguacates, cebolla, cilantro, chile y limón, acompañado de totopos crujientes.', quantity: 1 },
    { id: 2, name: 'Salsa de la Casa con Totopos', price: 50, descripcion: 'Salsa fresca de tomate, cebolla y cilantro con un toque de chile, servida con totopos.', quantity: 1 },
    { id: 3, name: 'Esquites', price: 40, descripcion: 'Maíz tierno salteado con mantequilla, queso, mayonesa y chile en polvo.', quantity: 1 },
    { id: 4, name: 'Taco al Pastor', price: 25, descripcion: 'Carne de cerdo marinada en adobo, cocida a trompo, con piña, cebolla, cilantro y salsa verde.', quantity: 1 },
    { id: 5, name: 'Taco de Bistec', price: 35, descripcion: 'Carne de res asada con cebolla, cilantro y salsa roja, servida en tortilla de maíz o harina.', quantity: 1 },
    { id: 6, name: 'Taco de Carnitas', price: 30, descripcion: 'Cerdo cocido a fuego lento con un toque de naranja, acompañado de cebolla, cilantro y salsa de chile morita.', quantity: 1 },
    { id: 7, name: 'Taco de Barbacoa', price: 35, descripcion: 'Carne de res cocida a fuego lento con especias, acompañada de cebolla morada, cilantro y salsa verde.', quantity: 1 },
    { id: 8, name: 'Taco Dorado', price: 20, descripcion: 'Tortilla dorada rellena de frijol.', quantity: 1 },
    { id: 9, name: 'Taco de Pescado', price: 45, descripcion: 'Pescado empanizado y frito con col rallada, aguacate y salsa tártara.', quantity: 1 },
    { id: 10, name: 'Taco de Cochinita Pibil', price: 40, descripcion: 'Cerdo marinado en achiote, cocido a fuego lento y desmenuzado, con cebolla morada encurtida y salsa de habanero.', quantity: 1 },
    { id: 11, name: 'Taco de Chicharrón Prensado', price: 30, descripcion: 'Chicharrón prensado con salsa verde, cebolla y cilantro.', quantity: 1 },
    { id: 12, name: 'Frijoles Charros', price: 50, descripcion: 'Frijoles cocidos con tocino, chiles y especias, servidos calientes.', quantity: 1 },
    { id: 13, name: 'Arroz a la Mexicana', price: 35, descripcion: 'Arroz con tomate, zanahorias y guisantes, ligeramente especiado.', quantity: 1 },
    { id: 14, name: 'Pico de Gallo', price: 30, descripcion: 'Mezcla fresca de jitomate, cebolla, cilantro y chile serrano, con un toque de limón.', quantity: 1 },
    { id: 15, name: 'Churros con Chocolate', price: 60, descripcion: 'Churros recién hechos espolvoreados con azúcar y canela, acompañados de salsa de chocolate.', quantity: 1 },
    { id: 16, name: 'Flan Casero', price: 40, descripcion: 'Flan tradicional con caramelo y crema, servido en porciones individuales.', quantity: 1 },
    { id: 17, name: 'Dulce de Leche', price: 45, descripcion: 'Delicioso dulce de leche casero, con una textura suave y cremosa.', quantity: 1 },
    { id: 18, name: 'Horchata', price: 25, descripcion: 'Bebida dulce de arroz con canela.', quantity: 1 },
    { id: 19, name: 'Jamaica', price: 25, descripcion: 'Bebida refrescante de flor de jamaica.', quantity: 1 },
    { id: 20, name: 'Limón con Chía', price: 30, descripcion: 'Refrescante agua de limón con semillas de chía.', quantity: 1 },
    { id: 21, name: 'Cola', price: 35, descripcion: 'Bebida carbonatada de cola.', quantity: 1 },
    { id: 22, name: 'Sprite', price: 35, descripcion: 'Bebida carbonatada sabor lima-limón.', quantity: 1 },
    { id: 23, name: 'Agua Mineral', price: 20, descripcion: 'Agua mineral.', quantity: 1 },
    { id: 24, name: 'Tortillas Adicionales', price: 15, descripcion: 'Tortillas de maíz o harina para acompañar tus tacos.', quantity: 1 },
    { id: 25, name: 'Salsa Verde', price: 10, descripcion: 'Salsa de chile verde.', quantity: 1 },
    { id: 26, name: 'Salsa Roja', price: 10, descripcion: 'Salsa de chile rojo.', quantity: 1 },
    { id: 27, name: 'Salsa de Chipotle', price: 10, descripcion: 'Salsa de chile chipotle.', quantity: 1 },
    { id: 28, name: 'Salsa de Habanero', price: 10, descripcion: 'Salsa de chile habanero.', quantity: 1 }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    // console.log("si")
    this.cartService.addToCart(product);
  }
}

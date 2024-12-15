import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/products';

@Component({
  selector: 'app-products-category',
  standalone: false,
  
  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.css'
})
export class ProductsCategoryComponent implements OnInit {
  categoryId: number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID de la catégorie à partir de l'URL
    const categoryId = +this.route.snapshot.paramMap.get('id')!;

    // Filtrer les produits en fonction de la catégorie
    this.filteredProducts = this.listProducts.filter(product => product.categoryId === categoryId);
  }
  listProducts : Product[]=[
   {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur.jpg","categoryId":1, 
   "description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refs.jpg","categoryId":1, 
   "description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Lave vaisselle Beko", 
   "image":"assets/images/lavevaiselle.jpg", "categoryId":1, 
   "description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, 
   "description":"", "price":1200,"brand":"OPPO","promotion":0},
   {"id":5, "name":"Hachoir", 
    "image":"assets/images/hachoir.jpg","categoryId":2, 
    "description":"","price":120,"brand":"Moulinex", "promotion":0},
     {"id":6, "name":"TV 50''LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", 
    "price":1800,"brand":"LG","promotion":0},
     ];

     filteredProducts: Product[] = []; // Produits filtrés selon la catégorie
     showCategoryDetails(categoryId: number): void {
      const category = this.listCategories.find(cat => cat.id === categoryId);
      if (category) {
        this.categoryDescription = category.description;
      }
    }
}

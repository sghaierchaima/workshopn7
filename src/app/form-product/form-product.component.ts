import { Component } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'app-form-product',
  standalone: false,
  
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
  product: Product = new Product(); // Initialisez le modèle
  productList: Product[] = []; // Liste des produits

  saveProduct() {
    // Vérifiez si le formulaire est valide avant d'ajouter le produit
    if (this.product) {
      this.product.id = this.productList.length + 1; // ID auto-incrémenté
      this.productList.push({ ...this.product }); // Ajoutez le produit à la liste
      this.product = new Product(); // Réinitialisez le formulaire
    }
  }
}

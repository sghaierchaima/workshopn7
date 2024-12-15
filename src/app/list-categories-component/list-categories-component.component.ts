import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-list-categories-component',
  standalone: false,
  
  templateUrl: './list-categories-component.component.html',
  styleUrl: './list-categories-component.component.css'
})
export class ListCategoriesComponentComponent {
  titre: string = '';
  categories : Categorie[]=[

    {"id":1,"title":"Grand électroménager", 
    "image":"../../assets/images/grande.jfif", "description":"Appareils électroménagers de grande taille.", 
    "available":true},
    {"id":2,"title":"Petit électroménager", 
    "image":"assets/images/petitelectro.jpg", "description":"Appareils électroménagers de petite taille.", 
    "available":true},
    {"id":3,"title":"Produits informatiques", 
    "image":"assets/images/informatique.jpg", "description":"Accessoires et produits liés à l'informatique.", 
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/smart.jpg", 
    "description":"Les derniers smartphones avec des fonctionnalités avancées.", "available":true},
    {"id":5,"title":"TV, images et son", 
    "image":"assets/images/tv.jpg", "description":"Télévisions, systèmes audio et accessoires associés.", 
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produitV.jpg", 
    "description":"Produits pour véhicules, y compris accessoires et équipements.","available":false},
    ];
    showDescription(category: Categorie): void {
      alert(category.description); // Vous pouvez afficher la description dans une alerte
    }
    
}

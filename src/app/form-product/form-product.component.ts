import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  productForm: FormGroup;

  constructor() {
    // Initialisation du formulaire réactif
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required, 
        Validators.pattern('[a-zA-Z]*'),  // Seulement des lettres
        Validators.minLength(5)
      ]),
      categoryId: new FormControl('', [
        Validators.required
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d+(\\.\\d+)?$')  // Nombres avec éventuellement un point
      ]),
      promotion: new FormControl('', [
        Validators.pattern('^(0|[1-9][0-9]?)$')  // Moins de 100
      ])
    });
  }

  ngOnInit(): void {
  }

  // Méthode pour gérer la soumission du formulaire
  onSubmit(): void {
    if (this.productForm.valid) {
      // Logique pour ajouter le produit (ou l'envoyer à une API par exemple)
      console.log(this.productForm.value);
    }
  }

  // Méthode pour vérifier si le formulaire est invalide
  isFieldInvalid(field: string): boolean {
    return this.productForm.controls[field].invalid && this.productForm.controls[field].touched;
  }
}

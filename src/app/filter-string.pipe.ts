import { Pipe, PipeTransform } from '@angular/core';
import { Categorie } from './models/categorie';  // Assurez-vous d'importer la classe Categorie

@Pipe({
  name: 'filterString'
})
export class FilterStringPipe implements PipeTransform {

  transform(values: Categorie[], searchString: string): Categorie[] {
    if (!values || !searchString) {
      return values;  // Si aucune valeur ou chaîne de recherche, retourne les valeurs d'origine
    }

    return values.filter(value =>
      value.title.toLowerCase().includes(searchString.toLowerCase())  // Filtre selon le titre
    );
  }
}

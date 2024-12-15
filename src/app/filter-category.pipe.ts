import { Pipe, PipeTransform } from '@angular/core';
import { Categorie } from './models/categorie';

@Pipe({
  name: 'filterCategory',
  standalone: true 
})
export class FilterCategoryPipe implements PipeTransform {

  transform(categories: Categorie[], searchText: string): Categorie[] {
    if (!searchText) {
      return categories;
    }
    searchText = searchText.toLowerCase();
    return categories.filter(category => category.title.toLowerCase().includes(searchText));
  }
}

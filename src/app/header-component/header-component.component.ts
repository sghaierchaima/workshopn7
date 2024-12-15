import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  standalone: false,
  
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
 // Propriété qui détermine si l'utilisateur est un administrateur
 isAdmin: boolean = false;

 ngOnInit() {
   // Simulez la récupération du rôle utilisateur (à adapter selon votre logique)
   this.checkUserRole();
 }
   checkUserRole() {
    // Remplacez ce code par la logique réelle (par exemple, récupération via API ou AuthService)
    const userRole = localStorage.getItem('userRole'); // Exemple
    this.isAdmin = userRole === 'admin'; // Si le rôle est "admin", isAdmin est vrai
  }
}

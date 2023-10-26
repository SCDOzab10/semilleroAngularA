// import { Component } from '@angular/core';
// import { ApiService } from '../../service/api.service';

// @Component({
//   selector: 'app-toolbar',
//   templateUrl: './toolbar.component.html',
//   styleUrls: ['./toolbar.component.css']
// })
// export class ToolbarComponent {
//   constructor(private apiService: ApiService) {}

//   onSearch(searchTerm: string): void {
//     // Aquí puedes implementar la lógica para buscar personajes utilizando el servicio API
//     if (searchTerm) {
//       this.apiService.searchCharacter(searchTerm).subscribe((data) => {
         // Procesar los resultados de la búsqueda, por ejemplo, actualiza una lista de personajes.
//       });
//     }
//   }
// }
import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private apiService: ApiService) {}
  onSearch(event: any) {
    const searchValue = (event.target as HTMLInputElement).value;
    // Puedes agregar aquí la lógica para buscar en tu API con el valor de búsqueda
  }
}

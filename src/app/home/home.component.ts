import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  itemsPerPage = 5; // Cantidad de elementos por página
  currentPage = 1; // Página actual
  totalPages!: number;
  paginatedData: any[] = [];
  filteredData: any[] = []; // Array para datos filtrados
  selectedGender: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
      this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
      this.paginatedData = this.data.slice(0, this.itemsPerPage);
    });
  }

  filterByGender(gender: string) {
    // Filtrar los datos por género
    this.selectedGender = gender;
    this.filteredData = this.data.filter((item) => item.gender === gender);
    this.paginateData(this.filteredData);
  }



  paginateData(data: any[]) {
    // Lógica de paginación
    this.totalPages = Math.ceil(data.length / this.itemsPerPage);
    this.paginatedData = data.slice(0, this.itemsPerPage);
  }

  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updatePaginatedData();
  }
  totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

}

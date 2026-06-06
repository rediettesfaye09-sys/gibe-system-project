import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-self-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './self-service.html',
  styleUrl: './self-service.css',
})
export class SelfService {
  devices = [
    {
      device: 'Chrome on Windows',
      ip: '192.168.1.100',
      location: 'New York',
      lastActive: 'Now'
    },
    {
      device: 'Safari on iPhone',
      ip: '10.0.2.15',
      location: 'New York',
      lastActive: '2 hours ago'
    },
    {
      device: 'Chrome on Windows',
      ip: '192.168.1.100',
      location: 'New York',
      lastActive: '5 hours ago'
    },
    {
      device: 'Safari on iPhone',
      ip: '10.0.2.15',
      location: 'New York',
      lastActive: '2 hours ago'
    },
    {
      device: 'Safari on iPhone',
      ip: '10.0.2.15',
      location: 'New York',
      lastActive: '2 hours ago'
    },
    {
      device: 'Safari on iPhone',
      ip: '10.0.2.15',
      location: 'New York',
      lastActive: '2 hours ago'
    },
    {
      device: 'Safari on iPhone',
      ip: '10.0.2.15',
      location: 'New York',
      lastActive: '2 hours ago'
    },
    
  ];
 currentPage = 1;
  itemsPerPage = 3;

  get totalPages(): number {
    return Math.ceil(this.devices.length / this.itemsPerPage);
  }
  get totalRecords(): number {
    return this.devices.length;
  }

  get paginatedDevices() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.devices.slice(start, end);
  }

  get startIndex(): number { 
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endIndex(): number {
    const end = this.currentPage * this.itemsPerPage;
    return end > this.devices.length ? this.devices.length : end;
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}

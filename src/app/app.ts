import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { Navbar } from './layout/navbar/navbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gibe-system-project');
}

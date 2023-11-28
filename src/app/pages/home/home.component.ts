import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import {EcommerceComponent} from '../../ecommerce/ecommerce.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterModule, EcommerceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}



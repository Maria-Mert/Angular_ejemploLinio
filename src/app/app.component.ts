import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import {TarjetaComponent} from  './tarjeta/tarjeta.component';
import {AlertaComponent} from './alerta/alerta.component';
import { CardComponent } from './card/card.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TarjetaComponent, AlertaComponent, CardComponent, EcommerceComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}

import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {
  @Input() link_prod: String = "NA";
  @Input() img : String = "Imagen generica";
  @Input() title : String = "Titulo generico";
  @Input() or_price: String = "NA";
  @Input() avg: String = "NA";
  @Input() price: String = "NA";
  @Input() price_dis: String = "NA";

}

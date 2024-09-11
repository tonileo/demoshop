import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { ShopService } from '../../core/services/shop.service';
import { Product } from '../../shared/models/product';
import { HomeService } from '../../core/services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  homeService = inject(HomeService);
  private router = inject(Router);

  ngOnInit(): void {
    this.homeService.getTypesHomePage();
  }

  GoToHomePageItem(productId: number) {
    this.router.navigateByUrl('/shop/' + productId);
  }
}

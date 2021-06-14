import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './items/seachFilter.pipe';
import { ProductFilterPipe } from './product-details/productFilter.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:':id', component:ProductDetailsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    SearchFilterPipe,
    ProductFilterPipe,
    ProductDetailsComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

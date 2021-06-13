import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './items/seachFilter.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'details', component:ProductDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    SearchFilterPipe,
    ProductDetailsComponent

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

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { FilterCategoryPipe } from './filter-category.pipe';
import { FilterStringPipe } from './filter-string.pipe';
import { HighlightDirective } from './directive/highlight.directive';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { FormProductComponent } from './form-product/form-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FootercomponentComponent,
    HomeComponentComponent,
    ListCategoriesComponentComponent,
    NotfoundpageComponent,
    ProductsCategoryComponent,
    ProductsCategoryQPComponent,
    DetailsCategoryComponent,
    FormProductComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FilterCategoryPipe,
    FilterStringPipe,
    HighlightDirective,
    AppRoutingModule,
    ReactiveFormsModule,
   
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

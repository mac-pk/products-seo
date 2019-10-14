import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchSupplierComponent } from './search-supplier/search-supplier.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { SeoService } from './seo.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BulkEditModalComponent } from './modals/bulk-edit-modal/bulk-edit-modal.component';
import { PageComponent } from './shared/page/page.component';
import { DigitOnlyDirective } from './shared/digit-only/digit-only.directive';
import { AutoFocusDirective } from './shared/auto-focus/auto-focus.directive';
import { NoWhitespaceDirective } from './shared/no-whitespace/no-whitespace.directive';
import { EmailSupplierModalComponent } from './modals/email-supplier-modal/email-supplier-modal.component';
import { ProductOptimizationComponent } from './product-optimization/product-optimization.component';
import { ProductCategoryModalComponent } from './modals/product-category-modal/product-category-modal.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ClearAllModalComponent } from './modals/clear-all-modal/clear-all-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchSupplierComponent,
    SearchProductComponent,
    BulkEditModalComponent,
    PageComponent,
    DigitOnlyDirective,
    AutoFocusDirective,
    NoWhitespaceDirective,
    ProductOptimizationComponent,
    EmailSupplierModalComponent,
    ProductCategoryModalComponent,
    ClearAllModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    EditorModule
  ],
  providers: [
    SeoService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    BulkEditModalComponent
  ]
  ,
  bootstrap: [AppComponent],
  entryComponents: [
    BulkEditModalComponent, 
    EmailSupplierModalComponent, 
    ProductCategoryModalComponent, 
    ClearAllModalComponent],
  exports: [DigitOnlyDirective]
})
export class AppModule { }

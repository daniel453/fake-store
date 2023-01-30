import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from '@angular/common/http'
import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHomeComponent } from './components/nav-home/nav-home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartCounterComponent } from './components/cart-counter/cart-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHomeComponent,
    NotFoundComponent,
    CartCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

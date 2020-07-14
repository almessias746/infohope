import { MenuComponent } from './components/admin/menu/menu.component';
// Core Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Formulário
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
//Components sem Lazy
import { LoginComponent } from './components/public/login/login.component';
import { HomeComponent } from './components/public/home/home.component';
import { AboutComponent } from './components/public/about/about.component';
import { QuemSomosComponent } from './components/public/quem-somos/quem-somos.component';
import { AreaAtuacaoComponent } from './components/public/area-atuacao/area-atuacao.component';
import { PortfolioComponent } from './components/public/portfolio/portfolio.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { HeaderComponent } from './components/public/header/header.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { NavBarComponent } from './components/public/nav-bar/nav-bar.component';
import { PrimeNGModule } from './modules/primeng.modules';
import { ComumModule } from './modules/comum.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    QuemSomosComponent,
    AreaAtuacaoComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    PrimeNGModule,
    ComumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

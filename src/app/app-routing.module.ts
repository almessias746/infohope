import { AuthguardService } from './services/authguard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component';
import { HomeComponent } from './components/public/home/home.component';
import { AboutComponent } from './components/public/about/about.component';
import { AreaAtuacaoComponent } from './components/public/area-atuacao/area-atuacao.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { PortfolioComponent } from './components/public/portfolio/portfolio.component';
import { QuemSomosComponent } from './components/public/quem-somos/quem-somos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'area-atuacao', component: AreaAtuacaoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'admin', redirectTo: 'admin/painel', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin/painel', loadChildren: () => import('./components/admin/painel/painel.module').then(m => m.PainelModule), canActivate: [AuthguardService]},
  { path: 'admin/funcionario', loadChildren: () => import('./components/admin/funcionario/funcionario.module').then(m => m.FuncionarioModule), canActivate: [AuthguardService]},
  { path: 'admin/departamento', loadChildren: () => import('./components/admin/departamento/departamento.module').then(m => m.DepartamentoModule), canActivate: [AuthguardService]},
  { path: 'admin/artigo', loadChildren: () => import('./components/admin/artigo/artigo.module').then(m => m.ArtigoModule), canActivate: [AuthguardService]},
  { path: 'admin/requisicao', loadChildren: () => import('./components/admin/requisicao/requisicao.module').then(m => m.RequisicaoModule), canActivate: [AuthguardService]},
  { path: 'admin/movimentacao', loadChildren: () => import('./components/admin/movimentacao/movimentacao.module').then(m => m.MovimentacaoModule), canActivate: [AuthguardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

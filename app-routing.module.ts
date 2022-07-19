import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContrattoClienteComponent } from './contratto-cliente/contratto-cliente.component';
import { ContrattoComponent } from './contratto/contratto.component';
import { LogInComponent } from './log-in/log-in.component';
import { NoleggioClienteComponent } from './noleggio-cliente/noleggio-cliente.component';
import { ParcoVetturaComponent } from './parco-vettura/parco-vettura.component';
import { ServiziOffertiComponent } from './servizi-offerti/servizi-offerti.component';
import { ServiziComponent } from './servizi/servizi.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VetturaComponent } from './vettura/vettura.component';
import { FormServiziComponent } from './servizi/form-servizi/form-servizi.component';
import { FormVettureComponent } from './vettura/form-vetture/form-vetture.component';
import { FormContrattoComponent } from './contratto/form-contratto/form-contratto.component';
import { RichiestaNoleggiComponent } from './richiesta-noleggi/richiesta-noleggi.component';
import { NoleggiComponent } from './noleggi/noleggio.component';


const routes: Routes = [
  //PATH IN COMUNE
  {path: '',component:LogInComponent},

  {path: 'login', component:LogInComponent},
  {path: 'signup', component:SignUpComponent},
  

  //PATH NOLEGGIATORE
  
  {path: 'contnol',component: ContrattoComponent,children:[
    {path: 'formContratto', component: FormContrattoComponent}]},
    
  {path: 'vetture', component: VetturaComponent,children:[
    {path: 'formVetture', component: FormVettureComponent}]},

  {path: 'servizi', component: ServiziComponent,children:[
    {path: 'formservizi', component: FormServiziComponent}]},

    {path: 'richiestaNoleggio', component:RichiestaNoleggiComponent},
    {path: 'noleggio', component:NoleggiComponent},
  
  //PATH CLIENTE
  
  {path: 'parcoVettura', component: ParcoVetturaComponent},
  {path: 'serviziOfferti', component: ServiziOffertiComponent},
  {path: 'contcli', component: ContrattoClienteComponent},
  {path: 'nolcli', component: NoleggioClienteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


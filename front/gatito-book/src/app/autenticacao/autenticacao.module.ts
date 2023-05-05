import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacaoInterceptor } from './autenticacao.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true, //Indica que pode ter uma cadeia de interceptors
    }
  ]
})
export class AutenticacaoModule { }

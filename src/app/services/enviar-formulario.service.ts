import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviarFormularioService {

  constructor() { }

  enviarInformacaoParaBackend(info: string) {
    console.log(info)
    console.log("enviado para backend")
  }

}

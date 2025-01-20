import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { EnviarFormularioService } from '../../services/enviar-formulario.service';

@Component({
  selector: 'app-home',
  standalone: true, // não precisa de módulos
  imports: [], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Atributos, variaveis e métodos dessa classe
  name = "Juliana"
  mostrarTitulo = false;
  listItems = ["um", "dois", "tres"]

  // Método
  meuBoolean = false;
  alterarMeuBoolean(valor: boolean) {
    this.meuBoolean = valor;
  }

  
  // enviando informações de um component para outro
  // Input() o Filho recebe a informação do Pai

  // variavel recebe o valor de (name) do app.component --> envia para "minhaPropsDeFora" em home.component
  @Input("name") minhaPropsDeFora!: string; 

  @Output() emitindoValorName = new EventEmitter<string>();


  // Instanciando um objeto da classe service para poder reciclar metodos 
  private enviarFormularioService = inject(EnviarFormularioService); // faz a injeção, instancia um obj "enviarFormularioService" do tipo (EnviarFormularioService)

  // Com isso podemos usar enviarInformacaoParaBackend() que está lá na classe (EnviarFormularioService)
  submit() {
    this.emitindoValorName.emit(this.name);
    this.enviarFormularioService.enviarInformacaoParaBackend("enviando informação para o back-end")
  }

  
}

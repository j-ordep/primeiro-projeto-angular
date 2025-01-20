import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root', // como a aplicação vai chamar esse componente, tipo um ID
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Titulo';

  submit(event: any) {
    console.log(event)
  }

  logar(event:string) {
    console.log(event)
  }

}

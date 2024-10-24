import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {

    // i18n Select
    public name: string = 'Daniel';
    public gender: 'male' | 'female' = 'male';
    public invitationMap = {
      male: 'invitarlo',
      female: 'invitarla'
    }

    changeClient(): void {
      this.name= 'Melissa';
      this.gender = 'female';
    }

    // i18n Plural
    public clients: string[] = ['Maria', 'Pedro', 'Daniel', 'Fernando', 'Eduardo', 'Melissa'];
    public clientsMap = {
      '=0': 'no tenemos ningpun cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      'other': 'tenemos # clientes esperando'
    }

    deleteClient(): void {
      this.clients.shift();
    }

    // KeyValue Pipe

  public person = {
    name: 'Daniel',
    age: 23,
    addres: 'Angol, Chile'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap ( value => console.log('tap', value ))
  );

  public promiseValue: Promise<string> = new Promise (( resolve, reject ) => {
    setTimeout(() =>{
      resolve(' Tenemos data en la promesa.')
    }, 3500);
    })


}

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewTodoModalPage } from '../new-todo-modal/new-todo-modal.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  intemsTodo = [  
    {
    'nome':'Neander',
    'email':'neander@',
    'telefone':'9999-9999'
    },
    {
      'nome':'Alexandre',
      'email':'alepn@',
      'telefone':'8888-8888'
    },
    {
      'nome':'Daniel',
      'email':'daniel@',
      'telefone':'7777-7777'
    },
    {
      'nome':'Rafael',
      'email':'rafael@',
      'telefone':'5555-5555'
    },
    {
      'nome':'Eliton',
      'email':'eliton@',
      'telefone':'3333-2008'
    }
  ]

  constructor(private modalController: ModalController) {}
  async presentNewTodoModal() {
    const modal = await this.modalController.create({
      component: NewTodoModalPage,
      componentProps: {
        'modalController': this.modalController
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data){
      this.intemsTodo.push(data)
      console.log(data)
    }
  }

}

import { ModalRiscoPage } from './../modal-risco/modal-risco.page';
import { ModalSintomasPage } from './../modal-sintomas/modal-sintomas.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    data: any;
    form6: FormGroup;
    postivo: string;
    negativo: string;

  constructor(public modalController: ModalController, public fb: FormBuilder) {}
  ngOnInit(){
    this.gerarForm();
  }
    gerarForm() {
    this.form6 = this.fb.group({
      positivo: ["", [Validators.required]],
      negativo: ["", [Validators.required]],
       
    });
  }
  //para Mostrar o NgIF é necessario um Item
  items = [
    {
      name: '?',
      items: [
        '.'
         ]
    }
  ];
  //e uma variavel visible indez
  visibleIndex = -1;
//e a funcao 
  showSubItem(ind) {
    if (this.visibleIndex === ind) {
      this.visibleIndex;
    } else {
      this.visibleIndex = ind;
    }
  }
  //Iremos fazer 7 funções com o parametro de: "Colocar o numero seguinte depois do nome original EX: items5"

//2

//para Mostrar o NgIF é necessario um Item
// tslint:disable-next-line: member-ordering
items1 = [
  {
    name: '?',
    items: [
      '.'
       ]
  }
];
//e uma variavel visible indez
// tslint:disable-next-line: member-ordering
visibleIndex1 = -1;
//e a funcao 
showSubItem1(ind) {
  if (this.visibleIndex1 === ind) {
    this.visibleIndex1;
  } else {
    this.visibleIndex1 = ind;
  }
}



//3
//para Mostrar o NgIF é necessario um Item
// tslint:disable-next-line: member-ordering
items2 = [
  {
    name: '?',
    items: [
      '.'
       ]
  }
];
//e uma variavel visible indez
visibleIndex2 = -1;
//e a funcao 
showSubItem2(ind) {
  if (this.visibleIndex2 === ind) {
    this.visibleIndex2;
  } else {
    this.visibleIndex2 = ind;
  }
}

//4

//para Mostrar o NgIF é necessario um Item
items3 = [
  {
    name: '?',
    items: [
      '.'
       ]
  }
];
//e uma variavel visible indez
visibleIndex3 = -1;
//e a funcao 
showSubItem3(ind) {
  if (this.visibleIndex3 === ind) {
    this.visibleIndex3;
  } else {
    this.visibleIndex3 = ind;
  }
}

//5

//para Mostrar o NgIF é necessario um Item
items4 = [
  {
    name: '?',
    items: [
      '.'
       ]
  }
];
//e uma variavel visible indez
visibleIndex4 = -1;
//e a funcao 
showSubItem4(ind) {
  if (this.visibleIndex4 === ind) {
    this.visibleIndex4;
  } else {
    this.visibleIndex4 = ind;
  }
}

//6

//para Mostrar o NgIF é necessario um Item
items5 = [
  {
    name: '?',
    items: [
      '.'
       ]
  }
];
//e uma variavel visible indez
visibleIndex5 = -1;
//e a funcao 
showSubItem5(ind) {
  if (this.visibleIndex5 === ind) {
    this.visibleIndex5;
  } else {
    this.visibleIndex5 = ind;
  }
}

//7
//para Mostrar o NgIF é necessario um Item
items6 = [
  {
    name: '?',
    items: [
      '.'
       ]
  }
];
//e uma variavel visible indez
visibleIndex6 = -1;
//e a funcao 
showSubItem6(ind) {
  if (this.visibleIndex6 === ind) {
    this.visibleIndex6;
  } else {
    this.visibleIndex6 = ind;
  }
}



















  
async presentModal() {
    const modal = await this.modalController.create({
      component: ModalSintomasPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async presentModal1() {
    const modal = await this.modalController.create({
      component: ModalRiscoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
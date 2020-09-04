import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSintomasPage } from './modal-sintomas.page';

describe('ModalSintomasPage', () => {
  let component: ModalSintomasPage;
  let fixture: ComponentFixture<ModalSintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSintomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

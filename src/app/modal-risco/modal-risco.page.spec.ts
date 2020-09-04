import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalRiscoPage } from './modal-risco.page';

describe('ModalRiscoPage', () => {
  let component: ModalRiscoPage;
  let fixture: ComponentFixture<ModalRiscoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRiscoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRiscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

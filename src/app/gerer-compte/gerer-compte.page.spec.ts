import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GererComptePage } from './gerer-compte.page';

describe('GererComptePage', () => {
  let component: GererComptePage;
  let fixture: ComponentFixture<GererComptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererComptePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GererComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

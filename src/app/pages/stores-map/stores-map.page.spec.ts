import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoresMapPage } from './stores-map.page';

describe('StoresMapPage', () => {
  let component: StoresMapPage;
  let fixture: ComponentFixture<StoresMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoresMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

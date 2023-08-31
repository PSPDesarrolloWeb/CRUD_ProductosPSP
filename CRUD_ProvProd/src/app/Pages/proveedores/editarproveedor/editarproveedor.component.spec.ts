import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarproveedorComponent } from './editarproveedor.component';

describe('EditarproveedorComponent', () => {
  let component: EditarproveedorComponent;
  let fixture: ComponentFixture<EditarproveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarproveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

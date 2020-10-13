import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTopicosComponent } from './editar-topicos.component';

describe('EditarTopicosComponent', () => {
  let component: EditarTopicosComponent;
  let fixture: ComponentFixture<EditarTopicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTopicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTopicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

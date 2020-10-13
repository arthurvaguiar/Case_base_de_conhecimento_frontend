import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTopicosComponent } from './consultar-topicos.component';

describe('ConsultarTopicosComponent', () => {
  let component: ConsultarTopicosComponent;
  let fixture: ComponentFixture<ConsultarTopicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarTopicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarTopicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

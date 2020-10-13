import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirTopicosComponent } from './inserir-topicos.component';

describe('InserirTopicosComponent', () => {
  let component: InserirTopicosComponent;
  let fixture: ComponentFixture<InserirTopicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirTopicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirTopicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

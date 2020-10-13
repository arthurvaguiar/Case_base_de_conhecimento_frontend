import { ComponentFixture, TestBed } from '@angular/core/testing';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { ListaTopicosComponent } from './lista-topicos.component';

describe('ListaTopicosComponent', () => {
  let component: ListaTopicosComponent;
  let fixture: ComponentFixture<ListaTopicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTopicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTopicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

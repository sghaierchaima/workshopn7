import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriesComponentComponent } from './list-categories-component.component';

describe('ListCategoriesComponentComponent', () => {
  let component: ListCategoriesComponentComponent;
  let fixture: ComponentFixture<ListCategoriesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCategoriesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategoriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

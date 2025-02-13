import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryQPComponent } from './products-category-qp.component';

describe('ProductsCategoryQPComponent', () => {
  let component: ProductsCategoryQPComponent;
  let fixture: ComponentFixture<ProductsCategoryQPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsCategoryQPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCategoryQPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

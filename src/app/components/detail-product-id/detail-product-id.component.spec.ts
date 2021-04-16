import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductIDComponent } from './detail-product-id.component';

describe('DetailProductIDComponent', () => {
  let component: DetailProductIDComponent;
  let fixture: ComponentFixture<DetailProductIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProductIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProductIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

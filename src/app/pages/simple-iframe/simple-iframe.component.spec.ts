import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleIframeComponent } from './simple-iframe.component';

describe('SimpleIframeComponent', () => {
  let component: SimpleIframeComponent;
  let fixture: ComponentFixture<SimpleIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleIframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

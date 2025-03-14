import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromsdemoComponent } from './fromsdemo.component';

describe('FromsdemoComponent', () => {
  let component: FromsdemoComponent;
  let fixture: ComponentFixture<FromsdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromsdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

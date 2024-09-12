import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvlComponent } from './tvl.component';

describe('TvlComponent', () => {
  let component: TvlComponent;
  let fixture: ComponentFixture<TvlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

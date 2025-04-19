import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTrackingComponent } from './message-tracking.component';

describe('MessageTrackingComponent', () => {
  let component: MessageTrackingComponent;
  let fixture: ComponentFixture<MessageTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageTrackingComponent]
    });
    fixture = TestBed.createComponent(MessageTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMsgComponent } from './save-msg.component';

describe('SaveMsgComponent', () => {
  let component: SaveMsgComponent;
  let fixture: ComponentFixture<SaveMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

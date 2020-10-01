import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter21Page } from './chapter21.page';

describe('Chapter21Page', () => {
  let component: Chapter21Page;
  let fixture: ComponentFixture<Chapter21Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter21Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

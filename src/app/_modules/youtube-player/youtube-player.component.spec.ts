import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayerComponent } from './youtube-player.component';
import { toBase64String } from '@angular/compiler/src/output/source_map';

describe('YoutubeLiveComponent', () => {
  let component: YoutubePlayerComponent;
  let fixture: ComponentFixture<YoutubePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('init', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageVideos } from './home-page-videos.component';

describe('VideoGalleryComponent', () => {
  let component: HomePageVideos;
  let fixture: ComponentFixture<HomePageVideos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageVideos ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageVideos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultVideosComponent } from './search-result-videos.component';

describe('SearchResultVideosComponent', () => {
  let component: SearchResultVideosComponent;
  let fixture: ComponentFixture<SearchResultVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

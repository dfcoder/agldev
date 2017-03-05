import { mockPeopleService } from './entities/mock.people.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleComponent } from './people.component';
import { PeopleService } from './people.service';
import { KeysPipe } from './../pipes/keys.pipe';
/* tslint:disable:no-unused-variable */
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IPeople } from './entities/people';
import { Observable } from 'rxjs/Rx';

describe('People component', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       providers: [{ provide: PeopleService, useClass: mockPeopleService }],
      declarations: [KeysPipe, PeopleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the people component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the people component', () => {
    expect(component.catsByOwnerGender).toBeTruthy();
  });
});





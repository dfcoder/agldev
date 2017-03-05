import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people/people.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { KeysPipe } from './pipes/keys.pipe';
import { HelperComponent } from './helper/helper.component';

@NgModule({
  declarations: [
   PeopleComponent, AppComponent, , KeysPipe, HelperComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { DropexpandComponent } from './components/shared/dropexpand/dropexpand.component';
import { WidepanelComponent } from './components/shared/widepanel/widepanel.component';
import { FloatingpanelComponent } from './components/shared/floatingpanel/floatingpanel.component';
import { CodeComponent } from './components/code/code.component';
import { AudioplayerComponent } from './components/shared/audioplayer/audioplayer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FloatingpanelliteComponent } from './components/shared/floatingpanellite/floatingpanellite.component';
import { HangarComponent } from './components/shared/hangar/hangar.component';
import { ScrollsComponent } from './components/scrolls/scrolls.component';
import { SidebarComponent } from './components/scrolls/sidebar/sidebar.component';
import { SidebarGroupComponent } from './components/scrolls/sidebarGroup/sidebarGroup.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    DropexpandComponent,
    WidepanelComponent,
    FloatingpanelComponent,
    CodeComponent,
    AudioplayerComponent,
    AboutComponent,
    ContactComponent,
    FloatingpanelliteComponent,
    HangarComponent,
    ScrollsComponent,
    SidebarComponent,
    SidebarGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

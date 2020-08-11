import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { DropexpandComponent } from './ui/dropexpand/dropexpand.component';
import { WidepanelComponent } from './ui/widepanel/widepanel.component';
import { FloatingpanelComponent } from './ui/floatingpanel/floatingpanel.component';
import { CodeComponent } from './code/code.component';
import { VoiceComponent } from './voice/voice.component';
import { AudioplayerComponent } from './ui/audioplayer/audioplayer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FloatingpanelliteComponent } from './ui/floatingpanellite/floatingpanellite.component';
import { HangarComponent } from './ui/hangar/hangar.component';
import { ScrollsComponent } from './scrolls/scrolls.component';
import { SidebarComponent } from './scrolls/sidebar/sidebar.component';
import { SidebarGroupComponent } from './scrolls/sidebarGroup/sidebarGroup.component';
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
    VoiceComponent,
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

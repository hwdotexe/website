import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/pages/notfound/notfound.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DropExpandComponent } from './components/ui/dropexpand/dropexpand.component';
import { CodeComponent } from './components/pages/code/code.component';
import { AudioplayerComponent } from './components/ui/audioplayer/audioplayer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HangarComponent } from './components/ui/hangar/hangar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { LinkComponent } from './components/ui/link/link.component';
import { PageHeaderComponent } from './components/ui/page-header/page-header.component';
import { BubbleComponent } from './components/ui/bubble/bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    DropExpandComponent,
    CodeComponent,
    AudioplayerComponent,
    AboutComponent,
    ContactComponent,
    HangarComponent,
    LinkComponent,
    PageHeaderComponent,
    BubbleComponent
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

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContactDetail } from './ContactDetail';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ContactDetailEnum = ContactDetail;
  showingDetail: ContactDetail;

  constructor(private pTitle: Title) {
    pTitle.setTitle("Haden Watne | Contact");
  }

  ngOnInit() {

  }

  updateBanner(detail: ContactDetail){
    this.showingDetail = detail;
  }
}

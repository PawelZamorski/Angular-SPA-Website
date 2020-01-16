import { Component, OnInit } from '@angular/core';
import { faFacebook, faGoogle, faTwitter, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faBehance = faBehance;

  constructor() { }

  ngOnInit() {
  }

}

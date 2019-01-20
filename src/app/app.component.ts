import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'George Yang';

  imageSliderArray = [
    { image: 'https://mdbootstrap.com/img/Photos/Others/images/77.jpg', alt: '', text: '' },
    { image: 'https://mdbootstrap.com/img/Photos/Others/images/47.jpg', alt: '', text: '' },
    { image: 'https://mdbootstrap.com/img/Photos/Others/images/79.jpg', alt: '', text: '' },
  ];
}

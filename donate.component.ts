import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html'
})
export class DonateComponent {
  donorName = '';
  amount = 0;

  donate() {
    axios.post('http://localhost:5000/api/donations', {
      donorName: this.donorName,
      amount: this.amount,
      date: new Date()
    }).then(() => alert('Thank you for your donation!'));
  }
}

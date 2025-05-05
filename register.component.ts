import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name = '';
  email = '';
  skills = '';

  register() {
    axios.post('http://localhost:5000/api/volunteers', {
      name: this.name,
      email: this.email,
      skills: this.skills.split(',')
    }).then(() => alert('Registered'));
  }
}

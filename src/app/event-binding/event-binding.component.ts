import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  message = 'Este es el mensaje original.';

  changeMessage() {
    this.message = 'Mensaje nuevo respondiendo al click.';
  }
}

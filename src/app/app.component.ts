import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text = '';
  mousePosition = '';
  enterList = [];
  scale = 1;
  focus = '';

  onClickButton() {
    alert('hahahaha :-)');
  }

  onMouseMove(clientX: number, clientY: number) {
    this.mousePosition = clientX + ' - ' + clientY;
  }

  onEnter(value: string) {
    this.enterList.push(value);
  }

  zoom(deltaY: number) {
    const direction = deltaY < 0 ? -1 : 1;
    this.scale += 0.1 * direction;
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dans-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export default class ButtonComponent {

  @Input() text = '';
  @Input() type?: 'button' | 'submit' = 'button';
  @Input() color?: 'primary' | 'secondary' = 'primary';
  @Input() size?: 'small' | 'medium' | 'large' = 'medium';
  @Input() isDisabled? = false;

  public get ngClass(): string[] {
    const colorModifier = `dans-button--${this.color}`;
    const sizeModifier = `dans-button--${this.size}`;
    return [colorModifier, sizeModifier];
  }
}

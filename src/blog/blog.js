export class Blog {
  constructor() {
    this.horizontal = true;
  }

  activate(model) {
    this.data = model;
  }

  attached() {
    this.detectWidthChange();
  }

  detectWidthChange() {
    if (window.screen.width < 700) {
      this.horizontal = false;
    }
  }
}

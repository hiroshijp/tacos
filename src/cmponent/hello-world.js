export class HelloWorld extends HTMLElement {
  
    // connect component
    connectedCallback() {
      this.textContent = 'Hello Web Component';
    }
    
}

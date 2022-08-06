export class ReelModule extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
				<div></div>
      	<button>Hold</button>
				`
    }
}
if ('customElements' in window) {
    customElements.define('reel-element', ReelModule)
}

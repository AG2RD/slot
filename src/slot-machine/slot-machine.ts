export class SlotMachine extends HTMLElement{

	private template = `
	<header></header>  
    <section class="reels">
    <div class="info">
      <p class="credits">credits: 1000</p>
      <p class="bet">bet: 1</p>
      <p class="bank">total: 0</p>
      <p class="win">win: 0</p>
    </div>
    <h3>??? Winning style title ???</h3>
      <ul>
        <li class="visual-reel">
          <div></div>
          <button>Hold</button>
        </li>
        <li class="visual-reel">
          <div></div>
          <button>Hold</button>
        </li>
        <li class="visual-reel bonus-reel">
          <div></div>
          <button>Hold</button>
        </li>
      </ul>
      <button class="btn collect-btn">Collect</button>
      <button class="btn bet-btn">Bet</button>
      <button class="btn play">Play</button>
      <button class="btn autoplay">Auto</button>
    </section>`

	constructor() {
		super();
		this.innerHTML = this.template;
	}

		/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
		console.log('connected!', this);
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
		console.log('disconnected', this);
	}
}

if ('customElements' in window) {
	customElements.define('slot-machine', SlotMachine);
}
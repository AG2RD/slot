import '../reel/reel.module';
import './slot-machine.scss';

export class SlotMachine extends HTMLElement {
    private template = `
    <header></header>  
    <section class="reels">
      <ul class="info">
        <li class="credits">credits: 1000</li>
        <li class="bet">bet: 1</li>
        <li class="bank">total: 0</li>
        <li class="win">win: 0</li>
      </ul>
      <h3>??? Winning style title ???</h3>
      <ul class="visual-reel-list">
        <li class="visual-reel">
          <div class="loop"><reel-element></reel-element></div>
        </li>
        <li class="visual-reel">
          <div><reel-element></reel-element></div>  
        </li>
        <li class="visual-reel bonus-reel">
          <div><reel-element></reel-element></div>
        </li>
        <li class="hold"><button>Hold</button></li>
        <li class="hold"><button>Hold</button></li>
        <li class="hold"><button>Hold</button></li>
      </ul>
      <button class="btn collect-btn">Collect</button>
      <button class="btn bet-btn">Bet</button>
      <button class="btn play">Play</button>
      <button class="btn autoplay">Auto</button>
    </section>`

    constructor() {
        super()
        this.innerHTML = this.template
    }

    /**
     * Runs each time the element is appended to or moved in the DOM
     */
    connectedCallback() {
        console.log('connected!', this)
    }

    /**
     * Runs when the element is removed from the DOM
     */
    disconnectedCallback() {
        console.log('disconnected', this)
    }
}

if ('customElements' in window) {
    customElements.define('slot-machine', SlotMachine)
}

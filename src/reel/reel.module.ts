import { VisualReel } from './Reel';
import { ReelService } from './reel.service';

export class ReelModule extends HTMLElement {
    private visualReel: VisualReel
    private reelService: ReelService
    constructor() {
        super()
        this.reelService = new ReelService()
        this.visualReel = this.initReel()
        this.innerHTML = `
		<div>
        <p>test</p>
            <ul>
                ${this.visualReel.map(
                    (elem) =>
                        `<li><span style='font-size:100px;'>${elem.picture}</span></li>`
                )}
            </ul>
        </div>
      	<button>Hold</button>`
    }

    initReel(): VisualReel {
        return this.reelService.getVisualReelByReelId()
    }
}
if ('customElements' in window) {
    customElements.define('reel-element', ReelModule)
}

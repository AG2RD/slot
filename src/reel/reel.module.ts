import './reel.scss';

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
		<div class="reel-container">
            <ul class="reel-list">
                ${this.visualReel.reduce(
                    (acc, elem) =>
                        (acc += `<li class="reel-item">
                            <p class="reel-item-content">
                                <span class="reel-icon-content">${elem.picture}</span>
                            </p>
                        </li>`),
                    ''
                )}
            </ul>
        </div>
      	`
    }

    initReel(): VisualReel {
        return this.reelService.getVisualReelByReelId()
    }
}
if ('customElements' in window) {
    customElements.define('reel-element', ReelModule)
}

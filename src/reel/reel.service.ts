import { shuffle } from 'lodash';

import { VisualReel } from './Reel';

export class ReelService {
    getVisualReelByReelId(): VisualReel {
        const result = shuffle([
            { picture: '&#127815;', name: 'blueberry' },
            { picture: '&#127818;', name: 'orange' },
            { picture: '&#127819;', name: 'lemon' },
            { picture: '&#127824;', name: 'pear' },
            { picture: '&#127826;', name: 'cherry' },
            { picture: '&#127817;', name: 'aqua-melon' },
            { picture: '&#128081;', name: 'crown' },
            { picture: '&#11088;', name: 'star' },
            { picture: '&#128276;', name: 'bell' },
            { picture: '&#128292;', name: 'bar' },
            { picture: '&#128640;', name: 'rocket' },
        ])
        return [...result.slice(-2), ...result, ...result.slice(0, 2)]
    }
}

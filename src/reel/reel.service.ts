import { VisualReel } from './Reel';

export class ReelService {
    getVisualReelByReelId(): VisualReel {
        return shuffle([
            { picture: '&#127815;', name: 'blueberry' },
            { picture: '&#127818;', name: 'orange' },
            { picture: '&#127819;', name: 'lemon' },
            { picture: '&#127824;', name: 'pear' },
            { picture: '&#127826;', name: 'cherry' },
            { picture: '&#127817;', name: 'aquamelon' },
            { picture: '&#128081;', name: 'crown' },
            { picture: '&#11088;', name: 'star' },
            { picture: '&#128276;', name: 'bell' },
            { picture: '&#128292;', name: 'bar' },
            { picture: '&#128640;', name: 'rocket' },
        ])
    }
}

export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,
        randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }

    return array
}

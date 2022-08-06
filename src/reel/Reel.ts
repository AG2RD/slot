export interface Icon {
    picture: string
    name: string
}

export type VisualReel = Array<Icon>

// TODO: generate new virtual reels at launch of the game ( based on rules )
// export interface VirtualReel {
//     slotMap: Array<{
//         positions: Array<number>
//         icon: Icon
//     }>
// }

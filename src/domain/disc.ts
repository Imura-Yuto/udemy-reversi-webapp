export const disc = {
    Empty: 0,
    Dark: 1,
    Light: 2,
} as const

export type Disc = typeof disc[keyof typeof disc]
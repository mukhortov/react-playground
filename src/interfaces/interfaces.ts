export enum WrapperType {
    track = "track",
    audiobook = "audiobook"
}

type Kind = "tv-episode" | "song"

export interface Results {
    artistName: string
    artworkUrl100: string
    artworkUrl60: string
    collectionArtistId: number
    collectionArtistViewUrl: string
    collectionCensoredName: string
    collectionExplicitness: string
    collectionHdPrice: number
    collectionId: number
    collectionName: string
    collectionPrice: number
    collectionViewUrl: string
    contentAdvisoryRating: string
    country: string
    currency: string
    discCount: number
    discNumber: number
    hasITunesExtras: boolean
    kind: Kind
    longDescription: string
    previewUrl: string
    primaryGenreName: string
    releaseDate: string
    shortDescrption?: string
    trackCensoredName: string
    trackCount: number
    trackExplicitness: string
    trackHdPrice: number
    trackHdRentalPrice: number
    trackId: number
    trackName: string
    trackNumber: number
    trackPrice: number
    trackRentalPrice: number
    trackTimeMillis: number
    trackViewUrl: string
    wrapperType: WrapperType
}
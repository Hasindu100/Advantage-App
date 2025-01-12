export interface Podcast {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    onOpenVideoPopup: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

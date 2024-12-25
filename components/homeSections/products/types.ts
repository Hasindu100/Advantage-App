export interface ImageConfig {
    width: number;
    height: number;
    className: string;
    priority: boolean;
}

export interface Product {
    title: string;
    src: string;
    alt: string;
    description: string;
    imageConfig: ImageConfig;
}
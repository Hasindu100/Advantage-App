/**
 * Next.js Image component configuration for product displays.
 */
export interface ImageConfig {
    width: number;
    height: number;
    className: string;
    priority: boolean;
}

/**
 * Product data structure for carousel and product card components.
 */
export interface Product {
    title: string;
    src: string;
    alt: string;
    description: string;
}
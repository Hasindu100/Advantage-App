import { ImageConfig } from "./types";

/**
 * Default image configuration used as base settings for products
 * @width: 160 - Standard product image width
 * @height: 160 - Maintains 1:1 aspect ratio
 */
export const defaultImageConfig: ImageConfig = {
    width: 160,
    height: 160,
    className: "w-full",
    priority: true
};

/**
 * Product-specific image configurations
 * Extends default settings with custom dimensions and styles
 */
export const imageConfigs: Record<string, ImageConfig> = {
    // Uses default config for standard product display
    warehouse: defaultImageConfig,
    
    // Customized for chat interface with circular display
    chatbot: {
        ...defaultImageConfig,
        width: 96,
        height: 96,
        className: "w-full rounded-full"
    },
    
    // Computer vision platform using default settings
    cvap: defaultImageConfig,
    
    // Modified width for planogram display requirements
    planogram: {
        ...defaultImageConfig,
        className: "w-32"
    }
};
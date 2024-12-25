import { ImageConfig } from "./types";

export const defaultImageConfig: ImageConfig = {
    width: 160,
    height: 160,
    className: "w-full",
    priority: true
};

export const imageConfigs: Record<string, ImageConfig> = {
    warehouse: defaultImageConfig,
    chatbot: {
        ...defaultImageConfig,
        width: 96,
        height: 96,
        className: "w-full rounded-full"
    },
    cvap: defaultImageConfig,
    planogram: {
        ...defaultImageConfig,
        className: "w-32"
    }
};

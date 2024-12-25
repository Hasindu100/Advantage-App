import { imageConfigs } from '../config'
import { Product } from '../types';

export const products: Product[] = [
    {
        title: "Warehouse Management",
        src: "/images/products/acetrac.png",
        alt: "AceTrak Logo - Warehouse Management Solution",
        description: "Offering a broad set of capabilities under one roof makes us a versatile partner to meet all your digital ambitions.",
        imageConfig: imageConfigs.warehouse
    },
    {
        title: "Chatbot",
        src: "/images/products/sam.png",
        alt: "AI Chatbot Solution for Customer Engagement",
        description: "Our chatbot solution is designed to enhance customer engagement and support.",
        imageConfig: imageConfigs.chatbot
    },
    {
        title: "CVAP",
        src: "/images/products/cvap.png",
        alt: "CVAP - Advanced Vision Analytics Platform",
        description: "CVAP uses AI to analyze visual data, enabling real-time object detection.",
        imageConfig: imageConfigs.cvap
    },
    {
        title: "Planogram",
        src: "/images/products/shelf.png",
        alt: "Planogram Solution for Retail Management",
        description: "Planograms empower retailers to create a cohesive shopping experience.",
        imageConfig: imageConfigs.planogram
    }
];

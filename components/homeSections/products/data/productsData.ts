
import { Product } from '../types';

/**
 * Main product catalog
 * Contains all product information for the application
 * @type {Product[]}
 */
export const products: Product[] = [
    {
        title: "Next Generation Smart Contract Digital Notarised Contracts (DNC'S)",
        src: "/images/products/acetrac.png",
        alt: "Next Generation Smart Contract Digital Notarised Contracts (DNC'S)",
        description: "The NuGenesis innovation to facilitate mass adoption by the mainstream economy is to go beyond existing limitations of smart contract protocols.",
        
    },
    {
        title: "NFT City.Exchange - Interactive NFT™ Platform",
        src: "/images/products/sam.png",
        alt: "NFT City.Exchange - Interactive NFT™ Platform",
        description:"NuGenesis Layer 1 NFT Platform is totally gasless. It is designed to encourage innovation. To encourage the shift from the rather static NFTs that are currently in existence, to more interactive NFTs. NFTs that transcend art into gaming",
        
    },
    {
        title: "The LedgerX Exchange Blockchain",
        src: "/images/products/cvap.png",
        alt: "The LedgerX Exchange Blockchain",
        description: "Ledger X is fully fledged (fiat/crypto) exchange where prices are determined by the brutality of the open market. It was designed to be an important part of the NuGenesis ecosystem to ensure capital is to be allocated by the market rather than bond curves and technocratic formulae.",
        
    },
    {
        title: "The NuGenesis flagship: NU Coin",
        src: "/images/products/shelf.png",
        alt: "The NuGenesis flagship: NU Coin",
        description: " NuGenesis’ flagship blockchain, NU Coin, is a fully operational and is already at zero-carbon emission. It is way past the POW vs POS debate!",
        
    },
    {
        title: "TROY Gold-backed token denominated in major currencies",
        src: "/images/products/troy.jpg",
        alt: "TROY Gold-backed token denominated in major currencies",
        description: " A troy is a token to represent the fiat currency representation in physical gold. For example Troy USD (TUSD) Troy Euro (TEURO) Troy AUD (TAUD) etc. It functions similar to a stable coin and a remittance tool.",
        
    }
] as const;  // Make array immutable

// Export product IDs for type-safe access
export type ProductId = typeof products[number]['title'];

// Utility function to get product by title
export const getProductByTitle = (title: ProductId): Product | undefined => 
    products.find(product => product.title === title);
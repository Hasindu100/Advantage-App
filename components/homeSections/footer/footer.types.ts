/**
 * Type definition for available social media icons used in the footer
 * These correspond to FontAwesome brand icons
 */
export type SocialIconType = 
  | 'faFacebookF' 
  | 'faLinkedinIn' 
  | 'faYoutube' 
  | 'faInstagram' 
  | 'faXTwitter';

/**
 * Props interface for footer link components
 * @property href - The URL the link points to
 * @property children - The content to be rendered within the link
 */
export interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

/**
 * Props interface for social media link components
 * @property href - The URL the social media link points to
 * @property platform - The name of the social media platform
 * @property icon - The FontAwesome icon identifier to use
 */
export interface SocialLinkProps {
    href: string;
    platform: string;
    icon: SocialIconType;
}

/**
 * Props interface for footer section components
 * @property title - The heading text for the section
 * @property links - Array of link objects containing href and text
 */
export interface FooterSectionProps {
    title: string;
    links: Array<{
        href: string;
        text: string;
    }>;
}

/**
 * Interface defining the structure of footer data
 * @property pages - Array of internal page links
 * @property services - Array of service page links
 * @property links - Array of additional links
 * @property socialLinks - Array of social media link objects
 * @property locations - Array of company location strings
 */
export interface FooterData {
    pages: Array<{
        href: string;
        text: string;
    }>;
    services: Array<{
        href: string;
        text: string;
    }>;
    links: Array<{
        href: string;
        text: string;
    }>;
    socialLinks: Array<{
        href: string;
        platform: string;
        icon: SocialIconType;
    }>;
    locations: string[];
}
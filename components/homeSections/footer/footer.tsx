import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import footerData from './data/footerData.json';
import { FooterLinkProps, SocialLinkProps, FooterSectionProps, FooterData } from './footer.types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faLinkedinIn,
    faYoutube,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';

/**
 * Mapping of social media icon identifiers to their corresponding FontAwesome icons
 */
const socialIconMap = {
    faFacebookF,
    faLinkedinIn,
    faYoutube,
    faInstagram,
    faTwitter
};

/**
 * FooterLink Component
 * Renders a single footer link with a square icon prefix
 * Uses Tailwind for styling
 */
const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
    <li>
        <Link
            href={href}
            className="text-gray-200 hover:text-red-500 font-medium text-[15px] tracking-wider inline-flex items-center transform transition-transform duration-300 hover:translate-x-2"
        >
            <FontAwesomeIcon icon={faSquare} className="text-red-500 mr-2 text-xs" />
            {children}
        </Link>
    </li>
);

/**
 * SocialLink Component
 * Renders a social media icon link with accessibility support
 * Uses Tailwind for styling and FontAwesome for icons
 */
const SocialLink: React.FC<SocialLinkProps> = ({ href, platform, icon }) => (
    <Link
        href={href}
        className="text-gray-300 hover:text-red-500 transform transition-transform duration-300 hover:-translate-y-1 inline-block"
    >
        <span className="sr-only">{platform}</span>
        <FontAwesomeIcon icon={socialIconMap[icon]} className="h-5 w-5" />
    </Link>
);

/**
 * FooterSection Component
 * Renders a section of the footer with a title and list of links
 * Uses CSS Grid for responsive layout
 * Features:
 * - Underlined first three letters of the title
 * - Responsive grid layout
 * - Customizable link list
 */
const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
    const firstThreeLetters = title.slice(0, 3);
    const remainingLetters = title.slice(3);

    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-[25px] font-medium mb-6 uppercase tracking-custom-2">
                <span className="border-b-[5px] border-gray-700 pb-2">{firstThreeLetters}</span>
                {remainingLetters}
            </h3>
            <ul className="space-y-4">
                {links.map(({ href, text }) => (
                    <FooterLink key={href} href={href}>{text}</FooterLink>
                ))}
            </ul>
        </div>
    );
};

/**
 * Footer Component
 * Main footer component that renders the complete footer structure
 * Features:
 * - Responsive layout using CSS Grid
 * - Company logo and description
 * - Navigation sections for pages, services, and additional links
 * - Social media links
 * - Copyright notice and location information
 */
const Footer: React.FC = () => {
    const {
        companyDescription,
        pages,
        services,
        links,
        socialLinks,
        locations
    } = footerData as FooterData;

    return (
        <footer className="bg-custom-gray-3 text-white py-12 w-full">
            {/* Main footer container with responsive padding */}
            <div className="container mx-auto px-4 md:px-8 lg:px-28">
                {/* Grid layout for footer sections */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
                    {/* Company information section */}
                    <div className="col-span-1 md:col-span-5 lg:col-span-5 flex flex-col items-center md:items-start">
                        <Image
                            src="/images/logo/logow.png"
                            alt="Zone24x7"
                            width={320}
                            height={56}
                            className="md:w-auto w-64"
                        />
                        <p className="text-gray-300 text-base mt-8 leading-relaxed text-center md:text-left">
                            {companyDescription}
                        </p>
                    </div>

                    {/* Navigation sections */}
                    <FooterSection title="Pages" links={pages} />
                    <div className="col-span-1 md:col-span-3 lg:col-span-3">
                        <FooterSection title="Services" links={services} />
                    </div>
                    <FooterSection title="Links" links={links} />
                </div>

                {/* Footer bottom section with social links and copyright */}
                <div className="border-t border-gray-700 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Social media links */}
                        <div className="flex space-x-8">
                            {socialLinks.map((link) => (
                                <SocialLink key={link.href} {...link} />
                            ))}
                        </div>
                        {/* Copyright and locations */}
                        <div className="text-gray-300 text-sm text-center md:text-right">
                            <div className="mb-2">
                                © 2024 Zone24x7 Inc -
                                <Link href="/privacy" className="hover:text-red-500 transition-colors duration-300">Privacy</Link>
                                <span className="mx-2">|</span>
                                <Link href="/terms" className="hover:text-red-500 transition-colors duration-300">Terms of Use</Link>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-0">
                                {locations.map((location, index) => (
                                    <React.Fragment key={location}>
                                        <span>{location}</span>
                                        {index < locations.length - 1 && <span className="mx-2">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
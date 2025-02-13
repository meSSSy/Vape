import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { vapeBig1, vapeBig2, vapeBig3, customer1, customer2, vape4, vape5, vape6, vape7, vape8, thumbnail1, thumbnail2, thumbnail3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnail1,
        vapeBig: vapeBig1,
    },
    {
        thumbnail: thumbnail2,
        vapeBig: vapeBig2,
    },
    {
        thumbnail: thumbnail3,
        vapeBig: vapeBig3,
    },
];

export const statistics = [
    { value: '100+', label: 'Products' },
    { value: '10k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: vape4,
        name: "Ksnite 3500",
        price: "£20.00",
    },
    {
        imgURL: vape5,
        name: "Revol 2600",
        price: "£12.00",
    },
    {
        imgURL: vape6,
        name: "BluBar",
        price: "£5.00",
    },
    {
        imgURL: vape7,
        name: "Disposable",
        price: "£6.00",
    },
    {
        imgURL: vape8,
        name: "Geek Bar",
        price: "£10.00",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Ksnite 3500", link: "/" },
            { name: "Revol 2600", link: "/" },
            { name: "BluBar", link: "/" },
            { name: "Disposables", link: "/" },
            { name: "Geek Bar", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@vapeworld.com", link: "mailto:chrisparry07@live.co.uk" },
            { name: "+0123456789", link: "tel:+0123456789" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
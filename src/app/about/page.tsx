import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: 'About Me',
        template: '%s | HealthCare Biodiversity'
    },
    description: 'This is the aout page',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript', 'mascreation.tech', 'Arshad Siddiqui'],
    authors: [
        { name: 'Arshad Siddiqui', url: 'https://mascreation.tech' }
    ]

    // generator: 'Next.js',
    // applicationName: 'Next.js',
    // keywords: ['Next.js', 'React', 'JavaScript'],
    // authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
    // creator: 'Jiachi Liu',
    // publisher: 'Sebastian Markbåge',
};

export default function About() {
    return (
        <h1 className=" text-red-500" >About me</h1>
    );
}
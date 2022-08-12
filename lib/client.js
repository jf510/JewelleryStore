import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'p2vfq1um',
    dataset: 'production',
    apiVersion: '2022-07-28',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SECURITY_TOKEN  
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
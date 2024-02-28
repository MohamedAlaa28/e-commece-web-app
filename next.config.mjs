/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    i18n: {
        locales: ['en-US', 'fr', 'ar'],
        defaultLocale: 'en-US',
        domains: [
            {
                domain: 'example.com',
                defaultLocale: 'en-US',
            },
            {
                domain: 'example.ar',
                defaultLocale: 'ar',
            },
            {
                domain: 'example.fr',
                defaultLocale: 'fr',
                http: true,
            },
        ],
    },
};

export default nextConfig;

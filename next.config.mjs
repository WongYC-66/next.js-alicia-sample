/** @type {import('next').NextConfig} */
const nextConfig = {

    // --- npm run build : to generate out folder of static files
    output: 'export', // export as static sites html, disable when use dynamic (web hosting)

    images: {
        domains: [
            'images.unsplash.com',
            'hydeparkwinterwonderland.com',
            'wembleypark.com',
        ],
        loader: 'akamai',
        path: "",
    },
    
    assetPrefix: "./"
};

export default nextConfig;

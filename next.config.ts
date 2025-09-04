import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Suppress handlebars warnings
    config.ignoreWarnings = [
      { module: /node_modules\/handlebars/ },
      { message: /require\.extensions is not supported by webpack/ },
    ];
    
    return config;
  },
};

export default nextConfig;

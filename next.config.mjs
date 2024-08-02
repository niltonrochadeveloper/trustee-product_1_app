/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "product_1_app",
        remotes: {
          core: `core@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./products": "./src/components/products/index.tsx",
          "./category": "./src/pages/auth/category/index.tsx",
          "./books": "./src/pages/auth/books",
        },
        extraOptions: {
          debug: false,
          exposePages: false,
        },
        shared: [
          {
            react: {
              singleton: true,
              requiredVersion: false,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: false,
            },
            redux: {
              singleton: true,
              requiredVersion: false,
            },
            "react-redux": {
              singleton: true,
              requiredVersion: false,
            },
            "redux-persist": {
              singleton: true,
              requiredVersion: false,
            },
            "@reduxjs/toolkit": {
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );

    return config;
  },
};

export default nextConfig;

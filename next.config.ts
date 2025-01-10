import type { NextConfig } from "next";

// in case of 404 response, redirect to the home page
const appNextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/404",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default appNextConfig;
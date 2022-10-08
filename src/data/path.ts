const dev = process.env.NODE_ENV === 'development';

export const asset_path = dev ? "src/assets" : ".";
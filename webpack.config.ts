import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths } from './config/build/types/types';

interface EnvVariables {
  mode: BuildMode;
  port: number;
  analyzer?: boolean;
  publicPath?: string;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
    favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    publicPath: env.publicPath || '/',
    public: path.resolve(__dirname, 'public'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
  });

  return config;
};

import type { Configuration as DevServerConfiguraion } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguraion {
  return {
    port: options.port ?? 3000,
    open: true,
    // если раздавать статику через nginx то надо делать проксирование на index.html
    // то есть это работает только на devServer
    historyApiFallback: true,
  };
}

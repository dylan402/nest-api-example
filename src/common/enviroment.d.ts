declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'production' | 'development' | 'local';
    readonly HTTP_PORT: number;
  }
}

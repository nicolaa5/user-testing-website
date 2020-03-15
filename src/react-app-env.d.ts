/// <reference types="react-scripts" />
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />


declare namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly PUBLIC_URL: string;
    }
  }  

declare module '*.mp4' {
    const src: string;
    export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
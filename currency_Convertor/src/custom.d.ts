// src/custom.d.ts or types/custom.d.ts

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

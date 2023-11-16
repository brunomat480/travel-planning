import { SvgXml } from 'react-native-svg';

export function Edit() {
  const markup = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="30" height="30" fill="url(#pattern0)"/>
  <defs>
  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
  <use xlink:href="#image0_6_466" transform="scale(0.00195312)"/>
  </pattern>
  <image id="image0_6_466" width="512" height="512" xlink:href="data:image/png;base64,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"/>
  </defs>
  </svg>
  `;
  return <SvgXml xml={markup} />;
}
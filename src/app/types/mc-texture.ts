import { hslToRgb } from 'node-vibrant/lib/util';
import { Harmony } from 'src/app/types/color-harmonies';

export interface McTexture {
  fileName: string;
  name: string;
  colors: number[][];
}

// Returns the best color for this texture
// Calculates this based on the most "saturated" color
export function getPrimaryColor(texture: McTexture) {
  let best = 0;
  let bestIndex = 0;
  for (let i = 0; i < texture.colors.length; i ++) {
    const score = (128 - Math.abs(128 - texture.colors[i][2])) * texture.colors[i][1];
    if (score > best) {
      best = score;
      bestIndex = i;
    }
  }
  return texture.colors[bestIndex];
}

// Returns the best hue for this texture
// Calculates this based on the most "saturated" color
export function getPrimaryHue(texture: McTexture) {
  return getPrimaryColor(texture)[0];
}

// mct1.hue + angle ~= mct2.hue
export function collisionScore(mct1: McTexture, mct2: McTexture, angle = 0) {
  const c1 = getPrimaryColor(mct1);
  const c2 = getPrimaryColor(mct2);
  const hueDiff = Math.abs(c1[0] + angle - c2[0]);
  const satDiff = Math.abs(c1[1] - c2[1]);
  const lightDiff = Math.abs(c1[2] - c2[2]);
  return hueDiff + satDiff + lightDiff;
}

export function getHexFromHsl(hsl: number[]) {
  const rgb = hslToRgb(hsl[0]/255, hsl[1]/255, hsl[2]/255);
  const r = Math.floor(rgb[0]).toString(16).padStart(2, '0');
  const g = Math.floor(rgb[1]).toString(16).padStart(2, '0');
  const b = Math.floor(rgb[2]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}



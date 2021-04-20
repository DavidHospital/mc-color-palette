import { hslToRgb } from 'node-vibrant/lib/util';
import { Harmony } from 'src/app/types/color-harmonies';

export interface McTexture {
  fileName: string;
  name: string;
  colors: number[][];
}

// Returns the best hue for this texture
// Calculates this based on the most "saturated" color
export function getPrimaryHue(texture: McTexture) {
  let best = 0;
  let bestIndex = 0;
  for (let i = 1; i < texture.colors.length; i ++) {
    const score = (128 - Math.abs(128 - texture.colors[i][2])) * texture.colors[i][1];
    if (score > best) {
      best = score;
      bestIndex = i;
    }
  }
  return texture.colors[bestIndex][0];
}

export function getHexFromHsl(hsl: number[]) {
  const rgb = hslToRgb(hsl[0]/255, hsl[1]/255, hsl[2]/255);
  const r = Math.floor(rgb[0]).toString(16).padStart(2, '0');
  const g = Math.floor(rgb[1]).toString(16).padStart(2, '0');
  const b = Math.floor(rgb[2]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}



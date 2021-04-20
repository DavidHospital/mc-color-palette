import { hslToRgb } from 'node-vibrant/lib/util';
import { Harmony } from 'src/app/types/color-harmonies';

export interface McTexture {
  fileName: string;
  colors: number[][];
}

export function getHexFromHsl(hsl: number[]) {
  const rgb = hslToRgb(hsl[0]/255, hsl[1]/255, hsl[2]/255);
  const r = Math.floor(rgb[0]).toString(16).padStart(2, '0');
  const g = Math.floor(rgb[1]).toString(16).padStart(2, '0');
  const b = Math.floor(rgb[2]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}



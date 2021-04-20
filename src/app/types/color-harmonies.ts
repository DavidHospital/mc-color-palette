export class Harmony {
  
  get angles(): number[] {
    return this._angles;
  }

  get hueAngles(): number[] {
    return this._angles.map(angle => Math.round(angle / 360. * 256));
  }
  
  get name(): string {
    return this._name;
  }

  static readonly MONOCHROMATIC = new Harmony([0], "MONOCHROMATIC");
  static readonly ANALAGOUS = new Harmony([0, -30, 30], "ANALAGOUS");
  static readonly COMPLEMENTARY = new Harmony([0, 180], "COMPLEMENTARY");
  static readonly SPLIT_COMPLEMENTARY = new Harmony([0, 150, 210], "SPLIT_COMPLEMENTARY");
  static readonly TRIADIC = new Harmony([0, 120, 240], "TRIADIC");
  static readonly TETRADIC = new Harmony([0, 90, 180, 270], "TETRADIC");

  private constructor(
      private _angles: number[],
      private _name: string) {
  }
  
}

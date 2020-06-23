export class Harmony {
  
  get angles(): number[] {
    return this._angles;
  }

  get name(): string {
    return this._name;
  }

  static readonly MONOCHROMATIC = new Harmony([0], "MONOCHROMATIC");
  static readonly ANALAGOUS = new Harmony([-30, 30], "ANALAGOUS");
  static readonly COMPLEMENTARY = new Harmony([180], "COMPLEMENTARY");
  static readonly SPLIT_COMPLEMENTARY = new Harmony([150, 210], "SPLIT_COMPLEMENTARY");
  static readonly TRIADIC = new Harmony([120, 240], "TRIADIC");
  static readonly TETRADIC = new Harmony([90, 180, 270], "TETRADIC");

  private constructor(
      private _angles: number[],
      private _name: string) {
  }
  
}
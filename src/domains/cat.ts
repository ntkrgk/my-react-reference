export class Cat {
  id: number; // A unique id for the photo
  url: string; // A url to the raw photo, around 1-4mB
  webpurl: string; // A url to a compressed photo, around 50-100kB
  // x: number; // APIから渡されるけど使わない
  // y: number;

  constructor(init?: Partial<Cat>) {
    Object.assign(this, init);
    this.id = init?.id || 0;
    this.url = init?.url || "";
    this.webpurl = init?.webpurl || "";
  }
}

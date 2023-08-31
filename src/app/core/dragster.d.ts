declare module '@matrx/dragster' {
  export class Dragster {
    constructor(el: HTMLElement | any);
    static getDragster(id: string): Dragster;
    static reset(el: HTMLElement): void;
    reset(): void;
    _destroy(): void;
  }
}

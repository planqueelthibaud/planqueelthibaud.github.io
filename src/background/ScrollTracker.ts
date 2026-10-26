/**
 * Unique écouteur de scroll. Publie sur <html> :
 * --scroll   : défilement en pixels (parallaxe) ;
 * --progress : avancement de 0 à 1 (couleur du fond).
 */
export class ScrollTracker {
  private readonly root = document.documentElement;

  start(): void {
    const update = (): void => this.update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    this.update();
  }

  private update(): void {
    const y = window.scrollY;
    const max = this.root.scrollHeight - window.innerHeight;
    this.root.style.setProperty('--scroll', String(y));
    this.root.style.setProperty('--progress', String(max > 0 ? y / max : 0));
  }
}

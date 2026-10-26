/** Contrat des composants : chacun produit un élément DOM via render(). */
export abstract class Component {
  abstract render(): HTMLElement;

  protected el<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    className?: string,
    text?: string,
  ): HTMLElementTagNameMap[K] {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  protected link(label: string, url: string): HTMLAnchorElement {
    const anchor = this.el('a', 'link', label);
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener';
    return anchor;
  }

  protected setVars(node: HTMLElement, vars: Record<string, string | number>): void {
    for (const [name, value] of Object.entries(vars)) {
      node.style.setProperty(`--${name}`, String(value));
    }
  }
}

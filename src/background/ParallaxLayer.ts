/** Plan de parallaxe : pose ses variables CSS, le déplacement est dans .layer (style.css). */
import { Component } from '../components/Component';
import type { LayerConfig } from '../data/layers';

export class ParallaxLayer extends Component {
  constructor(private readonly config: LayerConfig) {
    super();
  }

  render(): HTMLElement {
    const layer = this.el('div', 'layer');
    this.setVars(layer, {
      speed: this.config.speed,
      thickness: this.config.thickness,
      opacity: this.config.opacity,
    });

    for (const ribbon of this.config.ribbons) {
      const node = this.el('div', 'ribbon');
      this.setVars(node, { ...ribbon });
      layer.append(node);
    }
    return layer;
  }
}

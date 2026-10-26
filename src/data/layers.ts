/**
 * Plans de parallaxe du fond.
 * speed : 0 = fixe à l'écran, 1 = défile avec le contenu.
 * top : en pourcentage de la hauteur de page, pour s'adapter à sa longueur.
 */

export interface Ribbon {
  top: string;
  angle: string;
  from: string;
  to: string;
}

export interface LayerConfig {
  speed: number;
  thickness: string;
  opacity: number;
  ribbons: Ribbon[];
}

export const layers: LayerConfig[] = [
  {
    speed: 0.3,
    thickness: '260px',
    opacity: 0.45,
    ribbons: [
      { top: '2%', angle: '-9deg', from: '#8db0ff', to: '#7fd9c4' },
      { top: '18%', angle: '7deg', from: '#7fd9c4', to: '#ffc09a' },
      { top: '34%', angle: '-8deg', from: '#ffc09a', to: '#c3a8f4' },
      { top: '50%', angle: '6deg', from: '#c3a8f4', to: '#8db0ff' },
    ],
  },
  {
    speed: 0.7,
    thickness: '110px',
    opacity: 0.55,
    ribbons: [
      { top: '8%', angle: '12deg', from: '#5e8cff', to: '#4fc9ad' },
      { top: '30%', angle: '-11deg', from: '#4fc9ad', to: '#ff9c66' },
      { top: '52%', angle: '10deg', from: '#ff9c66', to: '#a383ee' },
      { top: '74%', angle: '-12deg', from: '#a383ee', to: '#5e8cff' },
    ],
  },
];

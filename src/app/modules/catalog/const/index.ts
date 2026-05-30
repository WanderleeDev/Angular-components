import { INavList } from 'app/interfaces/IDataCard.interface';

export interface RegistryComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  tailwindPath?: string;
  tailwindFiles?: string[];
  cssPath?: string;
  cssFiles?: string[];
}

export const COMPONENTS_REGISTRY: RegistryComponent[] = [
  {
    id: 'star-rating',
    name: 'Star Rating',
    description: 'An interactive star rating component with full accessibility, focus management, and readonly settings.',
    category: 'others',
    icon: 'star',
    tailwindPath: 'star-rating/tailwind',
    tailwindFiles: ['star-rating.ts', 'star-rating.html'],
    cssPath: 'star-rating/css',
    cssFiles: ['star-rating.ts', 'star-rating.html', 'star-rating.css']
  },
  {
    id: 'date-picker',
    name: 'Native Picker',
    description: 'A customizable native browser date, time, month, and color picker styled with tailwind or vanilla CSS.',
    category: 'others',
    icon: 'calendar_today',
    tailwindPath: 'native-picker/tailwind',
    tailwindFiles: ['native-picker.ts', 'native-picker.html'],
    cssPath: 'native-picker/css',
    cssFiles: ['native-picker.ts', 'native-picker.html', 'native-picker.css']
  }
];

const RAW_COMPONENTS_DATA: Omit<INavList, 'numberComponents'>[] = [
  {
    title: 'navbars',
    icon: 'menu',
    description:
      'Responsive header navigation menus, side navigations, and tab groups for application routing.',
    color: '#38bdf8',
  },
  {
    title: 'cards',
    icon: 'view_agenda',
    description:
      'Flexible content grouping blocks and bento cards with customizable layouts, imagery, and footers.',
    color: '#ec4899',
  },
  {
    title: 'sliders',
    icon: 'tune',
    description:
      'Swipers, carousels, and dual-point slider controls engineered for highly interactive layouts.',
    color: '#10b981',
  },
  {
    title: 'footers',
    icon: 'call_to_action',
    description:
      'Elegant and responsive footer sections configured with quick links, social lists, and badges.',
    color: '#8b5cf6',
  },
  {
    title: 'headers',
    icon: 'view_headline',
    description:
      'Dynamic hero banners, introductory pages, and title grids utilizing rich text formats.',
    color: '#f59e0b',
  },
  {
    title: 'lists',
    icon: 'list',
    description:
      'Highly optimized lists, hierarchical tree structures, and expandable panels for data listing.',
    color: '#06b6d4',
  },
  {
    title: 'services',
    icon: 'build',
    description:
      'Assorted layout utilities, functional background helpers, and service wrapper containers.',
    color: '#ef4444',
  },
  {
    title: 'others',
    icon: 'more_horiz',
    description:
      'Miscellaneous custom UI elements, interactive rating gauges, and sandbox testing components.',
    color: '#64748b',
  },
];

export const COMPONENTS_DATA: INavList[] = RAW_COMPONENTS_DATA.map(item => ({
  ...item,
  numberComponents: COMPONENTS_REGISTRY.filter(c => c.category === item.title).length,
}));


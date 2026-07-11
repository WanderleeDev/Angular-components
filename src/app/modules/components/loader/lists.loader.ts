import { ComponentsLoader, SectionMetadata } from './types';

export const LISTS_LOADERS: ComponentsLoader = {
  'interactive-list':
    import('app/modules/components/lists/interactive-list/interactive-list').then(
      m => m.InteractiveList
    ),
  'description-list':
    import('app/modules/components/lists/description-list/description-list').then(
      m => m.DescriptionList
    ),
  'task-list': import('app/modules/components/lists/task-list/task-list').then(
    m => m.TaskListComp
  ),
  'collapsible-list':
    import('app/modules/components/lists/collapsible-list/collapsible-list').then(
      m => m.CollapsibleListComp
    ),
};

export const LIST_METADATA: SectionMetadata = {
  title: 'lists',
  icon: 'list',
  description:
    'Highly optimized lists, hierarchical tree structures, and expandable panels for data listing.',
  color: '#06b6d4',
  isResponsiveColumn: true,
  filePaths: {
    'interactive-list': {
      css: {
        ts: 'assets/registry/lists/interactive-list/interactive-list.ts',
        html: 'assets/registry/lists/interactive-list/interactive-list.html',
        css: 'assets/registry/lists/interactive-list/interactive-list.css',
      },
    },
    'description-list': {
      css: {
        ts: 'assets/registry/lists/description-list/description-list.ts',
        html: 'assets/registry/lists/description-list/description-list.html',
        css: 'assets/registry/lists/description-list/description-list.css',
      },
    },
    'task-list': {
      css: {
        ts: 'assets/registry/lists/task-list/task-list.ts',
        html: 'assets/registry/lists/task-list/task-list.html',
        css: 'assets/registry/lists/task-list/task-list.css',
      },
    },
    'collapsible-list': {
      css: {
        ts: 'assets/registry/lists/collapsible-list/collapsible-list.ts',
        html: 'assets/registry/lists/collapsible-list/collapsible-list.html',
        css: 'assets/registry/lists/collapsible-list/collapsible-list.css',
      },
    },
  },
};

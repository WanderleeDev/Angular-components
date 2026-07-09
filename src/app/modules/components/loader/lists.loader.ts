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
  'task-list':
    import('app/modules/components/lists/task-list/task-list').then(
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
  isDoubleColumn: true,
};

import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';

export interface TaskItem {
  id: number;
  text: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

@Component({
  selector: 'app-task-list-comp',
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-full',
  },
})
export class TaskListComp {
  readonly tasks = signal<TaskItem[]>([
    { id: 1, text: 'Deploy standalone components to staging', completed: true, priority: 'high' },
    { id: 2, text: 'Audit design tokens accessibility contrast', completed: false, priority: 'high' },
    { id: 3, text: 'Refactor lists module animations', completed: false, priority: 'medium' },
    { id: 4, text: 'Update repository documentation assets', completed: false, priority: 'low' },
  ]);

  readonly completedCount = computed(() => this.tasks().filter(t => t.completed).length);
  readonly totalCount = computed(() => this.tasks().length);

  toggleTask(id: number): void {
    this.tasks.update(list =>
      list.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface ListField {
  key: string;
  val: string;
}

@Component({
  selector: 'app-description-list',
  templateUrl: './description-list.html',
  styleUrl: './description-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class DescriptionList {
  title = input<string>('Developer Profile');
  description = input<string>(
    'System credentials and metadata details for developer telemetry.'
  );
  fields = input<ListField[]>([
    { key: 'Full Name', val: 'Max Wanderlee' },
    { key: 'Role', val: 'Senior Frontend Architect' },
    { key: 'Experience', val: '15+ Years (GDE & MVP)' },
    { key: 'Location', val: 'Rioplatense, AR' },
    { key: 'Status', val: 'Available for Hire' },
  ]);
}

import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  github: string;
  linkedin: string;
}

@Component({
  selector: 'app-team-grid',
  imports: [],
  templateUrl: './team-grid.html',
  styleUrl: './team-grid.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamGrid {
  protected readonly members = signal<TeamMember[]>([
    {
      name: 'Dr. Evelyn Lanning',
      role: 'Chief AI Architect',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
      bio: 'Evelyn holds a PhD in Distributed Systems and leads the Core Engine developments. She specializes in low-latency data scaling and reactive systems architecture.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'David Lightman',
      role: 'Staff Cyber Security',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      bio: 'David is a certified security expert with 10+ years auditing cloud infrastructure. He designs the SSO integrations and encryption layers for Novgorod Tech.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Alan Turing',
      role: 'Staff DevOps Engineer',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
      bio: 'Alan is a pioneer in infrastructure-as-code automation. He configures edge network routing caches and oversees global cluster scaling parameters.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  ]);

  protected readonly selectedMember = signal<TeamMember | null>(null);

  protected openBio(member: TeamMember): void {
    this.selectedMember.set(member);
  }

  protected closeBio(): void {
    this.selectedMember.set(null);
  }
}

import { Component, input, ChangeDetectionStrategy } from '@angular/core';

interface AccordionItem {
  title: string;
  content: string;
  image: string;
}

const DEFAULT_PLACEHOLDER =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNjAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBiMGYxOSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzFlMWI0YiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJzdW4iIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZjQzZjVlIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmI5MjNjIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Im0xIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMxMmU4MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBiMGYxOSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJtMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM0YzFkOTUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwYjBmMTkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JnKSIvPjxjaXJjbGUgY3g9IjQwMCIgY3k9IjI4MCIgcj0iMTIwIiBmaWxsPSJ1cmwoI3N1bikiLz48cGF0aCBkPSJNMCA2MDAgTDI1MCAyODAgTDQ4MCA1MDAgTDY4MCAzMjAgTDgwMCA1MDAgTDgwMCA2MDAgWiIgZmlsbD0idXJsKCNtMSkiIG9wYWNpdHk9IjAuNyIvPjxwYXRoIGQ9Ik0tNTAgNjAwIEwxNTAgMzgwIEwzODAgNjAwIFoiIGZpbGw9InVybCgjbTIpIi8+PHBhdGggZD0iTTMwMCA2MDAgTDU1MCA0MDAgTDg1MCA2MDAgWiIgZmlsbD0idXJsKCNtMikiIG9wYWNpdHk9IjAuOCIvPjxjaXJjbGUgY3g9IjQwMCIgY3k9IjMwMCIgcj0iMjgwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==';
const ERROR_IMAGE =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNjAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMGIwZjE5Ii8+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PHJhZGlhbEdyYWRpZW50IGlkPSJnbG93IiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzOGJkZjgiIHN0b3Atb3BhY2l0eT0iMC4xNSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBiMGYxOSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48Y2lyY2xlIGN4PSI0MDAiIGN5PSIzMDAiIHI9IjI1MCIgZmlsbD0idXJsKCNnbG93KSIvPjx0ZXh0IHg9IjUwJSIgeT0iMjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyMCIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgbGV0dGVyLXNwYWNpbmc9IjgiPjQwNDwvdGV4dD48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjAsIDIzMCkiIHN0cm9rZT0iIzM4YmRmOCIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcng9IjEwIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkiLz48cGF0aCBkPSJNMTAgNjUgbDIwLTIwIDE1IDE1IDIwLTI1IDEwIDEyIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkiLz48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSI2IiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIxOCIgZmlsbD0iIzBiMGYxOSIgc3Ryb2tlPSIjMzhiZGY4IiBzdHJva2Utd2lkdGg9IjQiLz48bGluZSB4MT0iNDAiIHkxPSIzMCIgeDI9IjQwIiB5Mj0iNDQiIHN0cm9rZT0iIzM4YmRmOCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGNpcmNsZSBjeD0iNDAiIGN5PSI1MSIgcj0iMiIgZmlsbD0iIzM4YmRmOCIgc3Ryb2tlPSJub25lIi8+PC9nPjx0ZXh0IHg9IjUwJSIgeT0iMzgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjZjhmYWZjIiBsZXR0ZXItc3BhY2luZz0iMSI+SU1BR0UgTk9UIEZPVU5EPC90ZXh0Pjwvc3ZnPg==';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
  styles: [
    `
      :host .accordion-grid {
        interpolate-size: allow-keywords;
      }
      :host .accordion-grid:has(details:nth-of-type(1)[open]) .accordion-img-1,
      :host .accordion-grid:has(details:nth-of-type(2)[open]) .accordion-img-2,
      :host .accordion-grid:has(details:nth-of-type(3)[open]) .accordion-img-3,
      :host .accordion-grid:has(details:nth-of-type(4)[open]) .accordion-img-4,
      :host .accordion-grid:has(details:nth-of-type(5)[open]) .accordion-img-5 {
        opacity: 1 !important;
        transform: scale(1) !important;
        z-index: 10 !important;
      }
      :host .accordion-grid:not(:has(details[open])) .accordion-img-default {
        opacity: 1 !important;
        transform: scale(1) !important;
        z-index: 10 !important;
      }
    `,
  ],
})
export class Accordion {
  exclusive = input<boolean>(true);
  baseThumbnail = input<string>(DEFAULT_PLACEHOLDER);
  items = input<AccordionItem[]>([
    {
      title: 'First Entry',
      content: 'This is the body of the first accordion entry.',
      image:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
    },
    {
      title: 'Second Entry',
      content: 'This is the body of the second accordion entry.',
      image:
        'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=800&auto=format&fit=crop&q=60',
    },
    {
      title: 'Third Entry',
      content: 'This is the body of the third accordion entry.',
      image:
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=60',
    },
    {
      title: '4th Entry',
      content: 'This is the body of the fourth accordion entry.',
      image: 'https://main.d3739ajl2fez28.amplifyapp.com/accordion/00.webp',
    },
  ]);

  protected onImageError(event: Event): void {
    if (event.target instanceof HTMLImageElement) {
      event.target.src = ERROR_IMAGE;
    }
  }
}

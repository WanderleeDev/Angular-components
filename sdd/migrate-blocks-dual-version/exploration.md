## Exploration: migrate-blocks-dual-version

### Current State

The **blocks** category in `src/app/modules/components/blocks/` has 6 components. Their current status:

| Component | Lines | Status | Notes |
|-----------|-------|--------|-------|
| **accordion** | 160 CSS | CSS BEM | Container queries, `:has()` image switching, details/summary |
| **hero-banner** | 323 CSS | CSS BEM | Most complex — animations, code syntax colors, floating widget, metrics |
| **masonry-grid** | — | ✅ Already Tailwind | Already migrated, no `styleUrl`, uses Tailwind columns layout |
| **tabs-showcase** | 176 CSS | CSS BEM | Tab switching, grid layout, image fade-in animation |
| **team-grid** | 303 CSS | CSS BEM | Responsive grid + modal overlay with animations |
| **timeline-block** | 297 CSS | CSS BEM | Most complex layout — centered timeline with alternating items |

Total CSS BEM code to migrate: **~1,259 lines of CSS** across 5 components.

### Affected Areas

- `src/app/modules/components/blocks/accordion/*` — Source: TS, HTML, CSS → Tailwind-only (remove `styleUrl`)
- `src/app/modules/components/blocks/hero-banner/*` — Source: TS, HTML, CSS → Tailwind-only
- `src/app/modules/components/blocks/tabs-showcase/*` — Source: TS, HTML, CSS → Tailwind-only
- `src/app/modules/components/blocks/team-grid/*` — Source: TS, HTML, CSS → Tailwind-only
- `src/app/modules/components/blocks/timeline-block/*` — Source: TS, HTML, CSS → Tailwind-only
- `src/app/modules/components/loader/blocks.loader.ts` — Add `css` + `tailwind` dual paths per component
- `src/assets/registry/blocks/<component>/css/` — New dirs for preserved CSS BEM snapshots
- `src/styles.css` — May need custom animation keyframes added

### Tailwind CSS Variables Available

From `src/styles.css`:

```css
--color-app-bg: var(--background);       /* → bg-app-bg */
--color-app-text: var(--text);           /* → text-app-text, text-app-text/70 */
--color-app-card: var(--card-bg);         /* → bg-app-card */
--color-app-border: var(--border);        /* → border-app-border, border-app-border/40 */
--color-app-accent: var(--accent);        /* → text-app-accent, bg-app-accent */
--color-app-accent-hover: var(--accent-hover); /* → bg-app-accent-hover */
--color-app-accent-text: var(--accent-text);   /* → text-app-accent-text */
```

Opacity chaining works: `text-app-text/70`, `bg-app-text/[0.02]`, `border-app-border/40`, `text-app-text/[0.85]`

Built-in animations available: `animate-pulse`, `animate-spin`, `animate-ping`, `animate-bounce`.

Custom animations already in theme: `animate-pulse-glow`, `animate-star1`, `animate-star2`.

---

### Per-Component Analysis

#### 1. Accordion

**Structure**: Two-column grid (entries | images) using CSS Grid with container query breakpoint at 700px. Uses `<details>/<summary>` elements with `::details-content` for open/close transitions.

| CSS Feature | Tailwind Equivalent | Notes |
|-------------|-------------------|-------|
| `container-type: inline-size` | ❌ No TW equivalent | Must keep as `<style>` block or use media queries |
| `interpolate-size: allow-keywords` | ❌ No TW equivalent | Modern CSS feature, keep as custom |
| `::details-content` transition | ❌ No TW equivalent | Keep as custom CSS |
| `grid-template-columns: 1fr 1fr` at 700px | `md:grid-cols-2` | Can use `md:` breakpoint as fallback |
| `:has(details[open])` image switching | ❌ No TW equivalent | **Must keep as custom CSS** — core UX behavior |
| `border: 1px solid var(--border)` | `border border-app-border` | ✅ |
| `border-radius: 12px` | `rounded-xl` | ✅ |
| `box-shadow` | `shadow-md` | ✅ |
| SVG rotation on `details[open]` | `group-open:rotate-45` | Use `group`/`group-open` pattern |
| `font-weight: 700` | `font-bold` | ✅ |
| `cursor: pointer` | `cursor-pointer` | ✅ |

**Custom CSS needed** (inline `<style>` or `styles` in decorator):
- Container query fallback (or use `@media`)
- `:has()` selectors for image switching
- `::details-content` / `interpolate-size` for details animations
- `::-webkit-details-marker` removal

**Complexity**: MEDIUM
**HTML lines to convert**: ~42 lines

---

#### 2. Hero-Banner

**Structure**: Two-column grid (text left + mockup right). Badge, heading, description, CTA buttons, metrics section, compiler mockup widget, floating telemetry widget. **Most visually complex block.**

| CSS Feature | Tailwind Equivalent | Notes |
|-------------|-------------------|-------|
| `grid-template-columns: 1.1fr 0.9fr` | `lg:grid-cols-[1.1fr_0.9fr]` | Arbitrary value |
| `gap: 3rem` | `gap-12` | ✅ |
| `border-radius: 9999px` | `rounded-full` | ✅ |
| `rgba(56, 189, 248, 0.05)` bg | `bg-[#38bdf8]/5` | Arbitrary |
| `@keyframes pulseDot` | `animate-pulse` | Use built-in pulse or keep custom |
| `@keyframes floatWidget` | ❌ Not in TW | Need custom keyframe |
| `@keyframes spinSlow` | `animate-spin` | Use built-in spin |
| `font-size: 2.25rem` / 3rem | `text-4xl` / `text-5xl` | ✅ |
| `letter-spacing: -0.04em` | `tracking-[-0.04em]` | Arbitrary |
| Code syntax colors | `text-[#f43f5e]` etc. | Arbitrary values fine |
| `radial-gradient` glow | `bg-[radial-gradient(circle...)]` | Arbitrary |
| `.dot.red / .yellow / .green` | `bg-red-500` etc. | ✅ |
| `hover:translateY(-1px)` | `hover:-translate-y-0.5` | ✅ |
| `box-shadow` accent | `shadow-[0_4px_12px_rgba(56,189,248,0.2)]` | Arbitrary |

**Custom CSS needed**:
- `floatWidget` keyframe (translateY oscillation)
- `pulseDot` (can use `animate-pulse` as alternative)
- Pulse/Slow spin for widget icons

**Complexity**: HIGH
**HTML lines to convert**: ~100 lines (largest template)

---

#### 3. Tabs-Showcase

**Structure**: Header with pill-style tab nav + content panel (grid: text left, image right). Tab switching with `activeTabId` signal.

| CSS Feature | Tailwind Equivalent | Notes |
|-------------|-------------------|-------|
| Pill nav bar | `inline-flex rounded-full bg-app-border p-1` | ✅ |
| Tab buttons | `rounded-full px-5 py-2.5 font-bold text-sm` | ✅ |
| Active tab | `bg-app-card text-app-accent shadow-sm` | ✅ |
| `@keyframes fadeInImage` | ❌ Not in TW | Keep as custom or use `animate-fadeIn` |
| `grid-template-columns: 1fr 1fr` at 768px | `md:grid-cols-2` | ✅ |
| `border-radius: 20px` | `rounded-2xl` | ✅ |
| `padding: 2.5rem` | `p-10` | ✅ |
| `aspect-ratio: 4/3` | `aspect-[4/3]` | Arbitrary or `aspect-video` |
| `letter-spacing: 0.08em` for tagline | `tracking-wider` | ✅ |
| `color: var(--accent)` for check icon | `text-app-accent` | ✅ |

**Custom CSS needed**:
- `fadeInImage` keyframe (opacity + scale) — or use Tailwind transition with `animate-fadeIn`

**Complexity**: MEDIUM — cleanest migration, straightforward layout
**HTML lines to convert**: ~52 lines

---

#### 4. Team-Grid

**Structure**: Header + responsive grid (1→2→3 columns) of member cards with hover effects + modal overlay for bio.

| CSS Feature | Tailwind Equivalent | Notes |
|-------------|-------------------|-------|
| `grid-template-columns: repeat(2, 1fr)` | `sm:grid-cols-2` | ✅ |
| `grid-template-columns: repeat(3, 1fr)` | `md:grid-cols-3` | ✅ |
| Card hover `translateY(-2px)` | `hover:-translate-y-0.5` | ✅ |
| Card hover border/box-shadow | `hover:shadow-xl hover:border-app-accent/20` | ✅ |
| Avatar border hover | `group` pattern on card, target avatar | `group-hover:border-app-accent` |
| `backdrop-filter: blur(8px)` | `backdrop-blur` | ✅ |
| Modal backdrop | `fixed inset-0 bg-black/60 z-50` | ✅ |
| `@keyframes fadeInBackdrop` | ❌ Not in TW | Custom or `animate-fadeIn` |
| `@keyframes popInModal` | ❌ Not in TW | Custom spring-like animation |
| `border: 3px` | `border-3` | ✅ |
| `border-radius: 20px` | `rounded-2xl` | ✅ |
| Social icon hover | `group` or direct hover | ✅ |

**Custom CSS needed**:
- `fadeInBackdrop` keyframe
- `popInModal` keyframe (spring/scale)
- Modal positioning (can do with Tailwind)

**Complexity**: MEDIUM-HIGH
**HTML lines to convert**: ~99 lines

---

#### 5. Timeline-Block

**Structure**: Header with filter buttons + vertical timeline. Mobile: left-aligned line. Desktop: **centered timeline with alternating** items (odd left, even right). Most complex layout.

| CSS Feature | Tailwind Equivalent | Notes |
|-------------|-------------------|-------|
| Filter pills | `flex justify-center gap-2 flex-wrap` | ✅ |
| Active filter | `bg-app-accent text-app-accent-text shadow-md` | ✅ |
| Timeline line (absolute) | `absolute top-0 bottom-0 w-[2px] bg-app-border` | ✅ arbitrary |
| Mobile: `padding-left: 55px` | `pl-14` | ✅ |
| Nodes (absolute circles) | `absolute w-5 h-5 rounded-full border-2` | ✅ arbitrary |
| **Desktop: centered layout** | ❌ Needs custom CSS | `nth-child(even)` alternating + 50% positioning |
| `nth-child(even)` alternating | ❌ No TW equivalent | **Must use custom CSS** |
| Completed/in-progress/planned colors | State-class-based styling | ✅ via `[class.xxx]` bindings |
| `@keyframes nodePulse` | ❌ Not in TW | Custom box-shadow pulse |
| Hover: `translateX(4px)` mobile | `hover:translate-x-1` | ✅ |
| Hover: `translateY(-2px)` desktop | ✅ via md: variant | Different per breakpoint |
| `border-radius: 16px` | `rounded-2xl` | ✅ |
| Check icon in node | SVG inline | ✅ |
| `gap: 2rem` on items | `gap-8` | ✅ |

**Custom CSS needed**:
- **Centered desktop timeline with alternating items** — most significant custom CSS requirement
- `nth-child(even)` selectors for alternate positioning
- `nodePulse` keyframe
- Responsive breakpoint changes (line position, item direction, node positioning)

**Complexity**: HIGH
**HTML lines to convert**: ~80 lines

---

### Approaches

1. **Sequential per-component** — Migrate one component at a time, commit after each
   - Pros: Reviewable, testable, rollback per component
   - Cons: Slower total time from start to finish
   - Effort: Medium

2. **Batch all 5** — Migrate all 5 components in one pass
   - Pros: Faster, consistent patterns across components
   - Cons: Large diff, harder to review, risky
   - Effort: Low (total time) but High (risk)

3. **Tiered — easy first, complex last** — Order by complexity: tabs → accordion → team-grid → hero-banner → timeline
   - Pros: Learn patterns on simpler components, build confidence
   - Cons: Takes more orchestration
   - Effort: Medium

### Recommendation

**Approach 3 (tiered)**, in this order:

1. **tabs-showcase** (MEDIUM) — Cleanest pattern, great first candidate
2. **accordion** (MEDIUM) — Teaches `:has()` and container query workaround patterns
3. **team-grid** (MEDIUM-HIGH) — Modal overlay pattern, group hover
4. **hero-banner** (HIGH) — Most animations, syntax colors, complex layout
5. **timeline-block** (HIGH) — Most complex layout, leave for last when patterns are established

This order maximizes pattern reuse: you solve animation handling early (tabs), group/state patterns (accordion), modal patterns (team-grid), then apply everything to the two most complex ones.

### Risks

1. **`:has()` selectors** in accordion (image switching) have NO Tailwind equivalent — must keep as custom CSS or refactor to JS-based approach
2. **Container queries** in accordion have no Tailwind equivalent — use `md:` breakpoint as fallback
3. **Timeline `nth-child(even)` alternating** has NO Tailwind equivalent — must keep custom CSS for the desktop layout
4. **Custom animations** (6 total across 5 components) — need to decide: add to `@theme` in `styles.css`, inline per component, or use `<style>` blocks in templates
5. **Registry snapshot**: CSS BEM version must be manually preserved in `src/assets/registry/blocks/<component>/css/` BEFORE migrating source — don't forget this step
6. **Build script**: Current script copies source to registry root. After migration, the Tailwind source goes to root automatically, but CSS BEM snapshots in `css/` subdirs need manual creation.
7. **Loader metadata** must be updated with dual `css` + `tailwind` paths per component

### Custom CSS Requirements Summary

| Component | Custom CSS Needed |
|-----------|-------------------|
| accordion | `:has()` selectors, container queries, `::details-content`, `interpolate-size`, `-webkit-details-marker` |
| hero-banner | `floatWidget` keyframe, `pulseDot` keyframe (optional) |
| tabs-showcase | `fadeInImage` keyframe (optional) |
| team-grid | `fadeInBackdrop` keyframe, `popInModal` keyframe |
| timeline-block | Centered alternating desktop layout, `nth-child(even)`, `nodePulse` keyframe, responsive break changes |

**Total animations**: 6 keyframes to decide handling for. Recommend adding them to `styles.css` `@theme` block for reuse, or keep inline per component.

### Ready for Proposal

Yes. All 5 components have been analyzed, the CSS has been read fully, the Tailwind mapping is clear, the migration pattern from split-hero/masonry-grid is confirmed, and the risks are documented. The orchestrator should propose the tiered migration approach starting with tabs-showcase.

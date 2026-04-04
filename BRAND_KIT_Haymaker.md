# Haymaker Brand Kit
> Reference for all UI development. Every value here is a decision — do not deviate without approval.

---

## Colors

### Primary Palette
| Token | Hex | Usage |
|---|---|---|
| `--hm-red` | `#C41C1C` | Primary action, active states, name highlight, CTA buttons, badges |
| `--hm-red-deep` | `#9B1515` | Red hover states, pressed states |
| `--hm-black` | `#111111` | App background |
| `--hm-forest` | `#0D1F1C` | Alternate dark background (future use) |
| `--hm-paper` | `#F3F3F0` | Light mode surfaces (future use) |
| `--hm-white` | `#FFFFFF` | Text on dark, icons on dark |

### UI Surface Scale (dark mode)
| Token | Hex | Usage |
|---|---|---|
| `--hm-surface-1` | `#1A1A1A` | Card background |
| `--hm-surface-2` | `#222222` | Pressed/secondary button bg |
| `--hm-surface-3` | `#2A2A2A` | Card border, dividers |
| `--hm-surface-4` | `#1E1E1E` | Section divider lines |

### Text Scale
| Token | Hex | Usage |
|---|---|---|
| `--hm-text-primary` | `#FFFFFF` | Headlines, task titles, primary labels |
| `--hm-text-secondary` | `#CCCCCC` | Task descriptions, card subtitles |
| `--hm-text-tertiary` | `#888888` | Section headers (uppercase), meta info |
| `--hm-text-muted` | `#555555` | Due dates (default), placeholders |
| `--hm-text-inactive` | `#444444` | Nav icons (inactive), disabled |

### Semantic Colors
| Token | Hex | Usage |
|---|---|---|
| `--hm-green` | `#6DB86D` | Growth delta positive, success states |
| `--hm-green-bg` | `#1A2A1A` | Green badge background |
| `--hm-teal` | `#4A9E8A` | Brand deal badge |
| `--hm-teal-bg` | `#1A2828` | Teal badge background |
| `--hm-purple` | `#7A7ADD` | Concept/script badge |
| `--hm-purple-bg` | `#1A1A2A` | Purple badge background |

### Calendar Event Colors
| Token | Hex | Usage |
|---|---|---|
| `--hm-cal-shoot` | `#C41C1C` | Shoot / filming session |
| `--hm-cal-post` | `#9E9344` | Post going live |
| `--hm-cal-deal` | `#4A7C6F` | Brand deal / NIL event |
| `--hm-cal-proposal` | `#555555` | Haymaker proposal (pending, dotted border) |

---

## Typography

### Fonts
| Role | Font | Notes |
|---|---|---|
| Display / Hero | `Bebas Neue` | ALL CAPS only. Used for hero headlines in marketing. Not in app UI. |
| UI / App | `Oswald` | Headings, section labels, stat numbers in app |
| Body | `Inter` | Body text, descriptions, task copy |

### Type Scale (App)
| Role | Font | Size | Weight | Letter Spacing | Usage |
|---|---|---|---|---|---|
| Greeting name | Oswald | 26px | 500 | 0 | "Good evening, Kira." — name line |
| Greeting label | Inter | 12px | 400 | 0 | Date subtitle under greeting |
| Section header | Inter | 11px | 500 | 0.08em | Uppercase section labels |
| Card title | Inter | 14px | 500 | 0 | Approval card titles |
| Task title | Inter | 13px | 500 | 0 | Task card titles |
| Card sub | Inter | 11px | 400 | 0 | Card descriptions, meta |
| Stat number | Oswald | 22px | 500 | 0 | Summary cards, growth stats |
| Stat label | Inter | 10px | 400 | 0.06em | Uppercase stat labels |
| Badge | Inter | 10px | 500 | 0 | Type badges on cards |
| Nav label | Inter | 10px | 400 | 0 | Bottom nav labels |
| Button | Inter | 12px | 500 | 0 | Action buttons on cards |
| Logo wordmark | Inter | 13px | 500 | 0.12em | HAYMAKER in topbar |

---

## Spacing

### Base Unit: 4px
| Token | Value | Usage |
|---|---|---|
| `--space-xs` | `4px` | Icon internal gap, dot spacing |
| `--space-sm` | `8px` | Gap between buttons, badge padding |
| `--space-md` | `16px` | Card internal padding (horizontal) |
| `--space-lg` | `24px` | Section gap, between major blocks |
| `--space-xl` | `48px` | Top-level screen padding |
| `--space-2xl` | `64px` | (Reserved) |

### Component-Specific Spacing
| Component | Value |
|---|---|
| Screen horizontal padding | `16px` |
| Card padding | `13px 13px` |
| Card border radius | `12px` |
| Button padding | `8px 0` (full width), `6px 12px` (inline) |
| Button border radius | `8px` |
| Summary card padding | `10px 10px 8px` |
| Summary card border radius | `10px` |
| Stat card padding | `11px 12px` |
| Badge padding | `2px 7px` |
| Badge border radius | `99px` (pill) |
| Bottom nav padding | `12px 0 4px` |
| Topbar padding | `4px 18px 16px` |
| Status bar padding | `14px 20px 8px` |
| Avatar size | `34px × 34px` |
| Icon button size | `34px × 34px` |
| Active tab indicator | `16px wide × 2px tall`, `border-radius: 1px` |

---

## SF Symbols (iOS)

All icons use SF Symbols. Weight: `regular` unless noted. Size: `18pt` for nav, `15pt` for topbar utility icons, `16pt` for inline card icons.

### Bottom Navigation
| Tab | SF Symbol | Notes |
|---|---|---|
| Home | `rectangle.grid.2x2` | Active: filled `rectangle.grid.2x2.fill` |
| Calendar | `calendar` | Active: `calendar` (no fill variant needed) |
| Vault | `play.square.stack` | Active: `play.square.stack.fill` |
| Progress | `chart.line.uptrend.xyaxis` | Active: same, color changes to red |
| Tasks | `list.bullet` | Active: `list.bullet` with red tint |

### Topbar Icons
| Icon | SF Symbol | Notes |
|---|---|---|
| Notifications | `bell` | Badge dot overlay when unread |
| Messages / Inbox | `bubble.left` | Badge dot when unread |
| Profile (avatar) | Initials circle | 34pt, red bg `#C41C1C`, white text |

### Card / Inline Icons
| Usage | SF Symbol | Size |
|---|---|---|
| Due date clock | `clock` | 11pt, color `#555` |
| Due date urgent | `clock.fill` | 11pt, color `#C41C1C` |
| Download action | `arrow.down.circle` | 14pt |
| Mark published | `checkmark.circle` | 14pt |
| Record script | `mic` | 14pt |
| Script submitted | `checkmark.circle.fill` | 14pt, color `#6DB86D` |
| Chevron (navigate) | `chevron.right` | 12pt, color `#444` |
| Approve | none — text button only | — |
| Notification dot | Custom: 8pt circle `#C41C1C` | Overlaid top-right of icon button |

### Badge Icons (prefix to badge text)
| Type | SF Symbol |
|---|---|
| Video | `video.fill` |
| Brand deal | `dollarsign.circle.fill` |
| NIL | `dollarsign.circle` |
| Publishing | `arrow.up.circle` |
| Filming | `camera.fill` |
| Concept | `lightbulb.fill` |

---

## Component Specs

### App Shell
- Background: `#111111` full bleed
- Status bar style: light content (white text/icons)
- Navigation bar: none — custom bottom nav
- Safe area: respect top and bottom safe area insets

### Top Bar
- Height: `~60px` including status bar
- Left: Avatar circle (34pt, initials, red bg) → taps open Profile
- Center: HAYMAKER wordmark — `Inter 500, 13px, letter-spacing 0.12em` — M in red `#C41C1C`
- Right: Bell icon + Message icon, both in `34pt` dark circle buttons (`#1E1E1E`)
- Notification dot: `8pt circle, #C41C1C`, positioned `top: 4px, right: 4px`, `border: 1.5px solid #111`

### Summary Cards (3-up grid)
- Grid: `3 columns, gap: 8px`
- Background: `#1A1A1A`
- Border: `0.5px solid #2A2A2A`
- Border radius: `10px`
- Padding: `10px 10px 8px`
- Number: `Oswald 22px 500, #FFFFFF` (urgent number in `#C41C1C`)
- Label: `Inter 10px 400, #555555, uppercase, letter-spacing: 0.06em`

### Approval Cards
- Background: `#1A1A1A`
- Border: `0.5px solid #2A2A2A`
- Urgent border: `0.5px solid #3A1A1A`
- Border radius: `12px`
- Padding: `13px`
- Title: `Inter 14px 500, #FFFFFF`
- Sub: `Inter 11px 400, #555555`
- Margin between cards: `8px`
- Button row: two buttons, `gap: 6px`, full width split
- Primary button: bg `#C41C1C`, text `#FFFFFF`, radius `8px`, padding `8px 0`
- Secondary button: bg `#222222`, text `#888888`, border `0.5px solid #333333`
- Ghost button: bg `transparent`, text `#555555`, border `0.5px solid #2A2A2A`

### Task Cards
- Background: `#1A1A1A`
- Border: `0.5px solid #2A2A2A`
- Border radius: `12px`
- Padding: `12px 13px`
- Margin between: `7px`
- Title: `Inter 13px 500, #CCCCCC`
- Due (default): `Inter 11px 400, #555555`
- Due (urgent/today): `Inter 11px 400, #C41C1C`
- Platform tag: `Inter 10px 400, #444444`, bg `#222222`, padding `1px 6px`, radius `4px`
- Chevron: `chevron.right`, 12pt, `#444444`

### Section Headers
- Label: `Inter 11px 500, #555555, uppercase, letter-spacing: 0.08em`
- "See all" link: `Inter 11px 400, #C41C1C`
- Margin below header: `10px`
- Margin above (after divider): `0`

### Divider Lines
- `border-top: 0.5px solid #1E1E1E`
- Margin: `16px 0`

### Growth / Stat Cards
- Grid: `2 columns, gap: 8px`
- Background: `#1A1A1A`
- Border: `0.5px solid #2A2A2A`
- Border radius: `10px`
- Padding: `11px 12px`
- Label: `Inter 10px 400, #555555, uppercase, letter-spacing: 0.06em`
- Value: `Oswald 22px 500, #FFFFFF`
- Delta: `Inter 10px 400, #6DB86D`

### Bottom Navigation
- Background: `#111111`
- Border top: `0.5px solid #1E1E1E`
- Padding: `12px 0 4px`
- Icon size: `18pt`
- Inactive icon color: `#444444`
- Active icon color: `#C41C1C`
- Label: `Inter 10px 400`
- Inactive label: `#555555`
- Active label: `#C41C1C`
- Active indicator: red line `16px × 2px`, `border-radius: 1px`, below label

---

## Borders & Radius Reference
| Element | Radius |
|---|---|
| Phone shell | `40px` |
| Cards (standard) | `12px` |
| Summary / stat cards | `10px` |
| Buttons | `8px` |
| Platform tags | `4px` |
| Badges | `99px` |
| Avatar | `50%` |
| Icon buttons | `50%` |
| Active tab indicator | `1px` |

---

## Do's and Don'ts

**Do**
- Use `#C41C1C` for the single most important action on any screen
- Keep card backgrounds `#1A1A1A` — never pure black
- Use Oswald for numbers and display text, Inter for everything else
- Respect 16px screen horizontal padding at all times
- Show NIL dollar values wherever possible — it's motivating

**Don't**
- Use gradients or drop shadows anywhere
- Use more than 2 action buttons per card
- Put more than 3 items in the summary strip
- Use white text on red for anything other than primary CTA buttons
- Add decorative elements — the brand is utilitarian and athletic

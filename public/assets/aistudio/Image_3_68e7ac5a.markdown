---
name: Silicon Architecture Portfolio
colors:
  surface: '#131413'
  surface-dim: '#131413'
  surface-bright: '#393938'
  surface-container-lowest: '#0d0e0d'
  surface-container-low: '#1b1c1b'
  surface-container: '#1f201f'
  surface-container-high: '#292a29'
  surface-container-highest: '#343534'
  on-surface: '#e4e2e0'
  on-surface-variant: '#c3c9b4'
  inverse-surface: '#e4e2e0'
  inverse-on-surface: '#30312f'
  outline: '#8d9380'
  outline-variant: '#434939'
  surface-tint: '#a6d65d'
  primary: '#dcffa5'
  on-primary: '#223600'
  primary-container: '#b5e66b'
  on-primary-container: '#436700'
  inverse-primary: '#456800'
  secondary: '#c5c8bf'
  on-secondary: '#2e312c'
  secondary-container: '#444841'
  on-secondary-container: '#b3b6ae'
  tertiary: '#f1f4ec'
  on-tertiary: '#2d312c'
  tertiary-container: '#d5d8d0'
  on-tertiary-container: '#5a5e58'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c1f276'
  primary-fixed-dim: '#a6d65d'
  on-primary-fixed: '#121f00'
  on-primary-fixed-variant: '#334f00'
  secondary-fixed: '#e1e3db'
  secondary-fixed-dim: '#c5c8bf'
  on-secondary-fixed: '#191d17'
  on-secondary-fixed-variant: '#444841'
  tertiary-fixed: '#e0e4dc'
  tertiary-fixed-dim: '#c4c8c0'
  on-tertiary-fixed: '#191d18'
  on-tertiary-fixed-variant: '#444842'
  background: '#131413'
  on-background: '#e4e2e0'
  surface-variant: '#343534'
typography:
  headline-display:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 60px
    letterSpacing: -0.03em
  headline-display-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-code-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-code-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The portfolio communicates precision, deep structural mastery, and physical silicon realization. The persona is a high-caliber Physical Design / VLSI Engineer who works at the intersection of geometric floorplanning, timing closure, power integrity, and tape-out delivery. 

The aesthetic is **Swiss Engineering Brutalism** blended with **EDA Telemetry Minimalism**. It rejects decorative fluff, consumer-grade drop shadows, and ornamental illustration in favor of:
- **Floorplan Rigor**: High-density layouts, hard hairline structural borders, and modular rectilinear macro blocks reflecting chip partitions (core logic, memory macros, I/O rings).
- **Technical Authoritativeness**: Crisp data tables, live-spec readouts, timing/clock-tree metrics, and strict typographic hierarchy.
- **Instrumental Atmosphere**: A pitch-black substrate (#101110) evoking workstation displays, cleanroom diagnostic equipment, and lithography optics.

## Colors
The color architecture relies on extreme restraint, mimicking EDA terminal screens and specialized lithography diagnostics.

- **Primary (`#B5E66B`)**: Phosphor/Laser Green. Strictly reserved for active states, key timing closure metrics (e.g., zero WNS/TNS, positive slack), successful tape-out milestones, and high-priority interactive cues. Must not be overused as generic background fills.
- **Secondary (`#A2A59D`)**: Anodized Gray. Used for telemetry labels, subheaders, units of measurement, axis ticks, and secondary technical prose.
- **Tertiary / Structural Hairline (`#272B26`)**: Oxidized Silicon. The primary dividing line for macro boundaries, grid lines, tables, and compartmentalized floorplans.
- **Surface (`#191B19`)**: High-purity dark wafer substrate for cards, technical modules, and terminal blocks.
- **Background (`#101110`)**: Deep-well silicon canvas.
- **Text Primary (`#F2F1EA`)**: Warm Off-White / Unbleached Parchment. Maximizes contrast while eliminating the harsh optical glare of pure `#FFFFFF`.

## Typography
Typographic discipline pairs Swiss International Style rigor (`Hanken Grotesk`) with terminal-grade precision (`JetBrains Mono`).

- **Hanken Grotesk**: Dictates project narrative, case study framing, project titles, and executive summaries. Tight tracking on large display scales provides architectural weight.
- **JetBrains Mono**: Used for all engineering data, node specs (e.g., `3nm FinFET / GAA`, `Fmax: 3.2GHz`), die dimensions (`Die Size: 42.5mm²`), DRC/LVS validation tables, and telemetry status chips.
- **Case Rules**: Section index markers and technical tags (`label-code-sm`) must always render in uppercase with positive letter-spacing (`0.06em`). Project headers and prose retain standard sentence and title casing.

## Layout & Spacing
The layout simulates a 12-column silicon floorplan grid, reinforced by structural borderlines rather than floating elements.

- **Grid Model**: 
  - **Desktop (>=1200px)**: 12 columns with `1.5rem` gutters and `3rem` boundary margins. Outer frame acts as a chip package periphery.
  - **Tablet (768px - 1199px)**: 8 columns with `1rem` gutters and `2rem` margins.
  - **Mobile (<768px)**: 4 columns with `1rem` gutters and `1rem` margins. Nested data views reflow from multi-column telemetry bars to stacked register cards.
- **Floorplan Partitioning**: Layout sections should be framed with outer 1px borders of `#272B26`. Instead of standard vertical white space between cards, prioritize shared borders (adjacent borders collapsing into 1px dividers) to emulate contiguous macro partitions.
- **Rhythm**: Component interiors maintain strict horizontal and vertical padding derived from `space-sm` (8px), `space-md` (16px), and `space-lg` (24px).

## Elevation & Depth
In this design system, volumetric elevation (drop shadows, blur cones, skeuomorphic extrusion) is completely prohibited. Silicon physical design exists in 2D layers (metal stacks, poly, active areas).

- **Tonal Layering**: Depth is achieved solely through plane variation:
  - Base Floor: Canvas `#101110`
  - Active Die / Card: Surface `#191B19`
  - Selected / Active Cell: `#202420`
- **Hairline Demarcation**: All structural boundaries use a razor-sharp 1px border (`#272B26`).
- **Focus & State Elevation**: When an interactive unit or case study card is focused or hovered, elevation is rendered via a border state shift from `#272B26` to `#B5E66B`, or through a faint `#B5E66B15` internal tint. Never use diffuse drop shadows.

## Shapes
Sharp geometry (`roundedness: 0`). Microelectronics layouts are composed of orthogonal rectilinear shapes; rounded corners do not exist on silicon masks.

- **Corner Radius**: Absolute `0px` for all standard containers, cards, buttons, telemetry tags, and dialogs.
- **Clipped Angles (Optional Functional Glyph)**: Corner chamfers (45-degree 4px cuts) are permissible exclusively for hardware status indicators or IC pin-1 identifiers.

## Components

### Buttons & Action Triggers
- **Primary Action (e.g., Download Design Spec, Tapeout GDSII Archive)**: Background `#B5E66B`, text `#101110`, font `JetBrains Mono` medium 12px uppercase. 0px corner radius. Hover state transitions to `#C8F57E`.
- **Secondary / Ghost Action**: Background transparent, 1px border `#272B26`, text `#F2F1EA`. Hover state changes border to `#A2A59D` and text to `#B5E66B`.
- **Padding**: Vertical `8px` (`space-sm`), horizontal `16px` (`space-md`).

### Engineering Metric Chips & Telemetry Tags
- **Appearance**: Border 1px `#272B26`, background `#191B19`, font `JetBrains Mono` 10px, uppercase, text color `#A2A59D`.
- **Status Indicator**: Features a 4px × 4px square glyph preceding the text. The glyph is `#B5E66B` for passed/closed constraints, or `#A2A59D` for static metadata (e.g., `TSMC N5`, `PVT: TT/0.75V/125C`).

### Data Tables & EDA Timing Spec Sheets
- **Structure**: High-density horizontal table rows separated by 1px `#272B26`.
- **Header Row**: Text `#A2A59D`, `JetBrains Mono` 10px uppercase, padding `8px 12px`.
- **Data Cells**: Text `#F2F1EA` (values) and `#A2A59D` (units), `JetBrains Mono` 12px. Positive slack or verified timing points rendered in `#B5E66B`. Monospaced tabular alignment (`tabular-nums`) is mandatory.

### Floorplan Project Cards
- **Structure**: Enclosed in a 1px `#272B26` border on `#191B19`. Top sub-bar contains project metadata (Tape-out Date, Foundry Node, Area) styled as a header strip separated by a 1px border.
- **Interactive State**: Hover shifts the outer perimeter border to `#B5E66B`. No scale transitions, no shadow bloom.

### Form Inputs & Terminal Inquiries
- **Input Fields**: Background `#101110`, 1px border `#272B26`, text `#F2F1EA`, caret `#B5E66B`. Font `JetBrains Mono` 13px. 
- **Focus State**: Border color `#B5E66B` with zero outline blur.
- **Checkboxes & Radios**: Square 12px × 12px boxes, 1px border `#272B26`. Checked state: filled `#B5E66B` square with `#101110` center dot.

### Floorplan Schematics / Media Display
- **Frame**: Strict bounding box wrapped in `#272B26`. Overlay with coordinate crosshairs (e.g., `[X: 1044.20, Y: 820.00]`) on the bottom-right corner using `JetBrains Mono` 10px `#A2A59D`.
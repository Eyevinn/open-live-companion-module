# Open Live — Companion Module

Control [Open Live](https://github.com/Eyevinn/open-live) broadcast productions from a Stream Deck or any other Companion surface.

## Setup

1. Add a new connection in Companion and select **Eyevinn: Open Live**.
2. Enter the **Open Live API URL** (e.g. `http://localhost:8080` or your cloud instance URL).
3. The module will connect and fetch your active productions.

## Workflow

### Landing mode (no production selected)

The module starts in landing mode. Drag a **Productions** preset onto a button for each of your productions. Pressing the button selects that production and switches the module to control mode.

### Control mode (production selected)

Once a production is selected the module connects to its WebSocket and exposes the full switcher control set. Drag any of the presets below onto your surface.

| Category | What it does |
|---|---|
| **Program (PGM)** | Read-only indicators. Lights red when that source slot is live. Clicking does nothing. |
| **Preview (PVW)** | Selector buttons. Press to stage a source to preview (green). Dims when that slot is already on PGM. |
| **Transitions** | AUTO (MIX/DIP/PUSH at various durations) and CUT buttons. AUTO transitions the current PVW to PGM. |
| **Fade to Black** | FTB Toggle, On, and Off. Button turns red while FTB is active. Automatically clears on CUT or AUTO. |
| **Stream Control** | GO LIVE (hold 2s) and END (hold 2s). GO LIVE turns red while on air. |
| **OVL Alpha** | Set overlay opacity to 0 / 25 / 50 / 75 / 100%. |
| **Graphics** | Turn individual graphic overlays on or off. Lights amber while active. |
| **DSK** | Toggle downstream keyer layers. Lights amber while visible. |
| **Macros** | Execute production macros defined in Open Live. |
| **Navigation** | Back to Productions button — returns to landing mode. |

## Variables

| Variable | Description |
|---|---|
The variable prefix matches the connection label (default: `OpenLive`).

| Variable | Description |
|---|---|
| `$(OpenLive:production_name)` | Name of the connected production |
| `$(OpenLive:pgm_source)` | Current PGM source ID |
| `$(OpenLive:pvw_source)` | Current PVW source ID |
| `$(OpenLive:on_air)` | `true` when the stream is live |
| `$(OpenLive:ftb_active)` | `true` when faded to black |
| `$(OpenLive:ovl_alpha)` | Current overlay alpha (0.0–1.0) |
| `$(OpenLive:source_1_name)` … `$(OpenLive:source_8_name)` | Name of each source slot |
| `$(OpenLive:source_count)` | Number of sources in the current production |

## Default Page Layout

The module ships with a recommended page layout for a 5-wide Stream Deck. Apply it by running:

```bash
# Quit Companion first, then:
python3 companion/setup-pages.py
# Relaunch Companion
```

The layout is described in `companion/config/layout.json` and can be customised before running the script.

**Page 1 — Landing:** Production selection buttons.

**Page 2 — Control:**
```
[← BACK] [PGM Src 1] [PGM Src 2] [PGM Src 3] [PGM Src 4]   ← indicators only
[GO LIVE] [PVW Src 1] [PVW Src 2] [PVW Src 3] [PVW Src 4]   ← click to stage
[   END ] [   FTB   ] [AUTO MIX ] [   CUT   ]
```

## Connection

The module connects to the Open Live REST API on startup to fetch productions, then opens a WebSocket to `/ws/productions/:id/controller` when a production is selected. It reconnects automatically on disconnect.

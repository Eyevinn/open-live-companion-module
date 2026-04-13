# Open Live — Companion Module

Control [Open Live](https://github.com/Eyevinn/open-live) broadcast productions from a Stream Deck or any Companion surface.

## Setup

1. Add a new connection in Companion and select **Eyevinn: Open Live**.
2. Enter the **Open Live API URL** — e.g. `http://localhost:8080` or your hosted instance URL.
3. The module connects, fetches your active productions, and is ready.

## Default page layout

The module ships with `config/open-live-default.companionconfig`. Import it via **File → Import** in Companion to get a fully configured three-page layout instantly.

## Workflow

### Page 1 — Landing (no production selected)

Buttons show your active productions (up to 31). Tap one to connect and jump to the control page. The **REFRESH** button re-fetches the list. Empty slots are invisible and do nothing.

### Page 2 — Control (M/E)

Classic two-bus M/E layout for Stream Deck XL:

```
[← PRODS] [ON AIR ] [  FTB  ] [       ] [  CUT  ] [ MIX 1s] [SLIDE ←] [SLIDE →]
[ SRC 1  ] [ SRC 2  ] [ SRC 3  ] ...  [ SRC 8  ]   ← PVW bus — tap to load preview (green)
[ SRC 1  ] [ SRC 2  ] [ SRC 3  ] ...  [ SRC 8  ]   ← CUT bus — tap to cut to air (red)
[ GFX 1  ] [ GFX 2  ] [ GFX 3  ] [ GFX 4  ] [ DSK 1 ] [ DSK 2 ] [AUTO MIX] [CLASSIC→]
```

### Page 3 — Control (classic)

Single-bus layout. Tap a source to load it to preview; use AUTO or CUT to take it. **← PAGE 2** navigates back.

## Variables

The variable prefix matches your connection label (default: `OpenLive`).

| Variable | Description |
|---|---|
| `$(OpenLive:production_name)` | Name of the connected production |
| `$(OpenLive:selected_production_name)` | Name of the last selected production |
| `$(OpenLive:pgm_source)` | Current PGM mixer input ID |
| `$(OpenLive:pvw_source)` | Current PVW mixer input ID |
| `$(OpenLive:on_air)` | `true` when the stream is live |
| `$(OpenLive:ftb_active)` | `true` when faded to black |
| `$(OpenLive:ovl_alpha)` | Overlay alpha (0.0–1.0) |
| `$(OpenLive:source_1_name)` … `$(OpenLive:source_8_name)` | Source slot names |
| `$(OpenLive:source_count)` | Number of sources in the current production |
| `$(OpenLive:prod_1_name)` … `$(OpenLive:prod_31_name)` | Production slot names (landing page) |

## Connection

The module connects to the Open Live REST API on startup to fetch productions. When a production is selected it opens a WebSocket to `/ws/productions/:id/controller` and reconnects automatically on disconnect.

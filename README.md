# companion-module-eyevinn-open-live

[![Companion version](https://img.shields.io/badge/Companion-v3.x%20%2F%20v4.x-blue)](https://bitfocus.io/companion)

Bitfocus Companion module for [Open Live](https://github.com/Eyevinn/open-live) — a free, open-source live broadcast production platform.

Control sources, transitions, graphics, and stream state from a Stream Deck or any other Companion surface.

---

## Requirements

| Requirement | Version |
|---|---|
| Bitfocus Companion | 3.0 or later |
| Open Live backend | latest (`main`) |

---

## Installation

1. Open Companion and go to **Connections**.
2. Search for **Open Live** and add it.
3. Enter the **Open Live API URL** (e.g. `http://localhost:8080`).
4. The module connects and fetches your active productions.

### Default page layout

The module ships with a ready-made `.companionconfig` in `config/open-live-default.companionconfig`. Import it via **File → Import** in Companion to get the full three-page layout immediately.

---

## Pages

### Page 1 — Landing

One button per active Open Live production (up to 31). Tap to select a production and jump to the control page. A **REFRESH** button re-fetches the list.

Empty slots are invisible (black on black) and do nothing when pressed.

### Page 2 — Control (M/E)

Classic two-bus M/E layout:

```
[← PRODS] [ON AIR ] [  FTB  ] [       ] [  CUT  ] [ MIX 1s] [SLIDE ←] [SLIDE →]
[ SRC 1  ] [ SRC 2  ] [ SRC 3  ] [ SRC 4  ] [ SRC 5  ] [ SRC 6  ] [ SRC 7  ] [ SRC 8  ]  ← PVW bus (green)
[ SRC 1  ] [ SRC 2  ] [ SRC 3  ] [ SRC 4  ] [ SRC 5  ] [ SRC 6  ] [ SRC 7  ] [ SRC 8  ]  ← CUT bus (red)
[ GFX 1  ] [ GFX 2  ] [ GFX 3  ] [ GFX 4  ] [ DSK 1  ] [ DSK 2  ] [AUTO MIX] [CLASSIC→]
```

- **PVW row** lights green when a source is in preview. Tap to load to preview.
- **CUT row** lights red when a source is on air. Tap to cut directly to program.
- **CLASSIC →** navigates to Page 3.

### Page 3 — Control (classic)

Single-bus layout with combined PVW/PGM tally, suitable for smaller surfaces. Includes a **← PAGE 2** navigation button.

---

## Actions

| Action | Description |
|---|---|
| **Select Production** | Connect to a specific production by ID |
| **Select Production by Slot** | Connect to production in slot 1–31 of the landing list |
| **Back to Production List** | Disconnect and return to landing mode |
| **Refresh Production List** | Re-fetch active productions from Open Live |
| **Cut to Source Slot** | Hard-cut source slot N directly to program |
| **Load Source Slot to Preview** | Stage source slot N on preview (no-op if already on PGM) |
| **Transition to Source Slot** | Transition source slot N to program with chosen type and duration |
| **Auto** | Fire a transition from the current preview to program |
| **Take** | Hard-cut the current preview to program |
| **Fade to Black** | Toggle / force on / force off FTB with configurable duration |
| **Set Overlay Alpha** | Set the overlay layer opacity 0–100% |
| **Go Live** | Start the outgoing stream |
| **Cut Stream** | Stop the outgoing stream |
| **Graphic On / Off** | Show or hide a named graphic overlay |
| **DSK Toggle** | Toggle or force-show a downstream keyer layer |
| **Execute Macro** | Run a production macro defined in Open Live |

## Feedbacks

| Feedback | Turns on when… |
|---|---|
| **PGM Tally** | Source slot N is live on program |
| **PVW Tally** | Source slot N is loaded to preview |
| **On Air** | The outgoing stream is active |
| **Fade to Black Active** | The output is faded to black |
| **Graphic Active** | A named graphic overlay is visible |
| **Production Slot Occupied** | Production slot N has an active production |
| **DSK Visible** | A downstream keyer layer is visible |

## Variables

All variables use the connection label as prefix (default: `OpenLive`).

| Variable | Value |
|---|---|
| `$(OpenLive:production_name)` | Name of the connected production |
| `$(OpenLive:selected_production_name)` | Name of the last selected production |
| `$(OpenLive:pgm_source)` | Current PGM mixer input |
| `$(OpenLive:pvw_source)` | Current PVW mixer input |
| `$(OpenLive:on_air)` | `true` when the stream is live |
| `$(OpenLive:ftb_active)` | `true` when faded to black |
| `$(OpenLive:ovl_alpha)` | Current overlay alpha (0.0–1.0) |
| `$(OpenLive:source_1_name)` … `$(OpenLive:source_8_name)` | Name of each source slot |
| `$(OpenLive:source_count)` | Number of sources in the current production |
| `$(OpenLive:prod_1_name)` … `$(OpenLive:prod_31_name)` | Name of each production slot on the landing page |

---

## License

MIT © [Eyevinn Technology](https://www.eyevinn.se)

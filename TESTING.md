# Release status

**Release Candidate 2, not final.** The underlying RC2 gameplay previously passed the following automated checks:

| Area | Checks |
|---|---:|
| Web, saves, recovery and UI | 54 |
| Synthetic save migration | 9 |
| New recovery/help translations and exports | 27 |
| Settings focus and scroll | 36 |
| Ability/weapon catalog | 13 |
| Death handling | 5 |
| Post-round shops | 14 |
| Endgame | 20 + 9 |
| Existing localization checks | 12 |
| Audio | 368 |

Eight automated run scenarios were completed, including victories and defeats. A 120-cycle combat/menu test showed a memory plateau in that scenario. The EXE was tested from clean and relocated installation folders.

These are baseline RC2 results, not a new complete gameplay test of this English distribution. See SITE-TESTS.md and ENGLISH-TESTS.md for the additional checks.

## Limitations

Automated runs do not replace player testing. Not every hero/map/RIFT/hardware combination has been checked. Balance, exhaustive localization coverage and multi-hour stability still need testing. A native stress scene with over 220 enemies averaged about 51–52 FPS on the test machine, not a performance guarantee. The first native measurement was interrupted by a closed window; a retry passed, and the cause of the interruption was not confirmed. The EXE is unsigned, controller support is experimental and updates are manual.

Private profiles, environment logs and local machine paths are not published.

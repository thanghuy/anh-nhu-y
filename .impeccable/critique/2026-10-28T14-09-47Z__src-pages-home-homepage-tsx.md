---
target: trang chủ
total_score: 17
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/Users/huythang/Desktop/huta/anh-nhu-y/src/pages/home/HomePage.tsx"
target_fingerprint: "sha256:af6b1a4144d0c231d0f708375fac8528bdb7f13f08d452ab223e5b9608c9e60e"
target_path: /Users/huythang/Desktop/huta/anh-nhu-y/src/pages/home/HomePage.tsx
timestamp: 2026-10-28T14-09-47Z
slug: src-pages-home-homepage-tsx
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score: 17/32 (Acceptable; heuristics 7 and 10 n/a, Persuade surface)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 2 | mailto-only form gives no on-page confirmation |
| 2 | Match system / real world | 2 | hours without timezone, local-format hotlines, no Incoterm/MOQ vocabulary |
| 3 | User control and freedom | 3 | language not in URL |
| 4 | Consistency and standards | 2 | lead time 5-10 vs 7-10 days; mixed CTA labels; form vs header email |
| 5 | Error prevention | 2 | free-text-only quote form |
| 6 | Recognition rather than recall | 3 | floating actions icon-only, hover-only tooltips |
| 7 | Flexibility | n/a | marketing surface |
| 8 | Aesthetic and minimalist | 2 | ~8 concurrent effects; mobile overlap |
| 9 | Error recovery | 1 | no fallback when mailto fails |
| 10 | Help | n/a | FAQ covers it |

## Priority issues
- [P1] Hero image (IMAGES.field) is AI-generated art; site's job is proving it's real. HomePage.tsx:70.
- [P1] Primary CTA contrast: white on #31a050 = 3.35:1 (light), 2.44:1 / hover 1.76:1 (dark). Detector confirmed.
- [P1] Quote path weak for overseas mobile buyer: mailto-only, no fallback, local phone format, no WhatsApp/Zalo, no timezone.
- [P2] Copy accuracy: lead time contradiction, "order online" FAQ, durian mention, awkward EN H1, self-praising testimonial lead.
- [P2] Template composition hides farm-to-carton differentiator; achievements buried; mobile floating buttons overlap content.

## Detector
CLI: 15 findings (1 gradient-text warning = documented shimmer; 5 off-ramp font sizes; 5 radius drift incl. 10px; 4 hard-coded colors #1877f2 #f5b301 #b07d00 #000). Browser: low-contrast primary button, hero lead 4.47:1 in dark mode, skipped heading h1->h3 on /lien-he; orbs/glow/eyebrow/icon tiles are documented identity (false positives).

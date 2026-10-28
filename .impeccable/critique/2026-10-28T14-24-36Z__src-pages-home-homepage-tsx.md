---
target: trang chủ
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/huythang/Desktop/huta/anh-nhu-y/src/pages/home/HomePage.tsx"
target_fingerprint: "sha256:ab2d748b5946a0cf69cd4b183565bb7565a07b3029c035e51e31ae947200d6fe"
target_path: /Users/huythang/Desktop/huta/anh-nhu-y/src/pages/home/HomePage.tsx
timestamp: 2026-10-28T14-24-36Z
slug: src-pages-home-homepage-tsx
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score: 22/32 (Good; heuristics 7 and 10 n/a, Persuade surface)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | post-submit panel hedges; failed copy is silent (MailForm.tsx:48) |
| 2 | Match system / real world | 3 | hero lead is adjectives + "B2B"; Binh Thuan vs Lam Dong unexplained |
| 3 | User control and freedom | 3 | — |
| 4 | Consistency and standards | 3 | three public emails; "Anh Nhu Y" in titles; product cards don't deep-link |
| 5 | Error prevention | 2 | volume/destination optional; mailto dependency |
| 6 | Recognition rather than recall | 3 | touch dock has no labels; Zalo icon generic |
| 7 | Flexibility | n/a | marketing surface |
| 8 | Aesthetic and minimalist | 2 | ~11 mobile screens; products ~5 screens down; repeated phrases |
| 9 | Error recovery | 3 | fallback panel good; copy failure silent |
| 10 | Help | n/a | FAQ covers it |

## Priority issues
- [P1] Thin trust signals at vetting time: anonymous 5-star quotes, Gmail addresses, personal Facebook profile, certifications asserted only.
- [P1] Hero lead and "Why choose us" lead with adjectives; "Competitive pricing" is the highlighted card on a site with no prices.
- [P2] Home is long and repetitive; products start ~5 mobile screens down; "Promise" section adds no new facts.
- [P2] Mobile dock covers content/fields; hover-only labels; generic Zalo icon; no WhatsApp for overseas.
- [P2] Quote path gaps: no per-product quote CTA, cards don't deep-link to #thanh-long/#dua, no product prefill.

## Detector
CLI exit 0: 9 advisories (5 off-ramp font sizes, 3 small radii, 1 #000). Browser: hero eyebrow 4.3:1 in light mode (real); gradient-text, eyebrow, icon tiles = documented identity.

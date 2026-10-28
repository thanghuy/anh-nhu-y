# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two B2B audiences matter equally:

- **Overseas importers and distributors** (Europe, US, Japan, China, Middle East, Southeast Asia) sourcing fresh dragon fruit, and increasingly coconut, from Vietnam. They usually read the English version and evaluate a supplier remotely before any call.
- **Domestic partners in Vietnam**: exporters, buying agents and businesses that need contract packing, who read the Vietnamese version.

Both are vetting a supplier: can Anh Như Ý deliver consistent, certified fruit, packed to spec, on schedule, year-round.

## Product Purpose

The marketing site for Anh Như Ý, a dragon fruit grower, packer and exporter in Hàm Thuận (formerly Bình Thuận, now Lâm Đồng province). It exists to establish trust and turn qualified buyers into conversations.

A visit succeeds when the buyer does any of:

- sends a quote request (product, quantity, target market);
- calls or messages the hotline (phone / Zalo);
- messages via Facebook;
- leaves trusting the company enough to keep evaluating it (certifications, track record, facilities).

## Positioning

A farm-rooted supplier in Vietnam's "dragon fruit capital" that grows, sorts and packs its own fruit: 10+ years of dragon fruit processing, 200+ experienced staff, 15+ long-term partners, six export market regions, GlobalGAP and VietGAP certified, with a founder recognised nationally as an outstanding farmer.

## Operating Context

- B2B sourcing: buyers compare suppliers on certification, size grades, carton specs, cold-chain handling, lead time and price stability, then request a quote.
- Products: dragon fruit (white flesh, red flesh, yellow skin), 350–450 g and 450–650 g grades, cartons of 4, 9, 16, 16.5 or 18 kg, adjustable on request; fresh coconut (whole, or "diamond"-cut young coconut), 5- or 7-ply cartons, reefer container at 0–2 °C. Lead time 7–10 working days.
- International shipping under Incoterms by air or sea; domestic delivery available.
- Working hours 9:00–17:00 (Vietnam time).

## Capabilities and Constraints

- Routes: `/` (home), `/gioi-thieu` (about), `/san-pham` (products), `/lien-he` (contact).
- Bilingual: Vietnamese is the source dictionary (`src/i18n/vi.ts`); English (`src/i18n/en.ts`) must match its shape. Every copy change lands in both.
- No form backend: the quote form opens the visitor's mail client with a prefilled message (`src/components/forms/MailForm.tsx`).
- Contact channels: email, phone, two hotlines, Facebook, floating call / message actions (`src/lib/site.ts`).
- Images are hot-linked from the original anhnhuy.com Zyro CDN; no local image library yet.
- Static React + Vite site on Vercel.
- Coconut is a newer, expanding line; durian is mentioned as a future product but not offered on the site.

## Brand Commitments

- Name: **Anh Như Ý**. Existing logo (`IMAGES.logo` in `src/lib/site.ts`).
- Brand green carried over from anhnhuy.com, controlled only through the `--color-primary*` / `--color-accent*` tokens.
- Slogan: "Xuất khẩu trái cây tươi Việt Nam" / fresh Vietnamese fruit export.
- Voice: plain, confident, factual B2B; specs and commitments over adjectives.

## Evidence on Hand

- Certifications: GlobalGAP, VietGAP.
- Figures: 200+ staff, 10+ years, 15+ long-term partners, 6 market regions.
- Achievements: one of 100 outstanding farmers nationwide (Nông dân Việt Nam xuất sắc 2023); visit by then Acting State President Nguyễn Thị Ánh Xuân; hosts farm and facility tour groups.
- Real photography: field, farmer harvesting, packing hall, cartons/pallets, storefront at night, coconut cartons, achievements board (`IMAGES` in `src/lib/site.ts`).
- Two genuine customer testimonials, kept **anonymous by choice**; do not attach names, companies or countries to them.
- Absent, do not fabricate: named client logos, prices, volumes/capacity figures, certificate numbers or scans, case studies, press coverage.

## Product Principles

1. Earn trust with verifiable facts: certifications, specs, real photos, real achievements.
2. Make reaching the team effortless from every page, by whichever channel the buyer prefers.
3. Speak to both audiences with equal care; English and Vietnamese are both first-class.
4. Specs before adjectives: sizes, cartons, temperatures and lead times answer the buyer's real questions.
5. Show the farm-to-carton chain; owning the source is the differentiator.

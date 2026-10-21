# The Nadine Krisa Peckins Team — website

Plain HTML, CSS and JavaScript. No frameworks, no paid services. Vite is used only as the
local preview/build tool (it's what Bolt runs). The site also works if the files are
served as-is by any static host.

## Files
| File | What it is |
|---|---|
| `src/config.js` | **Edit this first.** Phone, email, links, form key. |
| `index.html` … `contact.html` | One file per page. Page text lives here. |
| `src/styles.css` | All design (colors, fonts, layout). |
| `src/site.js` | Shared header/footer, mobile menu, animations, forms. |
| `public/images/` | Drop photos here — see `PUT-PHOTOS-HERE.txt` for names. |
| `public/sitemap.xml`, `public/robots.txt` | For Google. Replace `YOUR-DOMAIN`. |

## Get it into Bolt (almost no tokens)
**Option A — GitHub (recommended, also gives you a backup):**
1. Create a new empty repository on github.com.
2. Click "uploading an existing file", drag in everything from this folder, commit.
3. In Bolt, open `bolt.new/~/github.com/YOUR-USERNAME/YOUR-REPO`
   (or use Bolt's GitHub import). Bolt opens the project without generating code.

**Option B — copy & paste:** start a blank Vite project in Bolt, switch to the Code view,
create each file with the same name and paste its contents. Editing files directly in
the Code view doesn't use AI tokens. Images go in `public/images/`.

Then publish with Bolt hosting and connect the GoDaddy domain from Bolt's domain settings.

## Connect the forms (free)
1. Go to web3forms.com, enter the email address that should receive leads, and copy the access key.
2. Paste it into `formAccessKey` in `src/config.js`.
3. Before launch: submit both forms (Home value + Contact) from a phone and a computer and
   confirm every email arrives — check the spam folder, and mark it "not spam" if needed.

## Before launch checklist
- [ ] Phone and email in `src/config.js` and in the structured data at the top of `index.html`
- [ ] Every "Needs Nadine's OK" tag confirmed or removed, then set `showReviewTags: false`
- [ ] RealTrends figures approved by Nadine (homepage strip)
- [ ] Real photos added; no placeholder labels showing
- [ ] Replace `YOUR-DOMAIN` in `index.html`, `public/sitemap.xml`, `public/robots.txt`
- [ ] Forms tested end to end
- [ ] Privacy notice reviewed by Nadine/brokerage

## Getting found on Google (local SEO)
Built into the site: location-specific page titles and descriptions, one clear heading per
page, structured business data (RealEstateAgent + FAQ), a sitemap, fast plain-HTML pages,
descriptive photo text, and mobile-first layout.

What moves rankings most after launch, all free:
1. **Google Business Profile** for the team — the single biggest factor for "realtor near me"
   and map results. Use the exact same name, address and phone as the website, link to the
   site, add photos, and post occasionally.
2. **Reviews** on that Google profile. Ask every happy client; reply to every review.
3. **Same name/address/phone everywhere** — Zillow, Realtor.com, KW profile, Facebook.
4. **Google Search Console** — add the site and submit `sitemap.xml` on launch day.
5. **One page per community** (Clarks Summit, etc.) with ~300+ words of genuinely local
   detail. These pages win searches like "sell my house in [town]".
6. **Local links** — chamber of commerce, sponsored events, local news mentions.

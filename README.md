# ReplyRadar

**A local-first Progressive Web App for finding high-quality tweets to reply to manually.**

## ⚡ No API Required!

ReplyRadar works **without any X/Twitter API access**. Perfect for anyone who wants to find quality engagement opportunities without dealing with API setup.

🚨 **SAFETY FIRST**: ReplyRadar is a research and organization tool only. It does NOT automate replies, mentions, or any posting actions. All engagement must be done manually by you.

## What It Does

ReplyRadar helps you discover tweets worth replying to by:

- Generating smart search queries with advanced filters
- Organizing tweets in a prioritized queue
- Tracking which tweets you've replied to

### Manual Workflow (No API)

```
1. Enter keywords or use Quick Packs
   ↓
2. Set filters (age, likes, max replies)
   ↓
3. Click "Open in X" to search
   ↓
4. Copy interesting tweet URLs
   ↓
5. Paste into ReplyRadar
   ↓
6. Review queue and reply manually
```

**Time**: 5 minutes to find tweets, 10-15 minutes to reply thoughtfully

## Features

### 🔍 Advanced Search Filters

- ⏰ **Max Age** - Find tweets posted within 15-720 minutes
- ❤️ **Min Likes** - Set engagement threshold (find tweets with traction)
- 💬 **Max Replies** - Target tweets with 0-10 replies (less competition!)
- ✅ **Exclude Replies** - Only show original tweets
- 🚫 **Exclude Retweets** - Skip retweets
- ✓ **Verified Only** - Filter for verified accounts

### 📦 Quick Keyword Packs

Pre-loaded with engaging keyword sets:
- **Corporate Jargon**: "synergy", "circle back", "low-hanging fruit"
- **Tech Twitter**: "React", "TypeScript", "JavaScript", "CSS"
- **Startup Life**: "founder", "startup", "SaaS", "product-market fit"
- **AI/ML**: "AI", "machine learning", "LLM", "GPT"

Create unlimited custom packs for your niche!

### 🎯 Smart Search Query Generation

ReplyRadar builds sophisticated X search queries like:
```
("react" OR "typescript") min_faves:5 max_replies:2 -filter:replies -filter:retweets
```

The **max replies filter** is especially powerful - tweets with 0-2 replies are goldmines because:
- Less competition
- Higher visibility for your reply
- Better chance of starting a conversation

### 💾 100% Local Storage

- All data stored in browser localStorage
- No cloud sync
- No external analytics
- Export/import backups as JSON

### 📱 PWA Benefits

- Install on mobile or desktop
- Works offline for queued tweets
- Fast, lightweight interface

## Quick Start

### Option 1: Use the Live Version

Visit the deployed version at: `https://yourusername.github.io/replyradar`

### Option 2: Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/replyradar.git
   cd replyradar
   ```

2. **Serve locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server
   
   # Or any local server
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Option 3: Deploy to GitHub Pages

1. Fork this repository
2. Go to Settings → Pages
3. Set Source to "main" branch
4. Your app will be live at `https://yourusername.github.io/replyradar`

## Daily Workflow

### Morning Routine (5 minutes)

1. Open ReplyRadar
2. Enter keywords or click a Quick Pack
3. Set filters:
   - Max age: 90 minutes
   - Min likes: 5
   - Max replies: 2
4. Click **"Open in X"**
5. Browse results on X/Twitter
6. Copy 10-15 interesting tweet URLs
7. Paste them into ReplyRadar
8. Click **"Add to Queue"**

### Throughout the Day

1. Go to **Queue** tab
2. Click 🔗 to open tweets on X
3. Write thoughtful replies manually
4. Mark as ✅ Replied or ❌ Skip
5. Repeat for 3-5 tweets per session

### Evening Cleanup

1. Review replied/skipped tweets
2. Click "Clear completed"
3. Export backup (weekly habit)

## Pro Tips

### Finding the Best Tweets

- **Low replies = opportunity**: Tweets with 0-2 replies have less competition
- **Fresh tweets**: Set max age to 60-90 minutes for best visibility
- **Some engagement**: 5-10 likes means it has traction but isn't oversaturated

### Creating Custom Keyword Packs

**For Developers:**
```
Keywords: Next.js, Remix, Astro, web performance, SSR
```

**For Founders:**
```
Keywords: bootstrapped, indie hacker, revenue, customer acquisition
```

**For Creators:**
```
Keywords: content strategy, newsletter, audience building, monetization
```

### Time-Based Strategy

- **Morning (7-9 AM)**: Fresh tweets, less competition
- **Lunch (12-1 PM)**: High activity, more opportunities
- **Evening (6-8 PM)**: Engaged audience, better conversations

## File Structure

```
replyradar/
├── index.html          # Main HTML file
├── app.js              # Application logic
├── manifest.json       # PWA manifest
├── service-worker.js   # Offline support
├── icon-192.png        # App icon (192x192)
├── icon-512.png        # App icon (512x512)
└── README.md           # This file
```

## Creating Icons

You need two icon files:

**icon-192.png** (192x192 pixels)
**icon-512.png** (512x512 pixels)

Use a simple design - maybe a radar icon or "RR" text. Here are some options:
- Use [favicon.io](https://favicon.io) to generate from text
- Design in Figma/Canva and export
- Use [realfavicongenerator.net](https://realfavicongenerator.net)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Privacy

- **No tracking**: Zero analytics or telemetry
- **No cloud**: All data stays in your browser
- **No accounts**: No login required
- **No cookies**: Only localStorage for your data

## Safety Explanation

### Why This Tool is Safe

ReplyRadar is designed with safety and ethical use as core principles:

1. **Human-in-the-loop**: Every reply requires your manual review and action
2. **Research tool**: Like a bookmark manager for tweets
3. **No credentials**: Never stores your X password or posting tokens
4. **No automation**: Technically impossible to auto-reply from this app
5. **Transparent**: All code is open source and auditable

### Ethical Use Guidelines

✅ **DO:**
- Use it to find interesting conversations
- Reply thoughtfully and authentically
- Respect X's terms of service
- Engage genuinely with others

❌ **DON'T:**
- Copy-paste identical replies
- Reply to every single tweet in your queue
- Use it to spam or harass
- Violate X's automation rules

## Troubleshooting

### PWA Not Installing?
- Make sure you're using HTTPS (or localhost)
- Check that manifest.json is loading
- Try desktop Chrome's "Install app" option

### Data Not Saving?
- Check browser storage isn't full
- Ensure localStorage is enabled
- Try exporting data and clearing old tweets

### Icons Not Showing?
- Make sure icon-192.png and icon-512.png exist
- Icons must be exactly 192x192 and 512x512 pixels
- Use PNG format

## Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

**Focus areas:**
- UI/UX improvements
- Additional search filters
- More keyword pack templates
- Better mobile experience

## License

MIT License - feel free to use, modify, and distribute.

## Disclaimer

This tool is provided as-is for research and personal organization. Users are responsible for complying with X's Terms of Service and automation rules. The creators assume no liability for misuse.

**Remember**: This is a tool for finding conversations, not automating them. Always engage authentically and respectfully.

---

**Made for creators who value authentic engagement over automation.**

## What It Does

ReplyRadar helps you discover tweets worth replying to by:

- Searching for tweets using customizable keyword packs
- Scoring tweets based on engagement and freshness
- Organizing tweets in a prioritized queue
- Tracking which tweets you've replied to

### Manual Workflow (No API)

```
1. Select Keyword Packs
   ↓
2. Click "Copy Query" or "Open in X"
   ↓
3. Browse Results on X/Twitter
   ↓
4. Copy Interesting Tweet URLs
   ↓
5. Paste into ReplyRadar
   ↓
6. Review Scored Queue
   ↓
7. Reply Manually on X
   ↓
8. Mark as Replied
```

**Time**: 5 minutes to find tweets, 10 minutes to reply

### Optional API Workflow

```
1. Select Keyword Packs
   ↓
2. Click "Search with API"
   ↓
3. Auto-populated Queue
   ↓
4. Reply Manually on X
   ↓
5. Mark as Replied
```

**Time**: 3 minutes to find tweets, 10 minutes to reply

**What it DOESN'T do:**
- ❌ Automatically reply to tweets
- ❌ Automatically mention users
- ❌ Post anything on your behalf
- ❌ Store data in the cloud

## Features

### 🔍 Works Without API!

**Manual Workflow** (NO API REQUIRED):
- Generate search queries from keyword packs
- Copy query and search on X/Twitter directly
- Paste tweet URLs back into ReplyRadar
- Track and organize your replies
- 100% free, no API costs

**API Mode** (Optional):
- Connect your X API bearer token for automatic search
- Uses X API v2 Recent Search endpoint
- Rate-limit aware
- Faster but requires developer account

### 📦 Keyword Packs

Pre-loaded with engaging keyword sets:
- **Corporate Jargon**: "synergy", "circle back", "low-hanging fruit", etc.
- **LinkedIn Cringe**: "thought leader", "hustle culture", "10x", etc.
- **Meeting Hell**: "could have been an email", "back to back", etc.

Create your own custom packs for any niche!

### 🎯 Smart Scoring Algorithm

```
score = (likes × 2) + (reposts × 3) + freshness_bonus + keyword_hits
```

Tweets are automatically ranked to show you the best opportunities first.

### 💾 100% Local Storage

- All data stored in IndexedDB (on your device)
- No cloud sync
- No external analytics
- Export/import backups as JSON

### 📱 PWA Benefits

- Install on mobile or desktop
- Works offline for queued tweets
- Fast, native-like experience

## Setup Instructions

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) X API bearer token for API search mode

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/replyradar.git
   cd replyradar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy** (optional)
   - Deploy the `build` folder to any static hosting (Netlify, Vercel, GitHub Pages, etc.)
   - Can also run entirely local - no deployment needed!

### Getting an X API Token (Optional)

**You don't need an API to use ReplyRadar!** The manual workflow works great without any API access.

If you want automatic search (optional convenience feature):

1. Go to [developer.twitter.com](https://developer.twitter.com)
2. Create a new app (Free tier works)
3. Generate an "App-only" bearer token
4. Copy the token into ReplyRadar Settings → API Settings
5. **Important**: Only use read-only tokens. Never give posting permissions.

**Recommended**: Start with manual mode. Only add API if you find yourself using the tool daily.

## Daily Workflow

### Morning Routine (5 minutes) - NO API NEEDED

1. Open ReplyRadar
2. Go to **Search** tab
3. Select keyword packs (e.g., "Corporate Jargon")
4. Click **"Copy Search Query"** or **"Open in X"**
5. On X/Twitter, browse the results
6. Copy URLs of 10-15 interesting tweets
7. Paste them into ReplyRadar's text box
8. Click **"Add to Queue"**
9. Switch to **Queue** tab

### Throughout the Day

1. Check your queue during breaks
2. Click 🔗 to open tweets on X
3. Read and write thoughtful replies manually
4. Click ✅ when you've replied
5. Click ❌ to skip tweets

### Evening Cleanup

1. Review replied/skipped tweets
2. Click "Clear completed"
3. Export backup (weekly habit)

## Safety Explanation

### Why This Tool is Safe

ReplyRadar is designed with safety and ethical use as core principles:

1. **Human-in-the-loop**: Every reply requires your manual review and action
2. **Research tool**: Like a bookmark manager for tweets
3. **No credentials**: Never stores your X password or posting tokens
4. **No automation**: Technically impossible to auto-reply from this app
5. **Transparent**: All code is open source and auditable

### Ethical Use Guidelines

✅ **DO:**
- Use it to find interesting conversations
- Reply thoughtfully and authentically
- Respect X's terms of service
- Engage genuinely with others

❌ **DON'T:**
- Copy-paste identical replies
- Reply to every single tweet in your queue
- Use it to spam or harass
- Violate X's automation rules

### Compliance

This tool helps you find tweets manually, similar to using X's search feature. All engagement is done by you, through X's official interface, following all platform rules.

## Keyword Pack Examples

### For Developers

```
Name: Tech Debates
Keywords: JavaScript, TypeScript, React, Vue, tabs vs spaces, semicolons
```

### For Entrepreneurs

```
Name: Startup Life
Keywords: founder, startup, fundraising, product-market fit, MVP
```

### For Writers

```
Name: Writing Craft
Keywords: writing tips, first draft, editing, plot holes, character development
```

### For Corporate Humor

```
Name: Office Satire
Keywords: corporate speak, buzzwords, TPS reports, synergy, stakeholder alignment
```

## Technical Architecture

- **Frontend**: React with Hooks
- **Storage**: IndexedDB (via native API)
- **Styling**: Tailwind CSS utility classes
- **Icons**: Lucide React
- **PWA**: Service Worker for offline support
- **API**: X API v2 (optional, read-only)

## File Structure

```
replyradar/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── service-worker.js
├── src/
│   ├── App.jsx (main component)
│   └── index.js
├── package.json
├── README.md
├── MANUAL-WORKFLOW.md (detailed guide for no-API usage)
└── WORKFLOW.md (general usage guide)
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Privacy

- **No tracking**: Zero analytics or telemetry
- **No cloud**: All data stays on your device
- **No accounts**: No login required
- **No cookies**: (except for basic session management)

## Troubleshooting

### "API error: 429"
- You've hit rate limits. Wait 15 minutes and try again.
- Consider reducing max_results or searching less frequently.

### "No tweets found"
- Try different keyword packs
- Increase the max age filter
- Lower the minimum likes threshold

### Tweets not saving
- Check browser storage isn't full
- Try exporting data and clearing old tweets
- Ensure IndexedDB is enabled in browser settings

### Can't install as PWA
- Ensure you're using HTTPS (or localhost)
- Check that manifest.json is loading
- Try desktop Chrome's "Install app" option

## Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

**Focus areas:**
- UI/UX improvements
- Performance optimizations
- Additional scoring algorithms
- More keyword pack templates
- Better mobile experience

## License

MIT License - feel free to use, modify, and distribute.

## Disclaimer

This tool is provided as-is for research and personal organization. Users are responsible for complying with X's Terms of Service and automation rules. The creators assume no liability for misuse.

**Remember**: This is a tool for finding conversations, not automating them. Always engage authentically and respectfully.

## Support

### Documentation
- 📘 **QUICK-START.md** - 5-minute getting started guide
- 📗 **MANUAL-WORKFLOW.md** - Complete guide for using without API
- 📙 **WORKFLOW.md** - Daily routines and best practices
- 📕 **README.md** - Full technical documentation (you are here)

### Help & Issues
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/replyradar/issues)
- 📧 Email: your@email.com
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/replyradar/discussions)

---

**Made for creators who value authentic engagement over automation.**

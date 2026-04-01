# Deployment Instructions

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (will ask for login first time)
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: sumsur-site (or your choice)
# - Deploy? Yes
```

You'll get a live URL instantly: `https://sumsur-site.vercel.app`

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   # Create new repo on github.com (private or public)
   # Then:
   git remote add origin https://github.com/YOUR_USERNAME/sumsur-site.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to vercel.com
   - Click "Import Project"
   - Select your GitHub repo
   - Click Deploy

Auto-deploys on every git push.

### Option 3: I Deploy It For You

If you want me to handle it:
1. Give me a GitHub personal access token (with repo permissions)
2. I'll create the repo, push code, and deploy to Vercel
3. You get the live URL in 2 minutes

## Custom Domain (Optional)

Once deployed, you can add your own domain:
1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Vercel dashboard → Settings → Domains
3. Add your domain
4. Update DNS records (Vercel will show you what to add)

## Environment Variables (For Notion CMS)

When you're ready to connect Notion:
1. Vercel dashboard → Settings → Environment Variables
2. Add:
   - `NOTION_API_TOKEN`
   - `NOTION_PHOTOS_DB_ID`
   - `NOTION_WRITINGS_DB_ID`
   - `NOTION_APPS_DB_ID`

## Current Status

✅ Code ready
✅ Git initialized
⏳ Waiting for deployment choice

Choose your option and I'll help you deploy!

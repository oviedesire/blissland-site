# Netlify Deployment Guide — Blissland Academy CMS

Complete step-by-step guide to deploy your school website to Netlify with full Netlify CMS functionality.

## Prerequisites

- GitHub account (you have this ✓)
- Netlify account (free at https://app.netlify.com/signup)
- Your project pushed to a GitHub repository

---

## Step 1: Create GitHub OAuth App

This allows Netlify CMS to authenticate with GitHub andcommit content changes automatically.

### 1.1 Go to GitHub Settings
- Log in to GitHub
- Click your profile icon → **Settings**
- Scroll left sidebar → **Developer settings**
- Click **OAuth Apps**
- Click **New OAuth App**

### 1.2 Register OAuth Application

Fill in the form:
- **Application name:** `Blissland Academy CMS`
- **Homepage URL:** `https://your-site.netlify.app` (use placeholder for now)
- **Authorization callback URL:** `https://api.netlify.com/auth/done`
- Click **Register application**

### 1.3 Copy Credentials

On the next page, you'll see:
- **Client ID** — Copy this ✓
- **Client Secret** — Click "Generate" and copy ✓

**Save these temporarily — you'll use them in Step 4.**

---

## Step 2: Push Code to GitHub

If you haven't already, initialize a Git repo and push to GitHub:

```bash
cd C:\Users\PRAISE\Documents\sch-web
git init
git add .
git commit -m "Initial commit: Blissland Academy with Netlify CMS"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/blissland-site.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

---

## Step 3: Connect to Netlify

### 3.1 Create Netlify Site
- Go to https://app.netlify.com
- Click **Add new site** → **Import an existing project**
- Choose **GitHub** as the provider
- Authorize Netlify to access your GitHub account
- Select your `blissland-site` repository

### 3.2 Configure Build Settings

Netlify should auto-detect these, but verify:
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- Click **Deploy site**

**Your site is now live!** You'll get a URL like: `https://xxx-xxx-xxx.netlify.app`

---

## Step 4: Enable Netlify Identity & Git Gateway

This enables Netlify CMS authentication without external services.

### 4.1 Enable Identity
- Go to your Netlify site dashboard
- Click **Site settings** → **Identity**
- Click **Enable Identity**
- Scroll to **Services** section
- Click **Enable Git Gateway**

### 4.2 Set Access Controls (Optional but Recommended)
- Under **Identity** → **Settings and usage**
- Set **Registration preferences** to:
  - **Invite only** (only you can register as editor)
- Click **Save**

---

## Step 5: Update admin/config.yml

Update the Netlify CMS config with your GitHub OAuth credentials and deployment URL.

Edit `admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR-USERNAME/blissland-site    # e.g., praise/blissland-site
  branch: main
  auth_type: implicit
  app_id: YOUR_CLIENT_ID               # From GitHub OAuth App (Step 1.3)

media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  - name: "news"
    label: "News"
    folder: "content/news"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "Excerpt", name: "excerpt", widget: "text" }
      - { label: "Cover Image", name: "cover", widget: "image" }
      - { label: "Body", name: "body", widget: "markdown" }

  - name: "gallery"
    label: "Gallery"
    folder: "content/gallery"
    create: true
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Image", name: "image", widget: "image" }
      - { label: "Caption", name: "caption", widget: "string", required: false }
```

**Important:** Replace:
- `YOUR-USERNAME` with your GitHub username
- `YOUR_CLIENT_ID` with the Client ID from Step 1.3

---

## Step 6: Deploy & Test

### 6.1 Commit Your Changes
```bash
git add admin/config.yml
git commit -m "Update CMS config with OAuth credentials"
git push
```

Netlify will auto-deploy (takes ~2-3 minutes).

### 6.2 Access the CMS

Once deployment completes:
1. Go to `https://your-site.netlify.app/admin/`
2. Click **Login with Netlify Identity**
3. Check your email for a verification link
4. Click the link and set your password
5. You're in! Start editing content.

---

## Step 7: Add Content via CMS

### 7.1 Add a News Article
- Go to **News** collection
- Click **New News**
- Fill in:
  - **Title:** Article title
  - **Date:** Publication date
  - **Excerpt:** Short summary
  - **Cover Image:** Upload or use existing
  - **Body:** Article content (Markdown)
- Click **Publish** → **Publish now**

Changes commit to GitHub automatically. Site rebuilds in ~2 minutes.

### 7.2 Add Gallery Images
- Go to **Gallery** collection
- Click **New Gallery**
- Fill in:
  - **Title:** Image name
  - **Image:** Upload photo
  - **Caption:** Optional description
- Click **Publish** → **Publish now**

---

## Troubleshooting

### CMS shows "Not Authenticated"
- Go to site **Identity** settings
- Ensure **Git Gateway** is enabled
- Check `app_id` in `admin/config.yml` matches GitHub OAuth Client ID

### Changes not showing on site
- Check Netlify **Deploys** tab for any failed builds
- Verify `admin/config.yml` has correct `repo` and `branch`
- Try clearing browser cache or opening in incognito

### Upload folder issues
- Ensure `public/uploads` directory exists locally
- If missing, create it: `mkdir public/uploads`
- Netlify CMS creates it automatically on first upload

### GitHub OAuth errors
- Verify GitHub OAuth App **Authorization callback URL** is: `https://api.netlify.com/auth/done`
- Double-check `app_id` (Client ID) is pasted correctly in `admin/config.yml`

---

## Additional Resources

- [Netlify CMS Docs](https://www.netlifycms.org/docs/intro/)
- [Netlify GitHub Integration](https://docs.netlify.com/integrations/github/)
- [Netlify Identity Docs](https://docs.netlify.com/security/getting-started/)

---

## Summary

✅ Site deployed and live on Netlify  
✅ Netlify CMS admin functional at `/admin/`  
✅ GitHub OAuth configured for secure authentication  
✅ Automatic Git commits on content changes  
✅ Media uploads to `public/uploads`  

You can now manage your school website content without touching code! 🎉

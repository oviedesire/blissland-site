# 🚀 Quick Netlify Deployment Checklist

Complete these steps in order to go live with Netlify CMS.

---

## ✅ 1. Initialize Git & Push to GitHub (5 min)

```bash
cd C:\Users\PRAISE\Documents\sch-web

# Initialize git
git init
git add .
git commit -m "Initial commit: Blissland Academy"
git branch -M main

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/blissland-site.git
git push -u origin main
```

**Replace `YOUR-USERNAME` with your GitHub username**

---

## ✅ 2. Create GitHub OAuth App

1. Go to **https://github.com/settings/developers**
2. Click **OAuth Apps** → **New OAuth App**
3. Fill form:
   - Name: `Blissland Academy CMS`
   - Homepage URL: `https://your-site.netlify.app` (temporary)
   - Authorization callback URL: **`https://api.netlify.com/auth/done`** (IMPORTANT!)
4. Click **Register application**
5. Copy:
   - **Client ID** → save it
   - **Client Secret** → click Generate and save it

---

## ✅ 3. Update admin/config.yml

Open `admin/config.yml` and replace:

```yaml
repo: GITHUB_USER/REPO         # → praise/blissland-site
app_id: "YOUR_GITHUB_OAUTH_CLIENT_ID"
```

With your actual values from Step 2.

Example:
```yaml
repo: praise/blissland-site
app_id: "a1b2c3d4e5f6g7h8"
```

---

## ✅ 4. Connect to Netlify

1. Go to **https://app.netlify.com**
2. Sign up/log in
3. Click **Add new site** → **Import an existing project**
4. Choose **GitHub**
5. Authorize Netlify
6. Select `blissland-site` repo
7. **Build settings should auto-fill:**
   - Build command: `npm run build`
   - Publish directory: `.next`
8. Click **Deploy site** (takes 2-3 min)

✅ **Your site is live!** You'll get a URL like: `https://xxx-xxx-xxx.netlify.app`

---

## ✅ 5. Enable Netlify Identity

1. In Netlify dashboard, go to **Identity** tab
2. Click **Enable Identity**
3. Scroll to **Services**
4. Click **Enable Git Gateway**

✅ **CMS is now ready!**

---

## ✅ 6. Use the CMS

### Access Admin
- Go to `https://your-site.netlify.app/admin/`
- Click **Login with Netlify Identity**
- Check email for verification link
- Set password and log in

### Add News
- Click **News** → **New News**
- Fill Title, Date, Excerpt, Cover Image, Body
- Click **Publish** → **Publish now**
- Site rebuilds automatically (2 min)

### Add Gallery Images
- Click **Gallery** → **New Gallery**
- Fill Title, Image, Caption
- Click **Publish** → **Publish now**

---

## 📝 Update OAuth Callback (If site URL changes)

Once Netlify gives you a permanent domain, update GitHub OAuth App:

1. Go to **https://github.com/settings/developers**
2. Click your OAuth app
3. Update **Homepage URL** to your new domain
4. No changes needed to callback URL (stays as `https://api.netlify.com/auth/done`)

---

## ❓ Having Issues?

See **DEPLOYMENT.md** for detailed troubleshooting and full documentation.

---

✨ **Done!** Your school website is live with a fully functional content management system!

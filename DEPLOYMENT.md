# Vercel Deployment Guide

This project is configured for automated deployment to Vercel.

## Deployment Methods

### Method 1: GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to Vercel when code is pushed.

#### Setup Steps:

1. **Get your Vercel credentials:**
   - Go to https://vercel.com/account/tokens
   - Create a new token and copy it

2. **Get your Vercel Project IDs:**
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Login to Vercel
   vercel login

   # Link your project
   vercel link
   ```

   After linking, you'll find:
   - `VERCEL_ORG_ID` in `.vercel/project.json`
   - `VERCEL_PROJECT_ID` in `.vercel/project.json`

3. **Add GitHub Secrets:**
   - Go to your GitHub repository settings
   - Navigate to Settings > Secrets and variables > Actions
   - Add three secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `VERCEL_ORG_ID`: Your Vercel organization ID
     - `VERCEL_PROJECT_ID`: Your Vercel project ID

4. **Push your code:**
   ```bash
   git push origin your-branch
   ```

### Method 2: Vercel Dashboard (Easiest)

1. Go to https://vercel.com/dashboard
2. Click "Add New Project"
3. Import your GitHub repository: `lukketsvane/Robustiverfinneno`
4. Vercel will automatically detect the configuration from `vercel.json`
5. Click "Deploy"

### Method 3: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Project Configuration

The project is configured with:
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Framework:** Vite + React

## Vercel Configuration

The `vercel.json` file includes:
- Custom build settings
- SPA routing configuration (all routes redirect to index.html)

## Build Locally

To test the build locally before deploying:

```bash
npm install
npm run build
```

The build output will be in the `build/` directory.

## Troubleshooting

- **Authentication Error:** Run `vercel login` or set up GitHub Actions secrets
- **Build Fails:** Ensure all dependencies are installed with `npm install`
- **Routes Not Working:** The `vercel.json` includes rewrite rules for SPA routing

# GitHub Actions Deployment

This directory contains the GitHub Actions workflow for automatically building and deploying the Peoples United prototype application.

## Workflow Overview

The deployment process consists of two jobs:

### 1. Build Job (`build`)

- **Triggers**: On every push to `main` branch and on pull requests
- **Actions**:
  - Checks out the code
  - Sets up Node.js 20 with npm caching
  - Installs dependencies with `npm ci`
  - Runs ESLint for code quality checks
  - Builds the main React application (`npm run build`)
  - Builds Storybook documentation (`npm run build-storybook`)
  - Creates a deployment structure combining both builds
  - Uploads build artifacts for the deploy job

### 2. Deploy Job (`deploy`)

- **Triggers**: Only on pushes to `main` branch (after successful build)
- **Dependencies**: Requires the `build` job to complete successfully
- **Actions**:
  - Downloads the build artifacts from the build job
  - Configures GitHub Pages
  - Uploads the combined build to GitHub Pages
  - Deploys to the GitHub Pages environment

## Deployment Structure

The deployed site includes:

- **Landing Page**: Navigation page at the root URL (`/`)
- **Main App**: Available at `/app/`
- **Storybook**: Available at `/storybook/`

## Required Repository Settings

To enable this workflow, ensure your repository has:

1. **GitHub Pages enabled**:

   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Workflow permissions**:
   - Go to Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

## Environment

The deploy job uses the `github-pages` environment, which provides:

- Deployment protection rules (if configured)
- Environment-specific secrets and variables
- Deployment history and rollback capabilities

## Monitoring

You can monitor deployments in:

- **Actions tab**: View workflow runs and logs
- **Environments**: View deployment history and status
- **Pages settings**: View current deployment status and URL

## Troubleshooting

Common issues and solutions:

- **Build failures**: Check the build job logs for dependency or compilation errors
- **Deploy failures**: Ensure GitHub Pages is enabled and workflow permissions are correct
- **Missing files**: Verify the deployment structure creation step includes all necessary files

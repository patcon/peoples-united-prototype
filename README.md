# UnitedPeoples

## Purpose and Goals

**UnitedPeoples** is a prototype application designed to bring people together through digital collaboration and community building. This project serves as a foundation for exploring modern web technologies and user interface patterns that facilitate meaningful connections and collective action.

The goal is to create an intuitive, accessible platform that empowers communities to organize, communicate, and work together effectively in the digital space.

## Technologies Used

This project is built with modern web technologies:

- **React** (v19.1.1) - A JavaScript library for building user interfaces with component-based architecture
- **ShadCN/UI** - A collection of reusable components built using Radix UI and Tailwind CSS
- **Vite** (v7.1.7) - A fast build tool and development server that provides instant hot module replacement
- **Storybook** (v9.1.13) - A tool for building UI components in isolation, enabling component-driven development

### Additional Development Tools

- **ESLint** - Code linting and formatting

## Development

### Storybook

This project uses Storybook for component development and documentation. Storybook allows you to:

- Develop UI components in isolation
- Test different component states and props
- Document component APIs and usage examples
- Perform visual testing and accessibility checks

### Available Commands

```bash
# Start the development server
npm run dev

# Build the application for production
npm run build

# Preview the production build
npm run preview

# Run the linter
npm run lint

# Start Storybook development server
npm run storybook

# Build Storybook for deployment
npm run build-storybook
```

### Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open Storybook for component development:
   ```bash
   npm run storybook
   ```

The main application will be available at `http://localhost:5173` and Storybook at `http://localhost:6006`.

## Deployment

This project is configured with automated deployment using GitHub Actions. Every commit to the `main` branch triggers a build and deployment process.

### GitHub Actions Workflow

The deployment process consists of two jobs:

1. **Build Job**:

   - Installs dependencies
   - Runs linting checks
   - Builds both the main application and Storybook
   - Creates a unified deployment structure
   - Uploads build artifacts

2. **Deploy Job**:
   - Downloads build artifacts
   - Deploys to GitHub Pages

### Deployed Structure

When deployed, the site includes:

- **Landing Page**: Navigation page at the root URL (`/`)
- **Main App**: Available at `/app/`
- **Storybook**: Available at `/storybook/`

### Setup Requirements

To enable deployment for your repository:

1. **Enable GitHub Pages**:

   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Configure Workflow Permissions**:
   - Go to Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

For detailed deployment documentation, see [`.github/README.md`](.github/README.md).

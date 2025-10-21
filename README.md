# Peoples United

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

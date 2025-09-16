# Overview

This is a full-stack web application for "Remy's Café," a Pixar Ratatouille-themed French café website. The application features a modern React frontend with a Node.js/Express backend, showcasing café menu items, location information, and French-inspired design elements. The project uses a modular architecture with shared schemas and a clean separation between client and server code.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring French café-inspired color schemes (gold, navy, wine colors)
- **UI Components**: Comprehensive component library based on Radix UI primitives with shadcn/ui styling system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Design System**: Custom theme with French typography (Playfair Display, Lora, Dancing Script fonts) and café-specific color palette

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Setup**: Hot reloading with Vite integration in development mode
- **Error Handling**: Centralized error middleware with structured error responses
- **Logging**: Custom request/response logging with duration tracking for API endpoints

## Data Storage
- **Database**: PostgreSQL configured for production use
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Shared schema definitions between client and server using Drizzle with Zod validation
- **Development Storage**: In-memory storage implementation for development/testing
- **Migration System**: Drizzle Kit for database schema migrations

## Project Structure
- **Monorepo Design**: Single repository with clearly separated client, server, and shared code
- **Shared Types**: Common TypeScript interfaces and schemas in `/shared` directory
- **Component Organization**: Modular React components with separate UI component library
- **Build System**: Separate build processes for frontend (Vite) and backend (esbuild)

## Authentication & Session Management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **User Management**: Basic user schema with username/password authentication structure
- **Database Integration**: Neon Database serverless PostgreSQL for cloud deployment

## Development Tools
- **Type Safety**: Comprehensive TypeScript configuration across all modules
- **Code Quality**: Path aliases for clean imports and consistent code organization
- **Development Experience**: Replit-specific plugins for enhanced development workflow
- **Hot Reloading**: Vite HMR integration with Express server in development

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support

## UI Framework & Styling
- **Radix UI**: Comprehensive set of accessible UI primitives for React
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography

## Development & Build Tools
- **Vite**: Frontend build tool and development server with React plugin
- **esbuild**: Fast bundler for server-side code compilation
- **TSX**: TypeScript execution environment for development

## Form Handling & Validation
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation library integrated with Drizzle
- **Hookform Resolvers**: Integration layer between React Hook Form and validation schemas

## Fonts & Typography
- **Google Fonts**: Custom French-themed font integration (Playfair Display, Lora, Dancing Script)
- **Font Optimization**: Preconnection and selective font loading for performance

## Replit Integration
- **Development Plugins**: Replit-specific Vite plugins for enhanced development experience
- **Error Handling**: Runtime error modal overlay for development debugging
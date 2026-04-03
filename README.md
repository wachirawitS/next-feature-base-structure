## 📁 Feature-Based Directory Structure

To maintain a scalable and easily navigable codebase, this project strictly follows a **Feature-Based Architecture** (Domain-Driven UI). Instead of grouping files by their type (e.g., putting all components in one massive folder), we group them by their **Business Domain** (e.g., `claims`, `users`).

Here is a high-level overview of the structure:

```text
src/
├── app/                      # 🛣️ Next.js App Router (Routing & Layouts only)
│   └── dashboard/
│       └── claims/
│           └── page.tsx      # Entry point. Keeps routing decoupled from logic.
├── components/               # 🧩 Global Shared Components
│   ├── ui/                   # Pure/Dumb UI components (e.g., Shadcn UI Button, Table)
│   └── shared/               # Reusable components across features (e.g., GlobalPagination)
├── features/                 # ⭐️ Core Domain Modules (The heart of the app)
│   ├── claims/               # Domain: Claims
│   │   ├── components/       # UI specific to Claims (e.g., claim-table.tsx)
│   │   ├── hooks/            # Feature-specific state/logic (e.g., use-claims.ts)
│   │   ├── services/         # API calls and data fetching
│   │   ├── types/            # TypeScript interfaces for this domain
│   │   └── index.ts          # 🚪 The "Gatekeeper" (Public API Export)
│   └── users/                # Domain: Users
├── middleware.ts             # Programmatic redirects based on incoming request properties     
├── lib/                      # 🛠️ Global Utilities (e.g., cn(), axios client)
└── types/                    # 🏷️ Global Types (e.g., API Responses, BaseEntity)
```

### 🏷️ Naming Conventions

To maintain consistency, improve readability, and avoid OS-level case-sensitivity issues across the team, we strictly follow these naming standards:

- **Files and Folders:** Use `kebab-case` for ALL files and directories. 
  - *Example:* `user-select.tsx`, `use-claims.ts`, `claim-list-view.tsx`
- **Variables and Functions:** Use `camelCase`.
  - *Example:* `const userData`, `function calculateTotal()`, `const isModalOpen`
- **Components and Types/Interfaces:** Use `PascalCase` for React Component declarations and TypeScript types.
  - *Example:* `export function UserSelect()`, `interface ClaimDetail`, `type UserRole`
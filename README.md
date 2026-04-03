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
│   │   ├── components/       # UI specific to Claims (e.g., ClaimTable, ClaimStatusBadge)
│   │   ├── hooks/            # Feature-specific state/logic (e.g., useClaims)
│   │   ├── services/         # API calls and data fetching
│   │   ├── types/            # TypeScript interfaces for this domain
│   │   └── index.ts          # 🚪 The "Gatekeeper" (Public API Export)
│   └── users/                # Domain: Users
├── proxy.ts                  # Programmatic redirects based on incoming request properties     
├── lib/                      # 🛠️ Global Utilities (e.g., cn(), axios client)
└── types/                    # 🏷️ Global Types (e.g., API Responses, BaseEntity)
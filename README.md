📝 NoteHub - Advanced Routing & Notes Management
NoteHub is a modern note management application built with Next.js (App Router). This project demonstrates advanced routing techniques, a mix of Server and Client Components, and efficient data synchronization.

🚀 Key Features
Tag Filtering: Leverages Parallel Routes (@sidebar) to create an independent navigation menu for filtering notes.

Dynamic Route Handling: Uses Catch-all / Dynamic routes (/notes/filter/[tag]) to manage note categories and server-side logic.

Note Preview (Modal): Implements Intercepting Routes ((.)[id]) to open note details in a modal overlay, maintaining the background state and URL context.

Hybrid Rendering (SSR + CSR): Combines TanStack Query prefetching on the server with client-side hydration for a seamless user experience.

Search & Pagination: Features a debounced search bar and interactive pagination to handle large datasets efficiently.

Custom 404 Page: A dedicated "Not Found" page for handling invalid URLs.

🛠 Tech Stack
Framework: Next.js (App Router)

Language: TypeScript

State Management & Fetching: TanStack Query (React Query) & Axios

Styling: CSS Modules

Utility: use-debounce, react-hot-toast

Formatting: Prettier

To expand the Project Structure section based on your folder hierarchy, you can use this detailed breakdown. It clearly explains what each Next.js specific folder (Slots and Intercepting Routes) is doing in your project.

🔗 Live Demo
You can view the live version of the project here:

NoteHub on Vercel ((https://07-routing-nextjs-mtcf.vercel.app/))

🛠 Deployment Steps on Vercel:
Push your code to your GitHub repository.

Import the project into the Vercel Dashboard.

Configure your Environment Variables (like NEXT_PUBLIC_API_URL) if applicable.

Vercel will automatically build and deploy your App Router project.

📁 Project Structure
The project follows a modular Next.js App Router structure, utilizing advanced routing patterns for a seamless user experience:

Plaintext
/app
├── notes/
│ ├── [id]/ # Hard-navigation route for note details
│ ├── @modal/ # Parallel Slot for the note preview modal
│ │ └── (.)[id]/ # Intercepting Route to show modal on soft-nav
│ └── filter/
│ ├── [tag]/ # Dynamic route for tag-based note lists
│ └── @sidebar/ # Parallel Slot for the category navigation
│ └── page.tsx # Sidebar content (Notes filter menu)
├── components/ # Reusable UI components
├── lib/ # API utilities and Axios configurations
└── types/ # TypeScript type definitions (e.g., NoteTag)

🔑 Key Routing Concepts Used:
Parallel Routes (@modal, @sidebar): Used to render multiple pages simultaneously in the same layout (e.g., showing the Sidebar alongside the Note List).

Intercepting Routes ((.)[id]): Allows the application to load a route inside a modal when navigating from the list, while still allowing a full-page reload at the same URL to show the standalone detail page.

Dynamic Segments ([id], [tag]): Enables the application to handle unique IDs for notes and various category tags dynamically.

Default Files (default.tsx): Essential for Parallel Routes to provide a fallback when a slot does not have a matching route during navigation.
🔧 Installation & Setup
Clone the repository:

Bash
git clone https://github.com/your-username/07-routing-nextjs.git
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
View the app:
Navigate to http://localhost:3000.

📜 Technical Notes
Route Redirection: The application automatically redirects users from /notes to /notes/filter/all.

Type Safety: Strict TypeScript implementation using Type Assertions (as NoteTag) to handle dynamic URL parameters safely.

Hydration: Used HydrationBoundary and dehydrate to ensure data is available immediately upon page load without flickering.

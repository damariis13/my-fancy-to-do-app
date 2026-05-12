# My Fancy To-Do List

A small, pink-themed to-do list built with React 19, Vite, and Tailwind CSS v4. Tasks persist in the browser via `localStorage`, so they survive a page refresh.

**Live demo:** [my-fancy-to-do-app-tjuj.vercel.app](https://my-fancy-to-do-app-tjuj.vercel.app/)

## Features

- Add tasks with the **Add** button or by pressing **Enter**.
- Mark tasks as complete (strikethrough effect).
- Delete tasks individually.
- Tasks persist across page reloads using `localStorage`.
- Responsive, accessible-friendly UI with Tailwind CSS.

## Tech stack

| Layer | Tool |
|---|---|
| UI library | [React 19](https://react.dev/) |
| Build tool | [Vite](https://vite.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Linting | [ESLint](https://eslint.org/) |
| Hosting | [Vercel](https://vercel.com/) |

## Running locally

Requires Node.js 18+ and npm.

```bash
git clone https://github.com/damariis13/to-do-app.git
cd to-do-app
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Other scripts

```bash
npm run build     # production build into ./dist
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
├── App.jsx                  # Root component, owns state and handlers
├── main.jsx                 # React entry point
├── index.css                # Tailwind import + global styles
└── components/
    ├── ToDoForm.jsx         # Input + submit (owns its own input state)
    └── ToDoItem.jsx         # Single task row (checkbox, text, delete)
```

## Architecture notes

- **State lives in `App`.** The list of todos is the single source of truth.
- **`ToDoForm` co-locates its own input state.** `App` only finds out about the text when the user submits — not on every keystroke.
- **`ToDoItem` is presentational.** It holds no state and only emits events upward via `onToggleComplete` and `onDeleteToDo` callbacks.
- **Persistence with `useEffect`.** A single effect synchronizes the `todos` array to `localStorage` whenever it changes. The initial state is lazily loaded from `localStorage` on first render.

## Roadmap

- [ ] Filter tasks (All / Active / Completed)
- [ ] Edit a task inline (double-click)
- [ ] Reorder tasks with drag-and-drop
- [ ] Unit and integration tests with Vitest + React Testing Library

## License

MIT

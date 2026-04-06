# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**나의 버킷 리스트** - A vanilla JavaScript web application for managing personal bucket list goals. No build tools, no framework dependencies, client-side only using LocalStorage for persistence.

## Architecture & Code Structure

### Separation of Concerns
- **`js/storage.js`** - Data layer: All LocalStorage CRUD operations (load/save/add/update/delete/filter/stats)
- **`js/app.js`** - UI layer: DOM manipulation, event handling, rendering using `BucketListApp` class
- **`css/styles.css`** - Animations and responsive design (supplements Tailwind CSS)
- **`index.html`** - Single page with semantic HTML, Tailwind CSS CDN, and script loaders

### Data Flow Pattern
1. User interaction → App method calls
2. App delegates to `BucketStorage` module
3. Storage updates `localStorage['bucketList']` (JSON array)
4. App calls `render()` to update DOM
5. `updateStats()` recalculates and displays metrics

### Key Design Patterns
- **Module Pattern** (storage.js): Object literal with private data via closure
- **Class-based UI** (app.js): Single `BucketListApp` instance managing all interactions
- **DOM Caching**: All DOM refs stored in `cacheElements()` for performance
- **Event Delegation**: Filter buttons use click listeners with `data-filter` attributes
- **HTML Escaping**: `escapeHtml()` prevents XSS from user input

### Data Model
```javascript
{
  id: "1730880000000",        // timestamp-based unique ID
  title: "Goal description",   // user input (XSS-safe)
  completed: boolean,          // toggle state
  createdAt: "2025-11-06",    // ISO date string
  completedAt: null            // ISO date or null
}
```

## Getting Started

### Running the App
- **Direct**: Double-click `index.html` or open in browser
- **Live Server** (VS Code): Right-click `index.html` → "Open with Live Server"
- **Python Server**: `python -m http.server 8000` → visit `http://localhost:8000`

No build step, no dependencies, no server required.

## Common Development Tasks

### Adding New Features
1. **New data field** → Add to model in `storage.js` → Update rendering in `app.js`
2. **New filter type** → Extend `getFilteredList()` switch case → Add filter button in HTML
3. **New UI element** → Create in HTML → Cache in `cacheElements()` → Bind events in `bindEvents()`

### Important Files to Modify
- **New CRUD operations**: Modify `BucketStorage` object in `storage.js`
- **New UI interactions**: Add handlers to `BucketListApp` class in `app.js`
- **Styling changes**: Use Tailwind classes in HTML or add to `css/styles.css`

### Testing Your Changes
- Open `index.html` in browser
- Use browser DevTools Console for debugging: `BucketStorage.load()` to inspect data
- Check Application > LocalStorage to verify persistence
- Test on different screen sizes (DevTools → Toggle Device Toolbar)

## Important Implementation Details

### XSS Protection
User input from title fields is escaped via `escapeHtml()` before rendering. Always use this when displaying user-provided text.

### LocalStorage Safety
All storage operations wrapped in try-catch. Check console for errors if data fails to load/save (rare, but can happen if storage quota exceeded).

### Responsive Design Breakpoints
- Mobile (≤640px): Single column, buttons stack
- Tablet (641px-1023px): Optimized spacing
- Desktop (≥1024px): Full width with padding

### Animation Performance
Use CSS animations in `styles.css` (slideIn for new items, fadeIn for modals). Avoid JavaScript animation loops.

## Browser Compatibility

Requires modern browser with:
- ES6+ support (arrow functions, template literals, const/let)
- LocalStorage API
- Fetch/Promise support (if adding API calls in future)

Tested: Chrome, Firefox, Safari, Edge (latest versions)

## Future Enhancement Considerations

Planned features listed in README.md. When implementing:
- Keep storage.js focused on data operations (no DOM coupling)
- Keep app.js focused on UI (no direct localStorage calls)
- New fields should be nullable in data model for backwards compatibility
- Consider adding export/import for data persistence beyond LocalStorage

## Code Style Notes

- HTML uses Tailwind utility classes for consistency
- JavaScript uses `camelCase` for variables and methods
- Comments in Korean for developer clarity
- String templates for dynamic HTML (not `createElement`)
- Event handlers attached to global `app` instance for debugging

---

**Last Updated**: 2026-03-17

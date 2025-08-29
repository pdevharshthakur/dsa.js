# Setup & Running Guide

## Prerequisites

- **Node.js** (v14 or higher)
- **pnpm** (recommended) or npm (then delete the lockfile)

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd DSA
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

## Running the Project

### Execute Algorithms

```bash
# Run bubble sort example
node sorting/bubbleSort.js
```

### Code Formatting

```bash
# Format all code files
pnpm format

# Check if code is properly formatted
pnpm format:check
```

## Project Structure

```
DSA/
├── sorting/           # Sorting algorithms
│   └── bubbleSort.js  # Bubble sort implementation
├── md/               # Algorithm documentation
│   └── sorting/
│       └── bubbleSort.md
├── package.json      # Dependencies and scripts
├── .prettierrc      # Code formatting rules
└── .prettierignore  # Files to exclude from formatting
```

## Available Scripts

| Command                      | Description                           |
| ---------------------------- | ------------------------------------- |
| `pnpm format`                | Format all code files with Prettier   |
| `pnpm format:check`          | Check if files are properly formatted |
| `node sorting/bubbleSort.js` | Run bubble sort algorithm             |

## Development Workflow

1. **Make changes** to algorithm files
2. **Format code** with `pnpm format`
3. **Test your changes** by running the algorithm
4. **Update documentation** in the `md/` folder
5. **Commit changes** with descriptive messages

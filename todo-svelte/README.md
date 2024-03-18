# Simple Todo List

Simple Todo List is a Svelte-based web application designed to help users manage their tasks. It features a clean interface for adding, viewing, and marking tasks as completed. The app is built around three main components: `AddTodoForm`, `Title`, and `TodoList`, making it easy to maintain and extend.

## Features

- **Add Tasks**: Easily add tasks to todo list with the `AddTodoForm` component.
- **Organize Tasks**: View and organise tasks with the `TodoList` component, differentiating between pending and completed tasks.
- **Interactive UI**: User-friendly interface, including prompts for task addition and the ability to mark tasks as done.

## Components

### `AddTodoForm`

This component allows users to input new tasks. It captures user input and, upon pressing the Enter key or clicking the "Add Todo" button, adds a new task to the list. Input is trimmed to ensure no leading or trailing spaces.

### `Title`

Displays the main title and subtitle of the application. This component can be easily customized to change the app's title and subtitle.

### `TodoList`

Renders a list of todo items, each with a task description and a timestamp. It also includes a "Done" button for each task, allowing users to mark tasks as completed. This component accepts a list of tasks (`items`) and a deletion handler (`deleteHandler`) to manage task completion.

## Getting Started

Follow these steps to run Simple Todo List locally:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.

## Usage

1. **Adding a Task**: Type in the task in the input field and press Enter or click the "Add Todo" button.
2. **Viewing Tasks**: Tasks are automatically listed under "Things yet to do" or "Things that are done" based on their status.
3. **Completing a Task**: Click the "Done" button next to a task to mark it as completed.

## License

This project is open-source and available under the MIT license.

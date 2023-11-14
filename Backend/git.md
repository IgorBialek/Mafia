# Express.js with TypeScript GitHub Commit Rules

## Overview

This document outlines the rules and conventions to follow when making commits to the Express.js with TypeScript project hosted on GitHub. These rules are designed to ensure consistency and clarity in our version control history and to facilitate semantic versioning.

### Commit Message Format

Commits must follow the Conventional Commits format. Each commit message should be structured as follows:

```
<type>(<scope>): <message>
```

- **type**: Describes the purpose of the commit. It can be one of the following:
  - `feat`: A new feature or functionality.
  - `fix`: A bug fix.
  - `chore`: Routine tasks, maintenance, or tooling changes.
  - `docs`: Documentation updates.
  - `style`: Code style or formatting changes.
  - `test`: Adding or modifying tests.
  - `rework`: Significant code rework or refactoring.
- **scope**: Describes the module, component, or part of the code that is affected by the commit (optional but encouraged).
- **message**: A brief and concise description of the change.

### Examples

Here are some examples of valid commit messages:

- `feat(user-auth): Add user authentication endpoint`
- `fix(validation): Handle input validation errors`
- `docs(readme): Update project documentation`
- `style(formatting): Refactor code for consistent formatting`
- `test(api): Add unit tests for API routes`
- `rework(auth): Rework authentication logic`

## Commit Message Rules

1. **Use Imperative Mood**: Start the message with an imperative verb. For example, use "Add," "Fix," "Update," "Refactor," etc.

2. **Limit Line Length**: Keep the commit message line length under 72 characters.

3. **Capitalization**: Capitalize the first letter of the commit message.

4. **End with a Period**: End the commit message with a period.

5. **Use Scope When Appropriate**: If the change affects a specific module, component, or part of the code, include a scope in parentheses.

## Semantic Versioning

We follow semantic versioning (semver). To determine the version number for a release, follow these guidelines:

- Increment the MAJOR version for incompatible changes or breaking changes.
- Increment the MINOR version for new features or non-breaking changes.
- Increment the PATCH version for bug fixes or minor improvements.

## Pull Request and Code Review

When creating a pull request, make sure to reference the issue it addresses (if applicable). Code reviews will ensure that the commit rules and conventions are followed. Commits should be squashed and rebased before merging if necessary.

## Example Workflow

1. Create a new branch for your feature or bug fix: `git checkout -b feat/my-feature`
2. Make your changes and commit following the commit message format.
3. Push the branch to GitHub: `git push origin feat/my-feature`
4. Create a pull request, reference the issue it addresses, and request a code review.
5. Address feedback and make necessary changes.
6. Squash and rebase your commits if required.
7. Merge the pull request when approved.

By adhering to these commit rules, we can maintain a clean and organized project history, making it easier to track changes and manage releases.

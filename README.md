# Task CLI

A minimal command-line task manager. Tasks persist to a local `tasks.json` file between runs.

## Install

```bash
git clone https://github.com/Moises-its/CLI.git
cd CLI
```

No dependencies — runs on Node.js out of the box.

## Usage

```
node tasks.js <command> [argument]
```

### Commands

**`add <text>`** — Add a new task

```
$ node tasks.js add "Write project README"
```

**`list`** — Show all tasks with status and date added

```
$ node tasks.js list
 [ ] 1 Write project README (added 6/8/2026)
 [ ] 2 Push to GitHub (added 6/8/2026)

 2 tasks, 0 completed
```

**`complete <id>`** — Mark a task as done

```
$ node tasks.js complete 1
$ node tasks.js list
 [x] 1 Write project README (added 6/8/2026)
 [ ] 2 Push to GitHub (added 6/8/2026)

 2 tasks, 1 completed
```

**`delete <id>`** — Remove a task by ID

```
$ node tasks.js delete 2
```

**`clear`** — Remove all tasks

```
$ node tasks.js clear
```

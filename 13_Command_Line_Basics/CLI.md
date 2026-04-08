# 🧑‍💻 Command Line Basics

---

## 📍 Basic Commands

- `pwd` → Shows the current working directory.
- `ls` → Lists files and folders in the current directory.
- `ls ..` → Lists files in the parent directory.
- `cd` → Changes the current directory.
- `clear` → Clears the terminal screen.

---

## 🌳 File Navigation

- `cd ../new_directory` → Moves up one level, then enters `new_directory`.

---

## 📄 Create & Delete Files

### 🆕 Create Files

**Linux / macOS (or Git Bash):**
- `touch new_file.txt` → Creates a new empty file.
- `touch ../new_file.txt` → Creates a file in the parent directory.

**PowerShell (VS Code Terminal):**
- `New-Item new_file.txt` → Creates a new file.
- `ni new_file.txt` → Short alias for `New-Item`.

---

### 🗑️ Delete Files

**Linux / macOS (or Git Bash):**
- `rm new_file.txt` → Deletes a file.

**PowerShell (VS Code Terminal):**
- `Remove-Item new_file.txt` → Deletes a file.
- `rm new_file.txt` → Alias for `Remove-Item`.

---

## 📁 Create & Delete Directories

- `mkdir new_folder` → Creates a new directory.
- `rmdir new_folder` → Deletes an empty directory only.
- `rm -r new_folder` → Deletes a directory and its contents.

---

## ✍️ Write to Files

- `echo 'Hello, Adnan!' > hello.txt` → Writes text to a file (overwrites).
- `>` → Overwrites existing content.
- `>>` → Appends new content to the file.

---

## 📖 Read from Files

- `cat hello.txt` → Displays file content.
- `cat hello.txt > hello_copy.txt` → Copies content into a new file.
- If the file doesn't exist, `cat` + `>` will create it.

---

## 🧠 Learning_outcomes

- The CLI as a powerful tool for development.
- Navigating the file system: `pwd`, `ls`, `cd`, `..`
- Creating files/folders: `touch`, `mkdir`
- Deleting: `rm`, `rmdir`, `rm -r`
- Writing to files: `echo`
- Reading files: `cat`
- Redirecting & appending: `>`, `>>`

---

## ⚡ Tips

- PowerShell and Linux commands are similar but not always identical.
- VS Code terminal can run different shells (PowerShell, Bash, etc.).
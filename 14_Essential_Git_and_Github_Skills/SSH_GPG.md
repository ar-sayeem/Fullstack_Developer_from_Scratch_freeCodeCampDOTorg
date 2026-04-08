# SSH & GPG Keys — A Developer's Guide

> Secure, verifiable, and encrypted communication starts with understanding public/private key cryptography.

---

## 🔐 Public/Private Key Cryptography

Public/private key pairs are the foundation of modern secure communication. They use **asymmetric encryption** — a mathematical system where:

- The **Public Key** can be freely shared with anyone
- The **Private Key** must be kept secret, never leaving your machine

| Key | Where It Lives | Purpose |
|-----|---------------|---------|
| Public Key | Remote servers, GitHub, keyservers | Encrypts data / verifies identity |
| Private Key | Your local machine only | Decrypts data / proves identity |

**How it works:** Data encrypted with a public key can only be decrypted by the matching private key — ensuring high confidence that communication is both private and authentic.

---

## 🔑 SSH Keys — Secure Remote Access

SSH (Secure Shell) keys are used to **authenticate** connections to remote servers and services without typing a password.

### Why SSH Keys?

- Passwords can be guessed, phished, or brute-forced
- SSH keys use cryptographic proof — no password travels over the network
- Enables seamless, automated access (e.g., CI/CD pipelines, deployments)

### Common Use Cases

- Connecting to Linux/cloud servers: `ssh user@your-server.com`
- Pushing/pulling code on GitHub or GitLab without password prompts
- Automating secure file transfers between systems

### Quick Setup

```bash
# Generate an ED25519 key (recommended)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy your public key to a remote server
ssh-copy-id user@your-server.com

# Add your key to the SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

---

## 🛡️ GPG Keys — Identity & Encryption

GPG (GNU Privacy Guard) keys serve two distinct purposes: **signing** and **encrypting** data.

### 1. Signing — Proving Authenticity

When you sign a Git commit with your GPG key, others can verify the commit genuinely came from you.

- GitHub displays a ✅ **Verified** badge on signed commits
- Prevents commit impersonation or tampering in history

```bash
# Sign a commit
git commit -S -m "feat: add user authentication"

# Configure Git to sign all commits by default
git config --global commit.gpgsign true
```

### 2. Encrypting — Protecting Data

GPG lets you encrypt files or messages so only the intended recipient (who holds the matching private key) can read them.

```bash
# Encrypt a file for a recipient
gpg --encrypt --recipient "recipient@email.com" secret.txt

# Decrypt a file
gpg --decrypt secret.txt.gpg
```

### Quick Setup

```bash
# Generate a GPG key
gpg --full-generate-key

# List your GPG keys
gpg --list-secret-keys --keyid-format=long

# Export your public key (to add to GitHub)
gpg --armor --export YOUR_KEY_ID
```

---

## 📊 SSH vs GPG — At a Glance

| Feature | SSH Key | GPG Key |
|---------|---------|---------|
| **Primary Use** | Authentication / Access | Signing & Encryption |
| **Used With** | Remote servers, GitHub SSH | Git commits, files, emails |
| **Analogy** | A door key | A signature + sealed envelope |
| **GitHub Feature** | Clone/push via SSH | Verified commit badge |

---

## 💡 Why Contribute Frequently?

Frequent, small commits are a best practice in version control for several reasons:

- **Easier debugging** — isolate exactly when and where a bug was introduced
- **Cleaner history** — makes code reviews faster and more focused
- **Safer rollbacks** — revert a small change without losing days of work
- **Better collaboration** — reduces merge conflicts by staying in sync with teammates
- **Builds accountability** — a verified, signed commit history you can be proud of

---

## ✅ What Should You Commit?

**Commit when you have a single, logical unit of work complete.** Ask yourself: *"Can I describe this change in one clear sentence?"*

### Commit These ✔️

- A new feature or component
- A bug fix (one bug per commit)
- A refactor that improves readability without changing behavior
- Updated tests or documentation
- Configuration changes

### Don't Commit These ✖️

- Broken or half-finished code (use `git stash` instead)
- Sensitive data — API keys, passwords, private keys
- Unrelated changes bundled together
- Large binary files (use Git LFS if needed)

### Good Commit Message Format

```
<type>: <short description>

[optional body — explain WHY, not what]
```

**Examples:**
```
feat: add SSH key setup instructions
fix: correct GPG signing config for Windows
docs: update README with contribution guidelines
```

---

## 🔗 Resources

- [GitHub Docs — SSH Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [GitHub Docs — GPG Signing](https://docs.github.com/en/authentication/managing-commit-signature-verification)
- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [GPG Official Documentation](https://gnupg.org/documentation/)

---

*Last updated: April 2026*
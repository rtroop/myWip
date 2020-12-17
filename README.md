Initialized empty Git repository in C:/Users/rtroo/Desktop/myWip/.git/
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   .git_history.txt
	new file:   .gitignore
	new file:   README.md
	new file:   file0.txt
	new file:   file1.txt
	new file:   file2.txt
	new file:   file3.txt
	new file:   file4.txt
	new file:   file5.txt
	new file:   file6.txt
	new file:   file7.txt
	new file:   file8.txt
	new file:   file9.txt
	new file:   secrets.txt
$ git commit -m "First commit"
[main (root-commit) 298a7dd] First commit
 14 files changed, 194 insertions(+)
 create mode 100644 .git_history.txt
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 file0.txt
 create mode 100644 file1.txt
 create mode 100644 file2.txt
 create mode 100644 file3.txt
 create mode 100644 file4.txt
 create mode 100644 file5.txt
 create mode 100644 file6.txt
 create mode 100644 file7.txt
 create mode 100644 file8.txt
 create mode 100644 file9.txt
 create mode 100644 secrets.txt

commit 298a7dd2f509c24d794b51395adebfb19e7d6b60
Author: rtroo <rtroop0920@gmail.com>
Date:   Tue Dec 15 04:15:49 2020 -0800

    First commit
git remote add origin https://github.com/rtroop/myWip.git

$ git push -u origin main
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (10/10), 2.16 KiB | 1.08 MiB/s, done.
Total 10 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/rtroop/myWip.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.

| git branch feature|
|   feature|
| * main|
commit 81ab74585dbcca7aa14ab7c77e8a283b0acef463
Author: rtroo <rtroop0920@gmail.com>
Date:   Tue Dec 15 04:43:26 2020 -0800

    Make new branch: feature

commit dd3af7947833316756fcc4d869bf9438e2a43689
Author: rtroo <rtroop0920@gmail.com>
Date:   Tue Dec 15 04:22:50 2020 -0800

    update README.md

commit 298a7dd2f509c24d794b51395adebfb19e7d6b60
Author: rtroo <rtroop0920@gmail.com>
Date:   Tue Dec 15 04:15:49 2020 -0800

    First commit
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone             Clone a repository into a new directory
   init              Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add               Add file contents to the index
   mv                Move or rename a file, a directory, or a symlink
   restore           Restore working tree files
   rm                Remove files from the working tree and from the index
   sparse-checkout   Initialize and modify the sparse-checkout

examine the history and state (see also: git help revisions)
   bisect            Use binary search to find the commit that introduced a bug
   diff              Show changes between commits, commit and working tree, etc
   grep              Print lines matching a pattern
   log               Show commit logs
   show              Show various types of objects
   status            Show the working tree status

grow, mark and tweak your common history
   branch            List, create, or delete branches
   commit            Record changes to the repository
   merge             Join two or more development histories together
   rebase            Reapply commits on top of another base tip
   reset             Reset current HEAD to the specified state
   switch            Switch branches
   tag               Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch             Download objects and refs from another repository
   pull              Fetch from and integrate with another repository or a local branch
   push              Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.

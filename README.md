# Common git commands
| Commands                       | Description                                                                                                  |
|--------------------------------|--------------------------------------------------------------------------------------------------------------|
| `git clone repo-url` | Download the codebase to your local machine                                                                  |
| `git pull`                     | Update the current branch with the latest changes                                                            |
| `git checkout branch-name`     | Swap to a branch called "branch-name"                                                                        |
| `git checkout -b branch1`      | Create a new branch called "branch1" using the existing code from the current branch, and swap to "branch1" |
| `git commit -m "hello"`        | Create a snapshot of your changes (ie. a commit) with a description, "hello"                                 |
| `git push`                     | Upload commits to the online repository                                                                      |
| `git reset --soft HEAD~1`      | Undo last commit and keep the changes                                                                        |
| `git reset --hard HEAD~1`      | Undo last commit and discard the changes                                                                     |
# Flow of developing a ticket
## Before coding

### 1. Choose a ticket and assign yourself to it 
- Hover over the ticket and press Space
- Drag it over to the `Doing` column

### 2. Create a new branch for your code
- Swap to `develop` branch
- Update the branch with the latest changes
- Create a new branch using existing code from `develop` and swap to it
```
git checkout develop
git pull
git checkout -b TicketNumber-TicketName
```

### 3. Boot up the local environment to see your changes
```
npm start
```

## While coding
If you've finished a block of code, and you're happy with the changes so far, you should commit them. It's recommended that you keep your commits small, because if something goes wrong, big commits are harder to revert since you may not want to revert all your changes. You can either commit regularly, or do consecutive small commits at the end when you've finished developing your feature.

### 4. Stage your changes
![](./docs/staging-code.png)

a. Go to the "Source Control" tab in VSCode

b. Click the `+` button next to the files to choose what you'd like to include in your commit (you can also choose all files by hovering over "Changes" and click the `+` button next to it instead)

### 5. Commit your changes
There are 3 types of commits you can do. Depending on the type of commits you make you'll need to include a different tag for your commit message:
- Adding a new feature: `feat`
- Making a fix/improvement: `fix`
- Writing documentations: `doc`
```
git commit -m "fix(feature-name): what you did"
```

### 5.5 Undoing your commits
If you would like to undo your latest commit, do one of the `git reset` commands in the table above. You can repeatedly execute those commands to continue reverting back (Note that the reverted changes will pile up if you use the `--soft` version).

## After coding

### 6. Push your code
```
git push
```
If you're pushing for the first time in a new branch, you will get something like this. Just copy paste it in the terminal and press Enter to run this instead.
```
git push --set-upstream origin branch-name
```

### 7. Create a PR (Pull Request)
- Have a read on [this](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request)
- Convention:
    - If the PR is for a feature, the base should always be `develop`. If the PR is for deploying a feature to the user's environment, the base should always be `main`
    - PR name to be TicketNumber-TicketName
    - Message to have a short change summary

### 8. Notify people
- Move ticket over to Pull Request column
- Send a message in discord
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
| `git reset --hard`             | Undo last commit and discard the changes                                                                     |
# Flow of developing a ticket
### Table of Content
- One-time setup
  - [Clone the repository]()
  - [Install packages]()
  - [Check for environmental variables]()
- Before coding
  - [Assign yourself to the ticket](1-assign-yourself-to-the-ticket)
  - [Create a new branch for your code](2-create-a-new-branch-for-your-code)
  - [Start the local environment](2-create-a-new-branch-for-your-code)
- While coding
  - [Stage your changes]()
  - [Commit your changes]()
  - [Undoing your commits (Optional)]()
- After coding
  - [Update your branch with changes from `develop`]()
  - [Resolve merge conflicts]()
  - [Push your changes]()
  - [Create a PR (pull request)]()

## Before coding

### Assign yourself to the ticket
- Drag the ticket you're planning to work on to the `Doing` column. The Trello board will automatically assign you to the ticket when you do it.

### Create a new branch for your code
```
git checkout develop
git pull
git checkout -b 01-ticket-name
```
Explanation:
- Swap to `develop` branch
- Make sure `develop` is up-to-date with the latest changes
- Create a new branch using existing code from `develop` and swap to it. Branch naming convention is `ticketnumber-ticket-name`

### Start the local environment
This will allow you to see your changes in the browser locally:
```
npm start
```

## While coding
It's recommended that you either regularly commit your code, or do small consecutive commits at the end when you've finished developing your feature, instead of including everything in 1 big commit. This is because if something goes wrong, big commits are harder to revert since you may not want to revert all of your changes. 

### Stage your changes
![](./docs/staging-code.png)

a. Go to the "Source Control" tab in VSCode

b. Choose what you'd like to commit by clicking the `+` button next to the files. You can also choose all files by hovering over "Changes" and clicking the `+` button next to it instead)

### Commit your changes
```
git commit -m "feat(feature-name): what you did"
```
There are 3 types of commits you can do. Depending on the type of commits you make you'll need to include a different prefix for your commit message:
- Adding a new feature: `feat`
- Making a fix/improvement: `fix`
- Writing documentations: `doc`

### Undoing your commits (Optional)
```
git reset --soft HEAD~1
```
Run this command if you'd like to undo your last commit. You can repeatedly execute this to continue reverting back (Note that the previous reverted changes will pile up on top of the next reverted changes).

## After coding

### Update your branch with changes from `develop`
Make sure you've committed everything before you do this
```
git checkout develop
git pull
git checkout 01-your-branch
git merge develop
```
Explanation:
- Swap to `develop` branch
- Update `develop` with the latest changes
- Swap back to your feature branch
- Merge changes from `develop` into the feature branch

### Push your code
```
git push
```
If you're pushing for the first time in a new branch, you will get something like this. Just copy paste it in the terminal and press Enter to run this instead.
```
git push --set-upstream origin branch-name
```

### Resolve merge conflicts

### Create a PR (Pull Request)
- Have a read on [this](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request)
- Convention:
    - If the PR is for a feature, the base should always be `develop`. If the PR is for deploying a feature to the user's environment, the base should always be `main`
    - PR name to be TicketNumber-TicketName
    - Message to have a short change summary

### Notify people
- Move ticket over to Pull Request column
- Send a message in discord
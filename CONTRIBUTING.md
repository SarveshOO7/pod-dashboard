# Contributing to Pod-Dashboard
It doesn't matter if you've been on the team for a few days or a few year, we love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

## We Develop with Github
We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests
Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Clone the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests. (Testing info coming soon!)
3. Update the documentation. (running `npm run generate-docs` should handle this automatically)
4. Ensure the test suite passes. (Coming soon!)
5. Make sure your code lints. (running `npm run pretest` will show you lint errors prior to pushing)
6. Issue that pull request!


## Report bugs using Github's [issues](https://github.com/briandk/transcriptase-atom/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](); it's that easy!

## Write bug reports with detail, background, and sample code
[This is an example](http://stackoverflow.com/q/12488905/180626) of a bug report\, and I think it's not a bad model. Here's [another example from Craig Hockenberry](http://www.openradar.me/11905408).

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can. [My stackoverflow question](http://stackoverflow.com/q/12488905/180626) includes sample code that *anyone* with a base R setup can run to reproduce what I was seeing
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People, especially your team lead, *love* thorough bug reports. I'm not even kidding.

## Use a Consistent Coding Style
* 2 spaces for indentation rather than tabs
* You can try running `npm run pretest` for style unification
* Classes uppercase first letter in each word (i.e. `StateMachineButton.js`)
* General js files all lower case (i.e. `handler.js`)
* CSS files that style the CSS grid end in a `.grid.css` suffix
* CSS files that style other UI components end in a `.css` suffix


## References
This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)

---
path: "/blog/blog-setup"
date: "2019-07-10"
title: "Blog setup"
---
## Basics

I'm setting up a blog and hosting it on now.sh. 

I'm building this using Gatsby, with markdown for all posts.

## Deployment

To deploy via ZEIT now I had to run:
```sh
now domains add cspringer.co
```

This listed out the nameservers I needed to change on the Google Domains side for cspringer.co . This domain also has to be listed under "alias" in the now.json file.

Then after running the typical
```sh
now 
```
I just ran
```sh
now --target production
```

That's it.

## Todo
I plan to:
- integrate Tailwind CSS
- further componentize various sections
- add better fonts &amp; typography
- optimize all the things
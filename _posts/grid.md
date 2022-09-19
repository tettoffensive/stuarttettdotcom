---
title: 'Grid by Binary Thumb'
excerpt: ''
coverImage: '/assets/blog/grid/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Stuart Tett
  picture: '/assets/blog/authors/stuart.jpg'
ogImage:
  url: '/assets/blog/grid/cover.jpg'
---
### Grid allowed users to collaborate on spreadsheets full of video, images, and text in real-time.

When I joined, the team had just released the first version of the app.

It was a solid MVP, but their were some much needed improvements in the overall experience.

![Grid home](/assets/blog/grid/grid-home.jpg)

### There were some performance issues hindering the experience.

The spreadsheet was an infinite canvas of tiles with no limitations on tiles, and images.

Scrolling across the canvas wasn't buttery smooth and other animations were slow.

![Grid blank canvas](/assets/blog/grid/grid-blank-canvas.jpg)

### Grid may be a spreadsheet, but it is meant to showcase multimedia in a beautiful way.

We looked to the world of mobile gaming, where the rendering wasn't done with Apple's UIKit, but the lower-level OpenGL.

### I made a prototype in OpenGL, and the performance looked promising.

We played around with the prototype and stress-tested it to see how it would operate under load.

### We decided to convert the entire app to our new OpenGL engine.

We were now getting a consistent 60fps. It felt so much more responsive in the hands of the user.

### But using OpenGL slowed down development.

While the new user experience was superior, the conversion had some major engineering challenges. It was costly to rebuild standard UI components.

![Grid image tiles](/assets/blog/grid/grid-image-tiles.jpg)

![Grid backpack](/assets/blog/grid/grid-backpack.gif)

### The introduction of Backpack gave users a convenient way to drop content into the Grid.

It connected with Photos, Dropbox, and Evernote. A simple drag and drop interface made it easy to create.

### But it took up so much screen real estate.

It opens and closes by sliding in and out from the bottom.

### We needed a fast, distraction-free way to remove it for object placement.

I experimented with different animations, but landed on a quick fade out when a user drags an item out of Backpack.

When they release their finger, it fades back in gently.

### When we tried it out in user testing, it proved effective.

The user could easily grab images from the backpack and place it anywhere on the screen without being distracted by the disappearing Backpack.

> Additional Credits: Josh Leong—Lead Designer

---
title: 'Channel'
excerpt: 'A social app for editing & sharing videos'
coverImage: '/assets/blog/channel/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Stuart Tett
  picture: '/assets/blog/authors/stuart.jpg'
ogImage:
  url: '/assets/blog/channel/cover.jpg'
---

### Channel began as an app for people to share video stories from their phones.

When someone posts a video, it is first processed on the device, and uploaded to the server for encoding before it streams in the channel.

![Post channel](/assets/blog/channel/channel-post.png)

### But they wanted to see their videos streaming right away.

When we pushed out the alpha build to the company, people were confused as to why they didn't see their video right away. The encoding going on under the hood wasn't visible to them.

### How might we improve the experience for users after posting a new video?

One possibility was to just simply tell the user, "Success! Your video will stream momentarily".

But we felt it would have a greater impact if the user could just see the video in the stream somehow.

### We decided to rely on the locally cached copy of the video.

Part of my role was to solve user experience issues like this that involved technical solutions.

I came up with a solution of keeping a cached copy of the video and inserting it at the start of the channel feed.

The video would then be removed once it came down from the server after encoding.

![Channel posting flow](/assets/blog/channel/channel-posting-flow.png)

### We tested out the new experience with success.

On our next release candidate, the app went seamlessly from posting to playing the video at the head of the channel. The experience was just what users expected to happen.

> Additional Credits: Edwin de Jongh—Lead Designer, Product Manager—Marwan Roushdy
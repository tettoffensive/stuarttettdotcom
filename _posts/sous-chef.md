---
title: 'SousChef'
excerpt: ''
coverImage: '/assets/blog/sous-chef/cover.jpg'
date: '2021-03-16T05:35:07.322Z'
author:
  name: Stuart Tett
  picture: '/assets/blog/authors/stuart.jpg'
ogImage:
  url: '/assets/blog/sous-chef/cover.jpg'
---

## Problem
### For working professionals, weeknight dinners are an afterthought.

Often people don't think about it until their commute home. They look in their fridge paralyzed. They often end up ordering delivery.

  ### Which leads to ordering $40 pizzas from Caviar.

My co-founder and I wanted to see if digital technology could improve this experience. He led the development, while I led the interface and experience design.

![Receipt for a Caviar delivery order](/assets/blog/sous-chef/souschef-caviar.jpg)

## How might technology help busy people with their weeknight meals?

We decided to create a platform around delivering convenient recipes suggested based on the ingredients you have on hand.

## Time, Quality, Cost

### User research identified time, quality, and cost as the three most important factors.

The Food Nerd persona felt quality was the most important. The Working Mom—time, and the Schoolteacher—cost.

![Recipe order](/assets/blog/sous-chef/souschef-recipe-order.gif?w=300&h=532)

![Sorting](/assets/blog/sous-chef/souschef-sorting-full.png)

### This led me to give the user control over which recipes they saw first.

I simplified the interface down to two simple arrow buttons to reorder the sorting priority.

Originally, a pull-down, I changed to a button since iPhone X models make edge gestures tricky.

---

### To explore recipes, I decided on a horizontal carousel.

Most recipe apps I researched used a vertical collection of recipe cards. But they don't have much beyond a photo and a title.

I opted for a carousel to help the user make an informed decision more quickly.

![Carousel](/assets/blog/sous-chef/souschef-carousel.gif?w=300)

### The recipe view went through many iterations.

I iterated on the recipe view, periodically getting user feedback. This led me to separate out "Prep" time, and simplify the interface.

![Recipe view iterations](/assets/blog/sous-chef/souschef-recipe-iterations.png)

### With the final recipe card having just an image, title, prep/cook time, rating, and cost.

I simplified down until I had it paired down to something easy to digest quickly, but enough information to make a decision.

![Recipe final](/assets/blog/sous-chef/souschef-recipe-final.png)

![Recipe full final](/assets/blog/sous-chef/souschef-recipe-full-final.png)

![Recipe loading](/assets/blog/sous-chef/souschef-recipe-loading.png)

![Recipe](/assets/blog/sous-chef/souschef-recipe.png)

### The recipes have been condensed for mobile.

Currently, the recipes are sourced from the web. However, they are verbose and difficult to follow on mobile. The app condenses the language down to short instructions.


### I designed the pantry to keep track of ingredients, but is a lot of work for the user.

My first iterations involved typing to search and add ingredients. So I wondered, how might we make entering ingredients easier?

![Pantry views](/assets/blog/sous-chef/souschef-pantry-views.png)

### I explored camera vision to recognize foods.

We explored using camera vision to identify raw ingredients and scan receipts. Unfortunately, it's not reliable enough to be the primary method of input at this time.

![Receipt scanning](/assets/blog/sous-chef/souschef-scan-receipt.png)

![Camera vision foods](/assets/blog/sous-chef/souschef-scan-foods.png)

### But settled on a tap gesture to quickly add common ingredients.

In exploring more realistic methods of simple ingredient entry, I designed a "Quick Add" feature to simply tap the most common ingredients. An expanded version shows more foods by category.

![Pantry tap](/assets/blog/sous-chef/souschef-pantry-tap.png)

![Pantry delete](/assets/blog/sous-chef/souschef-pantry-delete.gif?w=300&h=532)

![Quick add](/assets/blog/sous-chef/souschef-quick-add.gif?w=300&h=532)

![Search](/assets/blog/sous-chef/souschef-search.gif?w=300&h=532)

## Visual Design

### Lucky Peach magazine served as an initial inspiration.

I love the attitude around the foodie magazine Lucky Peach. But I felt that a much cleaner look was better suited for a mobile app. I used clean, friendly typography, but I kept some of those design elements to maintain a little bit of that personality.

![SousChef background pattern](/assets/blog/sous-chef/souschef-bg-pattern.png)

![Typography](/assets/blog/sous-chef/souschef-typography.png)

![Style guide](/assets/blog/sous-chef/souschef-style-guide.png)

## Learnings

1. The tech of computer vision isn’t production ready for this problem.
1. Look beyond the bottom tab bar for navigation.
1. Matching users with the right recipes is just one facet of getting busy people to cook.

> Additional Credits: Shane Vitarana—Developer/Co‑Founder
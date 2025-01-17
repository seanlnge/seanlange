# [Sean Lange](https://seanlange.dev)
My website, and a timeline of my work. Hosted and written on [Replit](https://replit.com)
***
### 1/17/2025
Spent a good 4 hours working on creating and perfecting the loading animation along with the background.

I used my tool Renderspice that I made 3 years back, and found a cool trick where if I set the background to be transparent, I can have the frames draw over one another on the canvas. Take 200 of these squares, make them fall at random speeds, and put them on a cyclical hue cycle based on time of instantiation ranging from cool blue to light red, and I came up with an animation that looks pretty cool.

To get the washed effect to work on site load, I had to run 200ish frames, and trick the Renderspice engine to think that the deltaTime in each is 50ish milliseconds. Looping this with 200 squares, and drawing each frame to the canvas takes some time, so I decided to include a loading animation.

Unfortunately, rendering 1000 frames on top of each other is processor-heavy and mobile devices don't run it very well or fast, so instead of continuing the rendering which I hoped for, I had to do the initial 300 frames and stop the animation. I toyed around with dropping the number of squares and increasing size of each square, or slowing each render cycle down to ~100ms per frame, but none of these changes gave the desired effect. The site still looks alright on mobile, but on a computer is where it really shines. 

There are still issues with this site, but no dealbreakers. Several issues include the vertical parallax scroll effect being choppy, the animation rendering being slightly slow, and general design choices that I would like to fix.

The site meets my standards though, so the fixes will have to wait for another day, but the site stands, and I am happy with it.
***
### 1/16/2025
Made this when I was in 9th grade, kept updating it and working on it.

Back then, ejs or pug was the way to go for HTML templating, since using an entire JS framework is like using a nuke in a snowball fight.

I stuck with ejs over these 5 years since it still works and works well paired with an express backend.

It is mostly front-end anyways, so efficiency over complexity, and if it works it works.
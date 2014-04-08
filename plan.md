# Polka design plan

How can we get away from the standard setup() and update() loops, towards a more keyframe-oriented design?

How about having move() rotate(), etc functions for each object? For example:

circle.move(startx, starty, endx, endy, starttime, endtime)

This is what tweening does!

We want the concept of a timeline, though, with events.

How about having event objects, with starts and endings? Ones with no start or ending are called continuously.

Have import statements with hyperlinks that open the files they are importing.

## Next step

- implement easel.js
- implement coffeescript
- get stuff lined up right with Bootstrap

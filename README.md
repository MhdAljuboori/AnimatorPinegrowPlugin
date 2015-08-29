# Animator Plugin for Pinegrow Web Editor
[Pinegrow Web Editor](http://pinegrow.com/) is a desktop app that lets you build responsive websites faster with live multi-page editing, CSS styling and smart components for Bootstrap, Foundation, AngularJS and WordPress.

The plugin is using [Animate.css](https://github.com/daneden/animate.css) and [Waypoints](http://imakewebthings.com/waypoints)

Usage
=====
[Download](https://github.com/MhdAljuboori/AnimatorPinegrowPlugin/archive/master.zip) the plugin, then open Pinegrow
* Go to Manage frameworks
* Click on ```Load plugin``` choose the js file inside the Pinegrow folder
* Click add then active to activate the plugin.

Full guide [here](http://pinegrow.com/docs/guides/kelvin-pine/index.html) for kelvin plugin.

After activating the plugin, you will notice that new property appear in the `PROP` panel (Animation Settings) this property will give you the opportunity to change the animation duration, the animation delay and the animation itration.

![Animation Settings](https://raw.githubusercontent.com/MhdAljuboori/AnimatorPinegrowPlugin/master/screenshots/animation-settings.png)

Also you'll notice a new actions in `WP` panel under Animations, you'll find four animations settings.

![Animation Actions](https://raw.githubusercontent.com/MhdAljuboori/AnimatorPinegrowPlugin/master/screenshots/animation-actions.png)

When you activate an animation action from th `WP` panel, you'll see there are some fields you have to fill them out

* *Animation trigger* is when you want to trigger the animation, you can trigger it on load (when the document ready), click, hover and scroll.
* *Animation type* is the animation that will run when the trigger happend.
* *Animation to remove* is the animation that will removed from the element when the trigger happend.

The second is working only if you choosed scroll as your trigger.

* *Scroll direction* means if the user is scrolling down or up.
* *Scroll target* when the scroll event happend which element you want to effect.
* *Scroll offset* the offset between the element and the top.

![Animation Actions](https://raw.githubusercontent.com/MhdAljuboori/AnimatorPinegrowPlugin/master/screenshots/animation-activated.png)

Quick Tutorial
==============

* Setting the trigger on load and adding animation type like `fadeInDown`, when the the document is ready you'll see the element you've selected appear (top to down).
* Setting the trigger on hover, will effect on element the same way load effect but when you hover the element.
* Settign the trigger on click, the effect will happend when the user click the element, like setting `shake` animation to the button.
* By setting the trigger on scroll, you'll have to full the second section **Scroll direction**, **Scroll target** and **Scroll offset**, so if you want to show the navbar after the user scroll down 500px, you have to add the animation to your `hero-unit`/`jumbotron`, select scroll as a trigger, setting the animation type (`slideInDown`) then by going to the second section you'll set, the scroll direction (`Down`) the scroll target which is your navbar (`.navbar`) finally the offset (`-500px`).

[Here](https://github.com/MhdAljuboori/AnimatorPinegrowPlugin/tree/master/example) is small example of using the Animator plugin

MIT LICENSE
===========

The MIT License

Copyright (c) Mohammed Al-Juboori, http://mhdaljuboori.me

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
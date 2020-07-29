# wc-static

A naïve way of converting the web components in my website to plain HTML.

## Motivation

I wanted to write my website the old-fashioned way, like I wrote them back in 1997: in Notepad, with no tooling whatsoever.

Standard HTML and CSS have come an incredibly long way since 1997, as has browser support. It's now really easy to write plain HTML for a simple website.

Of course, I don't _really_ want to write my website entirely by hand: there's too much duplication and things to keep up-to-date. Simple things like social media links are duplicated on every page. Copyright dates change once a year.

Web components provide a standard way of dealing with duplication and dynamic content. Great! Perfectly acceptable, if you don't mind needing JavaScript to display a simple website's content. Only, I didn't want to require JavaScript, not even vanilla JavaScript.

wc-static aims to give you the best of both worlds: author DRY HTML code thanks to web components, distribute plain HTML with no JavaScript.

Think of it as a static site generator that makes static sites even more static.

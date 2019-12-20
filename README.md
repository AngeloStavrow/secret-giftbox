# Secret GIFtbox!

Send your friend a secret snowman GIFtbox!

Just share the app link with a friend and surprise them with a GIF that changes every time they open the box:

[https://secret-giftbox.glitch.me](https://secret-giftbox.glitch.me)

Want to customize it? You can add a [query string](https://en.wikipedia.org/wiki/Query_string) to the link to set the name of the recipient and what random GIF you want to them to receive as a gift!

As an example, sending this link:

```
http://secret-giftbox.glitch.me/?recipient=Angelo&gift=kittens
```

will create an app that greets the `recipient` with "Dear Angelo," and shows the `gift` of a random kitten GIF (instead of the default puppies).

(Note: This grabs a random, G-rated GIF from [GIPHY](https://giphy.com) based on the 'gift' search term — it's possible that some of the results are odd.)

## Remix and make your own!

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/secret-giftbox)

You'll need a [GIPHY developer account](https://developers.giphy.com/) (it's free!).

Once you've got that, click the [**Create an App** button](https://developers.giphy.com/dashboard/?create=true), and fill in the required details.

Once that's done, paste the API key you get from GIPHY into your remix's **.env** file as your `GIPHY_KEY`.

Then, go ahead and make the changes you'd like to the app!

## Acknowledgements

This project was greatly inspired by Josh Comeau's excellent [_Folding the DOM_ blog post](https://www.joshwcomeau.com/posts/folding-the-dom/), and uses [elena-in-code's cool snowflake animations](https://github.com/elena-in-code/Css-Snow-Fall-Animation) (with a custom-drawn snowflake background).

## Made on [Glitch](https://glitch.com/)

Find out more [about Glitch](https://glitch.com/about).

\ ゜ o ゜)ノ

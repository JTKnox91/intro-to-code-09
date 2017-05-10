# Intro to Code: Lesson 09

The CEO of Pointless Industries has developed what is sure to be the next
billion-dollar product on the Internet. Think about it - what is the problem
with every music player you've ever used?

**Answer**: They're noisy! Your only options are to wear uncomfortable - _possibly
even unstylish_ - headphones or earbuds, or just not use your music player at
all.

**The Solution**: The `Silent Song Player`! Load all of your favorite music, but
instead of playing your songs, the SSP will simply display information about 
them, and you can just _think_ about your song. Even better, a loophole in
copyright law allows us to provide this amazing service while paying ZERO
royalties! Hope your stock options have vested!

Our designers have been hard at work preparing a slick UX for the **SSP**. All
that's needed now is for you to make it work!

## Instructions

Follow the steps below to complete this lesson.

### Clone this repository

    git clone https://github.com/codeslo/intro-to-code-09.git

Make sure you can open `ssp/index.html` in your favorite browser.

### Create a playlist of songs

- Songs should be stored as JavaScript `objects`.
- The playlist should be an `array` of songs.

_You'll want to manually create the songs, as we are not using a database with
pre-existing values._

### Enable the "Play" button

Playing a song should display the relevant _title_, _artist_, and _album_
information in a well-designed manner that is easy to read.

> **PRO TIP**: There are some pre-existing CSS styles to help with this. Try
> displaying titles within `h2` elements, and everything else within `h3`
> elements.

### Enable the "Last" and "Next" buttons

These buttons should play the previous or next song in the playlist.

### Enable the "Shuffle" button

- When this button is clicked, it should toggle between *on* and *off* modes:
    - **ON**: It should be _green_, and display the text `Shuffle Mode On`.
    - **OFF**: The button should be _orange_, and display the text `Shuffle
    Mode Off`.
        > **PRO TIP**: Use the built-in CSS classes `btn-success` and 
        > `btn-primary` for the different modes.
- When Shuffle Mode is **on**, the "next" song should be a random song from the
  playlist. Search the web for how to implement the _Fisher-Yates Shuffle_ (also
  known as the _Knuth Shuffle_) in JavaScript. The last song should still
  display the previous song played.
- When shuffle mode is **off**, the playlist should play in order.

### Enable adding songs from the page

Users want to be able to add songs to the playlist dynamically. Let's make that
happen!

- The user should be able to input a _title_, _artist_, and _album_ - the
application should turn that information into a new song `object`, and then
add that song to the playlist.
    > **PRO TIP**: In a live application, this information would be stored in
      a database. However, for our purposes, _local storage_ is good enough.
      Using _local storage_ (via `Window.localStorage`) is a way for web
      developers to store data in the user's browser for an indefinite amount
      of time - that is, until the user clears their browser cache. You can
      read more about it by following the links below:
    >
    > 1. https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage
    > 2. https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/

---

Good luck! We're all counting on you!

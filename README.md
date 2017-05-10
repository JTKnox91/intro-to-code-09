The CEO of Pointless Industries has developed what is sure to be the next billion dollar product on the Internet.  Think about it… what is the problem with every music player you’ve ever used?

Answer: They’re noisy! Your only options are to wear uncomfortable - possibly even unstylish - headphones or earbuds, or just not use your music player at all.

Our Solution: The Silent Song Player! Load all your favorite music, but instead of playing your songs, the SSP will simply display information about it and you can just THINK about your song. Even better, a loophole in copyright law allows us to provide this amazing service while paying ZERO royalties!  

Hope your stock options have vested!

Our designers have been hard at work preparing a slick UX for the SSP, now all we need you to do is make it work!

Here’s what we need you to do:

Clone the repo at https://github.com/codeslo/intro-to-code-09.git
Open the index.html file in a browser and make sure it is working for you. Then...
Make the song objects and array playlist
Songs should be stored as JavaScript objects
The playlist should be an array of these objects. We hear you’re an expert on this stuff!
We don’t have our database online yet, so you might want to hardcode a few songs into the program. 

Enable Play Button
The play button should display the title, artists and album of a song to the screen in an attractive way. Our designers have already done some CSS styling in the screen, so displaying titles as <h2> and everything else as <h3> should look great!
Enable Last and Next Song Buttons
These buttons should play the next or previous song in the playlist… silently!
Enable Shuffle Play Button
		hint: remember the ‘this’ keyword
		another hint: Google ‘jquery toggleClass’
When this button is clicked, it should turn green and the text should change to “Shuffle Play On”
When it is clicked again it should return to orange and “Shuffle Play Off”
Use the Bootstrap classes “btn-primary” for orange and “btn-success” for green.
When the playlist is in shuffle play, next song should display a random song from the playlist.
	hint: Google ‘JavaScript Fisher-Yates algorithm’
Last song should still display the previous song played
When shuffle mode is off, the playlist should play in order.

Enable the Add Song Form
	hint: use .val() to get the text of an input form
The user should be able to add a title, artist and album and have the application turn all that into a new song object, and then add that song to the playlist.
In a live application this information would be stored to a database. However for this version we’re going to use local storage which is a way for web developers to get free storage on client computers. As long as they don’t clear their browser cache. That data can then be accessed when they return to a site.
http://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/

Good luck! Hopefully your coding abilities are just a good as our CEO’s AMAZING business idea.  We’re all counting on you!

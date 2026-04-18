// ======================= MUSIC PLAYER DENGAN PLAYLIST, LIRIK, DAN BACKGROUND PENUH =======================
(function() {
    if (document.getElementById("globalMusicPlayer")) return;
    
    // ======================= DAFTAR PLAYLIST =======================
    const playlist = [
        {
            id: 1,
            title: "Love Me Not",
            artist: "Ravyn Lenae",
            src: "audio/love-me-not.mp3",
            duration: 210,
            bgImage: "image/background-love-me-not.jpg",
            lyricsText: `See, right now, I need you, I'll meet you somewhere now
You up now, I see you, I get you, take care now
Slow down, be cool, I miss you, come here now
It's yours now, keep it, I'll hold out until now
I need you right now, once I leave you I'm strung out
If I get you, I'm slowly breaking down
And, oh, it's hard to see you, but I wish you were right here
Oh, it's hard to leave you when I get you everywhere
All this time I'm thinking we could never be a pair
Oh, no, I don't need you, but I miss you, come here
And, oh, it's hard to see you, but I wish you were right here
Oh, it's hard to leave you when I get you everywhere
All this time, I'm thinking I'm strong enough to sink it
Oh, no, I don't need you, but I miss you, come here
He love me not, he loves me
He holds me tight then lets me go
He love me not, he loves me
He holds me tight then lets me go
Soon as you leave me, we always lose connection
It's gettin' messy, I fiend for your affection
Don't loosen your grip, got a hold on me
Now, forever, let's get back together
Lord, take it so far away
I pray that, God, we don't break
I want you to take me up and down
And 'round and 'round again
And, oh, it's hard to see you, but I wish you were right here
Oh, it's hard to leave you when I get you everywhere
All this time I'm thinking we could never be a pair
Oh, no, I don't need you, but I miss you, come here
And, oh, it's hard to see you but I wish you were right here
Oh, it's hard to leave you when I get you everywhere
All this time, I'm thinking I'm strong enough to sink it
Oh, no, I don't need you, but I miss you, come here
He love me not, he loves me
He holds me tight then lets me go
He love me not, he loves me
He holds me tight then lets me go
He love me not, he loves me
He holds me tight then lets me go
He love me not, he loves me
He holds me tight then lets me go
You gotta say that you're sorry at the end of the night
Wake up in the morning, everything's alright
At the end of the story, you're holdin' me tight
I don't need to worry, am I out of my mind?
And, oh, it's hard to see you, but I wish you were right here (I'm losing my mind)
Oh, it's hard to leave you when I get you everywhere
All this time I'm thinking, I'm strong enough to sink it
Oh, no, I don't need you, but I miss you, come here`
        },
        {
            id: 2,
            title: "Mary On A Cross",
            artist: "Ghost",
            src: "audio/Mary-On-A-Cross.mp3",
            duration: 244,
            bgImage: "image/bgmary-on-a-cross.jpg",
            lyricsText: `We were speeding together
Down the dark avenues
But besides of the stardom
All we got was blues
But through all of that sorrow
We were riding high
And the truth of the matter is
I never let you go, let you go
We were scanning the cities
Rocking to pay the dues
But besides of the glamour
All we got was bruised
But through all of that sorrow
We were riding high
And the truth of the matter is
I never let you go, let you go
You go down just like Holy Mary
Mary on a, Mary on a cross
Not just another Bloody Mary
Mary on a, Mary on a cross
If you choose to run away with me
I will tickle you internally
And I see nothing wrong with that
We were searching for reasons
To play by the rules
But we quickly found
It was just for fools
Now through all of this sorrow
We'll be riding high
And the truth of the matter is
I never let you go, let you go
You go down just like Holy Mary
Mary on a, Mary on a cross
Not just another Bloody Mary
Mary on a, Mary on a
You go down just like Holy Mary
Mary on a, Mary on a cross
Your beauty never ever scared me
Mary on a, Mary on a cross
If you choose to run away with me
I will tickle you internally
And I see nothing wrong with that
Nothing wrong with that
(Mary on a, Mary on a cross)
Nothing wrong with that
(Mary on a, Mary on a cross)
(Mary on a) Mary on a cross`
        },
        {
            id: 3,
            title: "Forever Young",
            artist: "Alphaville",
            src: "audio/Forever-Young.mp3",
            duration: 225,
            bgImage: "image/bgforever-young.jpg",
            lyricsText: `Let's dance in style, let's dance for a while
Heaven can wait, we're only watching the skies
Hoping for the best, but expecting the worst
Are you gonna drop the bomb or not?
Let us die young or let us live forever
We don't have the power, but we never say never
Sitting in a sandpit, life is a short trip
The music's for the sad men
Can you imagine when this race is won?
Turn our golden faces into the sun
Praising our leaders, we're getting in tune
The music's played by the, come on
Some are like water, some are like the heat
Some are a melody and some are the beat
Sooner or later, they all will be gone
Why don't they stay young?
It's so hard to get old without a cause
I don't want to perish like a fleeing horse
And youth's like diamonds in the sun
And diamonds are forever
So many adventures couldn't happen today
So many songs we forgot to play
So many dreams swinging out of the blue
We let them come true
Forever young
I want to be forever young
Do you really want to live forever
Forever, whenever?
Forever young
I want to be forever young
Do you really want to live forever
Forever or never?
Forever young
I wanna be forever young
Do you really want to live forever?
Forever young
One more time, one more time
Forever and never
Forever young
I wanna be forever young
Do you really want to live forever?
Forever young
Forever young
I wanna be forever young
Do you really want to live forever?
Yes
Forever young
Forever young
Forever young
Thank you
Thank you, we love you
`
        },
        {
            id: 4,
            title: "back to be friends",
            artist: "sombr",
            src: "audio/backtobe-friends.mp3",
            duration: 157,
            bgImage: "image/bgbacktobe-friends.jpg",
            lyricsText: `Touch my body tender
'Cause the feeling makes me weak
Kicking off the covers
I see the ceiling, while you're looking down at me
How can we go back to being friends
When we just shared a bed?
How can you look at me and pretend
I'm someone you've never met?
It was last December
You were layin' on my chest
I still remember
I was scared to take a breath, didn't want you to move your head
How can we go back to being friends
When we just shared a bed? (Yeah)
How can you look at me and pretend
I'm someone you've never met?
The devil in your eyes
Won't deny the lies
You've sold, I'm holding on too tight
While you let go, this is casual
How can we go back to being friends
When we just shared a bed? (Yeah)
How can you look at me and pretend
I'm someone you've never met?
How can we go back to being friends
When we just shared a bed? (Yeah)
How can you look at me and pretend
I'm someone you've never met?
I'm someone you've never met
Oh yea`
        },
        {
            id: 5,
            title: "Love in the Dark",
            artist: "Adele",
            src: "audio/Love-in-the-Dark.mp3",
            duration: 285,
            bgImage: "image/loveinthe-dark.jpg",
            lyricsText: `Take your eyes off of me so I can leave
I'm far too ashamed to do it with you watching me
This is never ending, we have been here before
But I can't stay this time, 'cause I don't love you anymore
Please, stay where you are
Don't come any closer
Don't try to change my mind
I'm being cruel to be kind
I can't love you in the dark
It feels like we're oceans apart
There is so much space between us
Baby, we're already defeated
Ay-yeah-yeah-yeah-yeah-yeah-yeah-yeah
Everything changed me
You have given me something that I can't live without
You mustn't underestimate that when you are in doubt
But I don't want to carry on like everything is fine
The longer we ignore it, all the more that we will fight
Please, don't fall apart
I can't face your breaking heart
I'm trying to be brave
Stop asking me to stay
I can't love you in the dark
It feels like we're oceans apart
There is so much space between us
Baby, we're already defeated
Ay-yeah-yeah-yeah-yeah-yeah-yeah-yeah
Everything changed me
We're not the only ones, I don't regret a thing
Every word I've said, you know I'll always mean
It is the world to me that you are in my life
But I want to live and not just survive
That's why I can't love you in the dark
It feels like we're oceans apart
There is so much space between us
Baby, we're already defeated
'Cause, ay-yeah-yeah-yeah-yeah-yeah-yeah
Everything changed me`
        },
        {
            id: 6,
            title: "Yellow",
            artist: "Coldplay",
            src: "audio/Yellow-Coldplay.mp3",
            duration: 266,
            bgImage: "image/bgyellow.jpg",
            lyricsText: `Look at the stars
Look how they shine for you
And everything you do
Yeah, they were all yellow
I came along
I wrote a song for you
And all the things you do
And it was called, "Yellow"
So, then I took my turn
Oh, what a thing to have done
And it was all yellow
your skin, oh yeah, your skin, and bones
(Ooh) turn into something beautiful
(Ah) and you know, you know I love you so
You know I love you so
I swam across
I jumped across for you
Oh, what a thing to do
'Cause you were all yellow
I drew a line
I drew a line for you
Oh, what a thing to do
And it was all yellow
and your skin, oh yeah, your skin, and bones
(Ooh) turn into something beautiful
(Ah) and you know, for you, I'd bleed myself dry
For you, I'd bleed myself dry
It's true
Look how they shine for you
Look how they shine for you
Look how they shine for-
Look how they shine for you
Look how they shine for you
Look how they shine
Look at the stars
Look how they shine for you
And all the things that you do`
        },
        {
            id: 7,
            title: "Talking to the Moon",
            artist: "Bruno Mars",
            src: "audio/talking-to-the-moon.mp3",
            duration: 217,
            bgImage: "image/bgtalkingtothe-moon.jpg",
            lyricsText: `I know you're somewhere out there, somewhere far away
I want you back, I want you back
My neighbors think I'm crazy, but they don't understand
You're all I had, you're all I had
At night, when the stars light up my room
I sit by myself
Talking to the moon
Tryna get to you
In hopes you're on the other side talking to me too
Or am I a fool who sits alone talking to the moon?
Oh
I'm feelin' like I'm famous, the talk of the town
They say I've gone mad, yeah, I've gone mad
But they don't know what I know, 'cause when the sun goes down
Someone's talking back, yeah, they're talking back, oh
At night, when the stars light up my room
I sit by myself
Talking to the moon
Tryna get to you
In hopes you're on the other side talking to me too
Or am I a fool who sits alone talking to the moon?
Ah, ah, ah
Do you ever hear me calling?
(Ah) oh-oh-oh (ah), oh-oh-oh (ah)
'Cause every night I'm talking to the moon
Still tryna get to you
In hopes you're on the other side talking to me too
Or am I a fool who sits alone talking to the moon?
Oh`
        },
        {
            id: 8,
            title: "The Man Who Can't Be Moved",
            artist: "The Script",
            src: "audio/the-man-who-can't-be-moved.mp3",
            duration: 241,
            bgImage: "image/bgthemanwhocan'tbe-moved.jpg",
            lyricsText: ` Going back to the corner where I first saw you
Gonna camp in my sleeping bag, I'm not gonna move
Got some words on cardboard, got your picture in my hand
Saying, "If you see this girl, can you tell her where I am?"
Some try to hand me money, they don't understand
I'm not broke, I'm just a broken hearted man
I know it makes no sense but what else can I do
How can I move on when I'm still in love with you
'Cause if one day you wake up and find that you're missing me
And your heart starts to wonder where on this Earth I could be
Thinkin' maybe you'll come back here to the place that we'd meet
And you'll see me waiting for you on the corner of the street
So I'm not moving, I'm not moving
Policeman says, "Son, you can't stay here"
I said, "There's someone I'm waiting for if it's a day, a month, a year"
Gotta stand my ground even if it rains or snows
If she changes her mind, this is the first place she will go
'Cause if one day you wake up and find that you're missing me
And your heart starts to wonder where on this Earth I could be
Thinking maybe you'll come back here to the place that we'd meet
And you'll see me waiting for you on the corner of the street
So I'm not moving, I'm not moving
I'm not moving, I'm not moving
People talk about the guy that's waiting on a girl
There are no holes in his shoes but a big hole in his world
Maybe I'll get famous as the man who can't be moved
Maybe you won't mean to, but you'll see me on the news
And you'll come running to the corner
'Cause you'll know it's just for you
I'm the man who can't be moved
I'm the man who can't be moved
'Cause if one day you wake up and find that you're missing me (find that you're missing me)
And your heart starts to wonder where on this Earth I could be (where on this Earth I could be)
Thinkin' maybe you'll come back here to the place that we'd meet (to the place that we'd meet)
And you'll see me waiting for you on the corner of the street
'cause if one day you wake up and find that you're missing me
(I'm not moving) and your heart starts to wonder where on this Earth I could be
(I'm not moving) thinkin' maybe you'll come back here to the place that we'd meet
(I'm not moving) and you'll see me waiting for you on the corner of the street
Going back to the corner where I first saw you
Gonna camp in my sleeping bag, I'm not gonna move`
        },
        {
            id: 9,
            title: "Shots",
            artist: "Imagine Dragons",
            src: "audio/shots.mp3",
            duration: 232,
            bgImage: "image/bgshots.jpg",
            lyricsText: `I'm sorry for everything, oh, everything I've done
Am I out of touch? Am I out of my place?
When I keep saying that I'm looking for an empty space
Oh, I'm wishin' you're here but I'm wishin' you're gone
I can't have you, and I'm only gonna do you wrong
Oh, I'm gonna mess this up
Oh, this is just my luck
Over and over and over again
I'm sorry for everything, oh, everything I've done
From the second that I was born, it seems I had a loaded gun
And then I shot, shot, shot a hole through everything I loved
Oh, I shot, shot, shot a hole through every single thing that I loved
Am I out of luck? Am I waiting to break?
When I keep saying that I'm looking for a way to escape
Oh, I'm wishing I had what I'd taken for granted
I can't have you when I'm only gonna do you wrong
Oh, I'm gonna mess this up
Oh, this is just my luck
Over and over and over again
I'm sorry for everything, oh, everything I've done
From the second that I was born, it seems I had a loaded gun
And then I shot, shot, shot a hole through everything I loved
Oh, I shot, shot, shot a hole through every single thing that I loved
In the meantime, we let it go
At the roadside we used to know
We can let this drift away
Oh, we let this drift away
At the bay side, we used to show
In the moonlight, we let it go
We can let this drift away
Oh, we let this drift away
And there's always time to change your mind
Oh, there's always time to change your mind
Oh, love, can you hear me?
Oh, let it drift away
I'm sorry for everything, oh, everything I've done
From the second that I was born, it seems I had a loaded gun
And then I shot, shot, shot a hole through everything I loved
Oh, I shot, shot, shot a hole through every single thing that I loved
In the meantime, we let it go
At the roadside we used to know
We can let this drift away
Oh, we let this drift away
At the bay side, we used to show
In the moonlight, we let it go
We can let this drift away
Oh, we let this drift away (let me make it up to you)
And there's always time to change your mind
Oh, there's always time to change your mind
Oh, love, can you hear me?
Oh, let it drift away`
        },
        {
            id: 10,
            title: "Daisies",
            artist: "Justin Bieber",
            src: "audio/DAISIES.mp3",
            duration: 173,
            bgImage: "image/bgdaisies.jpg",
            lyricsText: `Throwing pedals like do you love me or not
Head is spinning and it don't know when to stop
Cause you said forever babe did you mean it or not
Hold on hold on
You leave me on read babe but I still get the message
Instead of a line its 3 dots but I can connect em
And if it ain't right babe
You know I respect it
But if you need time just take your time
Honey I get it I get it I get it
The way you got me all in my head
Think I'd rather you in my bed
Whatever it is you know I can take it
I'm counting the days how many days
Til I can see you again
Blowing kisses like will you catch 'em or not
I'm Cupid with arrows babe I'm just shooting my shot mhmm
If I could get in drop me a pin
Hop in the — and come over
Don't wanna be friends just skin to skin
I wanna get closer and closer and closer
The way you got me all in my head
Think I'd rather you in my bed
Whatever it is you know I can take it
I'm counting the days how many days
Til I can see you again
You got me all in my feelings
And you got me all I've been all in my feelings
And you got me all weak in my knees every time
Cause you got me all, all in my feelings
The way you got me all in my head
Think I'd rather you in my bed
Whatever it is you know I can take it
I'm counting the days how many days
Til I can see you again`
        },
        {
            id: 11,
            title: "Show Me Love",
            artist: "WizTheMc",
            src: "audio/Show Me Love.mp3",
            duration: 181,
            bgImage: "image/bgshowmelove.jpg",
            lyricsText: `Show me love, don't need no money
Don't need nobody
Just need your body, eh, eh
Show me love so sweet like honey
Don't need no talkin'
Just need your body, eh, eh
Your lovin' on me makes me feel special (yeah, special, babe, hmm)
No heaven on Earth if I can't be with you (I can't be with you, babe, uh)
Show me your eyes so I can tell the truth (I can tell the truth), oh
I got so high, oh, I can't leave (I can't leave, no-no, no)
I got your body all over my mind (all over my, all over my mind)
I got so high, I'm off my feet (I'm off my feet, babe), uh
We up in the clouds with the sun in our eyes (in our eyes)
Show me love, don't need no money (no need nobody)
Don't need nobody (need no one)
Just need your body (just need your love), eh, eh (ayy, ayy)
Show me love so sweet like honey (ayy, ayy)
Don't need no talkin'
Just need your body, eh, eh
Eh-eh, eh-eh, eh-eh, eh-eh
Eh-eh, eh-eh, eh-eh, eh
Eh-eh, eh-eh, eh-eh, eh-eh
Eh-eh, eh-eh, eh-eh, eh-eh
Tellin' me, tellin' me, tellin' me, tellin' me, tellin' me, tellin' me you feel fine
Never leave, never leave, never leave, never leave, never leavin' your side, uh
Wanna keep you in my life, no need to move (need to move)
Whenever you're here, I feel like I can't lose (I can't lose, babe)
Baby, I wanna ride with you, oh, I, oh, I
I got so high, oh, I can't leave (I can't leave, I can't leave)
I got your body all over my mind (over my mind, over my mind)
I got so high, I'm off my feet (I'm off my feet, babe), uh
We up in the clouds with the sun in our eyes (in our eyes)
Show me love, don't need no money (no need nobody)
Don't need nobody (need no one)
Just need your body (just need your love), eh, eh (ayy, ayy)
Show me love so sweet like honey (ayy, ayy)
Don't need no talkin'
Just need your body, eh, eh
Show me love, show me love, show me love
Show me love, show me love, baby, show love
Show me love, show me love, show me love
Show me love, show me love, baby, show love
Show me love, show me love, show me love
Show me love, show me love, baby, show love
Show me love, show me love`
        },
        {
            id: 12,
            title: "double take",
            artist: "dhruv",
            src: "audio/Double Take.mp3",
            duration: 171,
            bgImage: "image/bgdoubletake.jpg",
            lyricsText: `I could say I never dare
To think about you in that way, but
I would be lyin'
And I pretend I'm happy for you
When you find some dude to take home
But I won't deny that
In the midst of the crowds
In the shapes in the clouds
I don't see nobody but you
In my rose-tinted dreams
Wrinkled silk on my sheets
I don't see nobody but you
Boy, you got me hooked onto something
Who could say that they saw us coming?
Tell me
Do you feel the love?
Spend a summer or a lifetime with me
Let me take you to the place of your dreams
Tell me
Do you feel the love?
And I could say I never unzipped
Those blue Levi's inside my head
But that's far from the truth
Don't know what's come over me
It seems like yesterday when I said
"We'll be friends forever"
Constellations of stars
Murals on city walls
I don't see nobody but you
You're my vice, you're my muse
You're a nineteenth floor view
I don't see nobody but you
Boy, you got me hooked onto something
Who could say that they saw us coming?
Tell me
Do you feel the love?
Spend a summer or a lifetime with me
Let me take you to the place of your dreams
Tell me
Do you feel the love?
Boy, you got me hooked onto something
Who could say that they saw us coming?
Tell me
Do you feel the love?
Spend a summer or a lifetime with me
Let me take you to the place of your dreams
Tell me
Do you feel the love?
Do you feel the love?
Do you feel the love?
Do you feel the love?
Do you feel the love?
Feel the love
Do you feel the love?`
        },
        {
            id: 13,
            title: "Somewhere Only We Know",
            artist: "Keane",
            src: "audio/Some Where We Only Know.mp3",
            duration: 237,
            bgImage: "image/bgsomewhere.jpg",
            lyricsText: `I walked across an empty land
I knew the pathway like the back of my hand
I felt the earth beneath my feet
Sat by the river and it made me complete
Oh, simple thing, where have you gone?
I'm getting old, and I need something to rely on
So, tell me when you're gonna let me in
I'm getting tired, and I need somewhere to begin
I came across a fallen tree
I felt the branches of it looking at me
Is this the place we used to love?
Is this the place that I've been dreaming of?
Oh, simple thing, where have you gone?
I'm getting old, and I need something to rely on
So, tell me when you're gonna let me in
I'm getting tired, and I need somewhere to begin
And if you have a minute, why don't we go
Talk about it somewhere only we know?
This could be the end of everything
So, why don't we go somewhere only we know?
Somewhere only we know
Oh, simple thing, where have you gone?
I'm getting old, and I need something to rely on
So, tell me when you're gonna let me in
I'm getting tired, and I need somewhere to begin
And if you have a minute, why don't we go
Talk about it somewhere only we know?
This could be the end of everything
So, why don't we go?
So, why don't we go?
Ooh, oh-oh
Ah, oh
This could be the end of everything
So, why don't we go somewhere only we know?
Somewhere only we know
Somewhere only we know`
        },
        {
            id: 14,
            title: "If I Had A Gun...",
            artist: "Noel Gallagher's High Flying Birds",
            src: "audio/if i had a gun.mp3",
            duration: 249,
            bgImage: "image/bgifihadagun.jpg",
            lyricsText: `If I had a gun
I'd shoot a hole into the sun
And love would burn this city down for you
If I had the time
I'd stop the world and make you mine
And every day would stay the same with you
Give you back a dream
Show you now what might have been
If all the tears you cry would fade away
I'll be by your side
When they come and say goodbye
And we will live to fight another day
Excuse me if I spoke too soon
My eyes have always
Followed you around the room
'Cause you're the only
God that I will ever need
I'm holding on
I'm waiting for the moment to find me
Hope I didn't speak too soon
My eyes have always
Followed you around the room
'Cause you're the only
God that I will ever need
I'm holding on
I'm waiting for the moment
For my heart to be unbroken by the seams
Let me fly you to the moon
My eyes have always followed you around the room
'Cause you're the only
God that I will ever need
I'm holding on
I'm waiting for the moment to find me
If I had a gun
I'd shoot a hole into the sun
And love will burn this city down for you`
        },
        {
            id: 15,
            title: "Can I Be Him",
            artist: "James Arthur",
            src: "audio/Can I Be Him.mp3",
            duration: 246,
            bgImage: "image/bgcanibehim.jpg",
            lyricsText: `You walked into the room
And now my heart has been stolen
You took me back in time to when I was unbroken
Now you're all I want
And I knew it from the very first moment
'Cause a light came on when I heard that song
And I want you to sing it again
I swear that every word you sing
You wrote them for me
Like it was a private show
I know you never saw me
When the lights come on and I'm on my own
Will you be there to sing it again?
Could I be the one you talk about in all your stories
Can I be him?
I heard there was someone but I know he don't deserve you
If you were mine I'd never let anyone hurt you
I wanna dry those tears, kiss those lips
It's all that I've been thinking about
'Cause a light came on when I heard that song
And I want you to sing it again
I swear that every word you sing
You wrote them for me
Like it was a private show
I know you never saw me
When the lights come on and I'm on my own
Will you be there to sing it again?
Could I be the one you talk about in all your stories?
Can I be the one?
Can I be the one?
Can I be the one?
Oh, can I, can I be him?
Won't you sing it again?
Oh, when you sing it again
Can I be him?
Oh sing it again
Oh, when you sing it again
Can I be him?
I swear that every word you sing
You wrote them for me
Like it was a private show
I know you never saw me
When the lights come on and I'm on my own
Will you be there, will you be there?
Can I be the one you talk about in all your stories?
Can I be him?
Can I be him?
Can I be him?
Can I be him?`
        },
        {
            id: 16,
            title: "Scott Street",
            artist: "Phoebe Bridgers",
            src: "audio/Scott Street.mp3",
            duration: 305,
            bgImage: "image/bgscottstreet.jpg",
            lyricsText: `Walking Scott Street, feeling like a stranger
With an open heart, open container
I've got a stack of mail and a tall can
It's a shower beer, it's a payment plan
There's helicopters over my head
Every night when I go to bed
Spending money and I earned it
When I'm lonely, that's when I'll burn it
Do you feel ashamed
When you hear my name?
I asked you, "How is your sister?
I heard she got her degree"
And I said, "That makes me feel old"
You said, "What does that make me?"
I asked you, "How is playing drums?"
You said, "It's too much shit to carry"
"And what about the band?"
You said, "They're all getting married"
Do you feel ashamed
When you hear my name?
Ooh-ooh, ooh
Ooh-ooh, ooh
Ooh-ooh, ooh
Ooh-ooh, ooh
Ooh-ooh, ooh
Ooh-ooh, ooh
Ooh-ooh, ooh
Ooh-ooh, ooh
Ooh-ooh, ooh
anyway, don't be a stranger
(Ooh-ooh, ooh)
(Ooh-ooh, ooh) anyway, don't be a stranger
don't be a stranger
(Ooh-ooh, ooh)
Ooh-ooh, ooh`
        },
        {
            id: 17,
            title: "When We Were Young",
            artist: "Adele",
            src: "audio/When were we young.mp3",
            duration: 200,
            bgImage: "image/bgwhenwereweyoung.jpg",
            lyricsText: `Everybody loves the things you do
From the way you talk
To the way you move
Everybody here is watching you
Cause you feel like home
You're like a dream come true
But if by chance you're here alone
Can I have a moment
Before I go?
Cause I've been by myself all night long
Hoping you're someone I used to know

You look like a movie
You sound like a song
My God, this reminds me
Of when we were young

Let me photograph you in this light
In case it is the last time
That we might be exactly like we were
Before we realized
We were sad of getting old
It made us restless
It was just like a movie
It was just like a song

I was so scared to face my fears
Cause nobody told me that you'd be here
And I swore you moved overseas
That's what you said, when you left me

You still look like a movie
You still sound like a song
My God, this reminds me
Of when we were young

Let me photograph you in this light
In case it is the last time
That we might be exactly like we were
Before we realized
We were sad of getting old
It made us restless
It was just like a movie
It was just like a song

When we were young
When we were young
When we were young
When we were young

It's hard to win me back
Everything just takes me back
To when you were there
To when you were there
And a part of me keeps holding on
Just in case it hasn't gone
I guess I still care
Do you still care?

It was just like a movie
It was just like a song
My God, this reminds me
Of when we were young

When we were young
When we were young
When we were young
When we were young

Let me photograph you in this light
In case it is the last time
That we might be exactly like we were
Before we realized
We were sad of getting old
It made us restless
I'm so mad I'm getting old
It makes me reckless
It was just like a movie
It was just like a song
When we were young`
        },
        {
            id: 18,
            title: "505",
            artist: "Arctic Monkeys",
            src: "audio/505.mp3",
            duration: 253,
            bgImage: "image/bg505arctic.jpg",
            lyricsText: `I'm going back to 505
If it's a seven hour flight or a forty-five minute drive
In my imagination, you're waitin' lyin' on your side
With your hands between your thighs
Stop and wait a sec
When you look at me like that, my darlin', what did you expect?
I'd probably still adore you with your hands around my neck
Or I did last time I checked
Not shy of a spark
The knife twists at the thought that I should fall short of the mark
Frightened by the bite, though it's no harsher than the bark
The middle of adventure, such a perfect place to start
I'm going back to 505
If it's a seven hour flight or a forty-five minute drive
In my imagination, you're waitin' lyin' on your side
With your hands between your thighs
But I crumble completely when you cry
It seems like once again you've had to greet me with goodbye
I'm always just about to go and spoil the surprise
Take my hands off of your eyes too soon
I'm going back to 505
If it's a seven hour flight or a forty-five minute drive
In my imagination, you're waitin' lyin' on your side
With your hands between your thighs and a smile`
        },
        {
            id: 19,
            title: "Nobody Gets Me",
            artist: "SZA",
            src: "audio/sza.mp3",
            duration: 180,
            bgImage: "image/bgsza.jpg",
            lyricsText: `Took a long vacation
No makeup, just Jay-Z
You were balls deep, now we beefin'
Had me butt-naked at the MGM
So wasted screamin', "Fuck that"
Love me now, but I'm anythin'
Hurry now, baby, stick it in
'Fore the memories get to kickin' in
It's too late
I don't wanna lose what's left of you
How am I supposed to tell ya?
I don't wanna see you with anyone but me
Nobody gets me like you
How am I supposed to let you go?
Only like myself when I'm with you
Nobody gets me, you do (do)
You do
Nobody gets me, you do (do)
You do
Nobody gets me, you do
You do
Nobody gets me, you do
Took me out to the ballet
You proposed, I went on the road
You was feelin' empty, so you left me
Now I'm stuck dealin' with a deadbeat
If I'm real, I deserve less
If I was you, I wouldn't take me back
I pretend when I'm with a man, it's you
And I know that it's too late
I don't wanna lose what's left of you
How am I supposed to tell ya?
I don't wanna see you with anyone but me
Nobody gets me like you
How am I supposed to let you go?
Only like myself when I'm with you
Nobody gets me, you do (do)
You do
Nobody gets me, you do (do)
You do
Nobody gets me, you do (do, ooh)
You do
Nobody gets me, you do (do, ooh)
Nobody gets me, you do`
        },
        {
            id: 20,
            title: "About You",
            artist: "The 1975",
            src: "audio/About You.mp3",
            duration: 326,
            bgImage: "image/bgaboutyou.jpg",
            lyricsText: `I know a place
It's somewhere I go when I need to remember your face
We get married in our heads
Something to do while we try to recall how we met
Do you think I have forgotten?
Do you think I have forgotten?
Do you think I have forgotten about you?
You and I (don't let go), we're alive (don't let go)
With nothing to do, I could lay and just look in your eyes
Wait (don't let go), and pretend (don't let go)
Hold on, and hope that we'll find our way back in the end (in the end)
Do you think I have forgotten?
Do you think I have forgotten?
Do you think I have forgotten about you?
Do you think I have forgotten?
Do you think I have forgotten?
Do you think I have forgotten about you?
And there was something 'bout you that now I can't remember
It's the same damn thing that made my heart surrender
And I miss you on a train, I miss you in the morning
I never know what to think about
I think about you (don't let go)
About you (don't let go)
Do you think I have forgotten about you? (Don't let go)
About you
About you
Do you think I have forgotten about you? (Don't let go)`
        },
        {
            id: 21,
            title: "Merindumu Lagi",
            artist: "Khifnu",
            src: "audio/Merindumu Lagi.mp3",
            duration: 232,
            bgImage: "image/bgmerindumu.jpg",
            lyricsText: `Sejak saat pertama melihat senyumannya
Jantung berdebar-debar, inikah pertanda?
Namun, ternyata salah, harapanku pun musnah
Sejak aku melihat kau s'lalu dengannya
Tuhan, tolong, aku ingin dirinya
Rindu padanya, memikirkannya
Namun, mengapa saat jatuh cinta
Sayang, sayang, dia ada yang punya?
Mungkin ku harus pergi untuk melupakannya
Dalam hati berkata takkan sanggup pergi, wo-wo-wo
Tuhan, tolong, aku ingin dirinya
Rindu padanya, memikirkannya
Namun, mengapa saat jatuh cinta
Sayang, sayang, dia ada yang punya?
T'lah kucoba menghapus bayang-bayang indah
Tetapi selalu aku merindu lagi, wo-wo-wo-oh-oh (wo)
Oh, mengapa ku tak bisa?
Ku tak bisa, ku tak bisa
Tuhan, tolong, aku ingin dirinya
Rindu padanya, memikirkannya
Namun, mengapa saat jatuh cinta
Sayang, sayang, dia ada yang punya?
Tuhan, tolong, tolong, aku
Jatuh cinta pada kekasih orang
Ingin lupa, ku tak bisa
Sayang, sayang, dia ada yang punya
Tuhan, tolong, aku ingin dirinya
Rindu padanya, memikirkannya
Namun, mengapa saat jatuh cinta
Sayang, sayang, dia ada yang punya?
Sayang, sayang, dia ada yang punya
Sayang, sayang, dia ada yang punya
Wo-wo`
        },
        {
            id: 22,
            title: "Mutiara",
            artist: "Ipank",
            src: "audio/mutiara.mp3",
            duration: 292,
            bgImage: "image/bgipank.jpg",
            lyricsText: `Engkaukah mutiara itu
Rela kuselami di laut biru
Tingkahmu bagai purnama
Paras bertaburkan cahaya
Mantra apakah yang kau berikan
Sehingga bayangmu menghantui
Selalu terbayang angan
Disetiap mimpi malam
Selalu terbayang angan
Menjadi igauan
Dari ujung kuku
Hingga ujung rambutku
Mengapa di hati ini lain terasa
Meski ku tak kenal
Siapa namamu
Sungguh damai hati ini bila bersama
Adakah kenyamanan di hatimu
Di saat kau melirik dan memandangku
Adakah serat rasa cinta fatamorgana
Sepercik ketukan jiwa
Ilusi apakah yang telah kuraih
Senyum manis khayalan yang tak pasti
Terkadang engkau datang
Sekejap hilang lagi
Bagaikan mimpi di siang hari
Hanya bunga mimpi
Penghibur diri
Mantra apakah yang kau berikan
Sehingga bayangmu menghantui
Selalu terbayang angan
Disetiap mimpi malam
Selalu terbayang angan
Menjadi igauan
Dari ujung kuku
Hingga ujung rambutku
Mengapa di hati ini lain terasa
Meski ku tak kenal
Siapa namamu
Sungguh damai hati ini bila bersama
Adakah kenyamanan di hatimu
Di saat kau melirik dan memandangku
Adakah serat rasa cinta fatamorgana
Sepercik ketukan jiwa
Ilusi apakah yang telah kuraih
Senyum manis khayalan yang tak pasti
Terkadang engkau datang
Sekejap hilang lagi
Bagaikan mimpi di siang hari
Hanya bunga mimpi
Penghibur diri`
        },
        {
            id: 23,
            title: "we can't be friends",
            artist: "Ariana Grande",
            src: "audio/We Can't Be Friends.mp3",
            duration: 228,
            bgImage: "image/bgwecan'tbefriends.jpg",
            lyricsText: `I didn't think you'd understand me
How could you ever even try?
I don't wanna tiptoe, but I don't wanna hide
But I don't wanna feed this monstrous fire
Just wanna let this story die
And I'll be alright
We can't be friends
But I'd like to just pretend
You cling to your papers and pens
Wait until you like me again
Wait for your love
Lo-love, I'll wait for your love
Me and my truth, we sit in silence
Mm, baby girl, it's just me and you
'Cause I don't wanna argue, but I don't wanna bite
My tongue, yeah, I think I'd rather die
You got me misunderstood
But at least I look this good
We can't be friends
But I'd like to just pretend
You cling to your papers and pens
Wait until you like me again
Wait for your love
Lo-love, I'll wait for your love
I'll wait for your love
Lo-love, I'll wait for your love
Know that you made me
I don't like how you paint me
Yet, I'm still here hanging
Not what you made me
It's something like a daydream
But I feel so seen in the night
So for now, it's only me
And maybe that's all I need
We can't be friends
But I'd like to just pretend
You cling to your papers and pens
Wait until you like me again
Wait for your love
Lo-love, I'll wait for your love
I'll wait for your love
Lo-love, I'll wait for your love
I'll wait for your love
I'll wait for your love
I'll wait for your love
I'll wait for your love
I'll wait for your love`
        },
        {
            id: 24,
            title: "The Fate of Ophelia",
            artist: "Taylor Swift",
            src: "audio/The Fate of Ophelia.mp3",
            duration: 226,
            bgImage: "image/bgfateofophelia.jpg",
            lyricsText: `I heard you calling
On the megaphone
You wanna see me all alone
As legend has it you
Are quite the pyro
You light the match to watch it blow
And if you'd never come for me
I might've drowned in the melancholy
I swore my loyalty to me, myself and I
Right before you lit my sky up
All that time
I sat alone in my tower
You were just honing your powers
Now I can see it all (see it all)
Late one night
You dug me out of my grave and
Saved my heart from the fate of
Ophelia
Keep it one hundred
On the land, the sea, the sky
Pledge allegiance to your hands
Your team, your vibes
Don't care where the hell you been
'Cause now you're mine
It's 'bout to be the sleepless night
You've been dreaming of
The fate of Ophelia
The eldest daughter of a nobleman
Ophelia lived in fantasy
But love was a cold bed full of scorpions
The venom stole her sanity
And if you'd never come for me
I might've lingered in purgatory
You wrap around me like a chain, a crown, a vine
Pulling me into the fire
All that time
I sat alone in my tower
You were just honing your powers
Now I can see it all (see it all)
Late one night
You dug me out of my grave and
Saved my heart from the fate of
Ophelia
Keep it one hundred
On the land, the sea, the sky
Pledge allegiance to your hands
Your team, your vibes
Don't care where the hell you been
'Cause now you're mine
It's 'bout to be the sleepless night
You've been dreaming of
The fate of Ophelia
'Tis locked inside my memory
And only you possess the key
No longer drowning and deceived
All because you came for me
Locked inside my memory
And only you possess the key
No longer drowning and deceived
All because you came for me
All that time
I sat alone in my tower
You were just honing your powers
Now I can see it all (I can see it all)
Late one night
You dug me out of my grave and
Saved my heart from the fate of
Ophelia
Keep it one hundred
On the land, the sea, the sky
Pledge allegiance to your hands
Your team, your vibes
Don't care where the hell you been
'Cause now you're mine
It's 'bout to be the sleepless night
You've been dreaming of
The fate of Ophelia
You saved my heart from the fate of
Ophelia`
        },
        {
            id: 25,
            title: "kota ini tak sama tanpamu",
            artist: "Nadhif Basalamah",
            src: "audio/Kota ini tak sama tanpamu.mp3",
            duration: 231,
            bgImage: "image/bgkotainitaksamatanpamu.jpg",
            lyricsText: 
`Perjalanan melintasi
Kota ini
Dua langit, dua hari
Kau temani aku di sini
Jatuh cinta memang manis
Tak mau waktu ini habis
Penuhilah hati ini
Tak lagi sendiri
Oh, dengannya, dengan dia
Langkahku sempurna
Jatuh cinta memang manis
Apalagi ada kamu di sini
Genggam tanganku, sayang
Kota ini tak sama tanpamu
Masih rasa ingin lagi habiskan waktu di sini
Mungkin tiga atau empat hari lagi
Penuhilah rencanamu
Bersamaku lagi
Oh, denganmu terasa cepat berlalu
Belum puas, ingin lebih tahu jalanan kotamu
Jatuh cinta memang manis
Apalagi ada kamu di sini
Genggam tanganku, sayang
Kota ini tak sama tanpamu
Masih rasa ingin lagi habiskan waktu di sini
Mungkin tiga atau empat hari lagi
Genggam tanganku, sayang
Kota ini tak sama tanpamu
Masih rasa ingin lagi habiskan waktu di sini
Mungkin tiga atau empat hari lagi
Genggam tanganku, sayang
Kota ini tak sama tanpamu
Masih rasa ingin lagi habiskan waktu di sini
Mungkin tiga atau empat hari lagi
Oh-oh-oh
Atau mungkin selamanya
Rumahku hanyalah kita
Kau dan aku sempurna di mana-mana`
        },
        {
            id: 26,
            title: "Treat You Better",
            artist: "Shawn Mendes",
            src: "audio/Treat You Better.mp3",
            duration: 187,
            bgImage: "image/bgtreatyoubetter.jpg",
            lyricsText: `I won't lie to you
I know he's just not right for you
And you can tell me if I'm off, but I see it on your face
When you say that he's the one that you want
And you're spendin' all your time in this wrong situation
And anytime you want it to stop
I know I can treat you better than he can
And any girl like you deserves a gentleman
Tell me, why are we wasting time on all your wasted cryin'
When you should be with me instead?
I know I can treat you better, better than he can
I'll stop time for you
The second you say you'd like me to
I just wanna give you the lovin' that you're missing
Baby, just to wake up with you
Would be everything I need, and this could be so different
Tell me what you want to do
'Cause I know I can treat you better than he can
And any girl like you deserves a gentleman
Tell me, why are we wasting time on all your wasted cryin'
When you should be with me instead?
I know I can treat you better, better than he can
Better than he can
Give me a sign, take my hand, we'll be fine
Promise I won't let you down
Just know that you don't have to do this alone
Promise I'll never let you down
'Cause I know I can treat you better than he can
And any girl like you deserves a gentleman
Tell me, why are we wasting time on all your wasted cryin'
When you should be with me instead?
I know I can treat you better, better than he can, oh
Better than he can
Better than he can`
        },
        {
            id: 27,
            title: "Rewrite The Stars",
            artist: "James Arthur & AnneMarie",
            src: "audio/Rewrite The Stars.mp3",
            duration: 218,
            bgImage: "image/bgrewritethestars.jpg",
            lyricsText: `You know I want you
It's not a secret I try to hide
You know you want me
So don't keep sayin' our hands are tied
You claim it's not in the cards
And fate is pullin' you miles away and out of a reach from me
But you're hearin' my heart
So who can stop me if I decide that you're my destiny?
What if we rewrite the stars?
Say you were made to be mine
Nothin' could keep us apart
You'll be the one I was meant to find
It's up to you, and it's up to me
No one could say what we get to be
So why don't we rewrite the stars?
And maybe the world could be ours, tonight
Ah-oh (no, no, no, no)
Ah-oh (mm)
You think it's easy
You think I don't wanna run to you, yeah
But there are mountains (but there are mountains)
And there are doors that we can't walk through
I know you're wondering why
Because we're able to be just you and me within these walls
But when we go outside
You're gonna wake up and see that it was hopeless after all
No one can rewrite the stars
How can you say you'll be mine?
Everythin' keeps us apart
And I'm not the one you were meant to find (the one you were meant to find)
It's not up to you, it's not up to me (yeah)
When everyone tells us what we can be
And how can we rewrite the stars?
Say that the world can be ours, tonight
All I want is to fly with you
All I want is to fall with you
So just give me all of you
It feels impossible (it's not impossible)
Is it impossible?
Say that it's possible
And how do we rewrite the stars?
Say you were made to be mine
And nothin' could keep us apart
'Cause you are the one I was meant to find
It's up to you, and it's up to me
No one could say what we get to be
And why don't we rewrite the stars?
Changin' the world to be ours
Ay, ah-oh (no, no, no, no)
Ah-oh (mm)
You know I want you
It's not a secret I try to hide
But I can't have you
We're bound to break and my hands are tied`
        },
        {
            id: 28,
            title: "In The Stars",
            artist: "Benson Boone",
            src: "audio/In The Stars.mp3",
            duration: 216,
            bgImage: "image/bginthestars.jpg",
            lyricsText: `Two, three
Sunday mornings were your favorite
I used to meet you down on Woods Creek Road
You did your hair up like you were famous
Even though it's only church where we were goin'
Now, Sunday mornings, I just sleep in
It's like I buried my faith with you
I'm screamin' at a God I don't know if I believe in
'Cause I don't know what else I can do
I'm still holdin' on to everything that's dead and gone
I don't wanna say goodbye, 'cause this one means forever
And now you're in the stars and six-feet's never felt so far
Here I am alone between the heavens and the embers
Oh, it hurts so hard
For a million different reasons
You took the best of my heart
And left the rest in pieces
Diggin' through your old birthday letters
A crumpled 20 still in the box
I don't think that I could ever find a way to spend it
Even if it's the last 20 that I've got, oh
I'm still holdin' on to everything that's dead and gone
I don't wanna say goodbye, 'cause this one means forever
And now you're in the stars and six-feet's never felt so far
Here I am alone between the heavens and the embers
Oh, it hurts so hard
For a million different reasons
You took the best of my heart
And left the rest in pieces
I'm still holdin' (on), holdin' (on), holdin' on (on)
I'm still holdin' (on), holdin' (on), holdin' on (on)
I'm still holdin' (on), holdin' (on), I'm still holdin' on (on)
I'm still, ooh, still holdin' on
I'm still holdin' on to everything that's dead and gone (ooh)
I don't wanna say goodbye, 'cause this one means forever (ooh)
Now you're in the stars and six-feet's never felt so far
Here I am alone between the heavens and the embers
Oh, it hurts so hard
For a million different reasons
You took the best of my heart
Left the rest in pieces`
        },
        {
            id: 29,
            title: "Fearless",
            artist: "Taylor Swift",
            src: "audio/Fearless.mp3",
            duration: 241,
            bgImage: "image/bgfearless.jpg",
            lyricsText: `There's somethin' bout the way
The street looks when it's just rained
There's a glow off the pavement
You walk me to the car
And you know I wanna ask you to dance right there
In the middle of the parking lot
Yeah
Oh, yeah
We're drivin' down the road
I wonder if you know
I'm tryin' so hard not to get caught up now
But you're just so cool
Run your hands through your hair
Absent mindedly makin' me want you
And I don't know how it gets better than this
You take my hand and drag me head first
Fearless
And I don't know why
But with you I'd dance in a storm
In my best dress
Fearless
So baby drive slow
'Til we run out of road in this one horse town
I wanna stay right here in this passenger seat
You put your eyes on me
In this moment now capture it, remember it
'Cause I don't know how it gets better than this
You take my hand and drag me head first
Fearless
And I don't know why
But with you I'd dance in a storm
In my best dress
Fearless
Oh, oh
Well you stood there with me in the doorway
My hands shake
I'm not usually this way but
You pull me in and I'm a little more brave
It's the first kiss, it's flawless, really something, it's fearless
Oh, yeah
'Cause I don't know how it gets better than this
You take my hand and drag me head first
Fearless
And I don't know why
But with you I'd dance in a storm
In my best dress
Fearless
'Cause I don't know how it gets better than this
You take my hand and drag me head first
Fearless
And I don't know why
But with you I'd dance in a storm
In my best dress
Fearless
Oh, oh, oh yeah`
        },
        {
            id: 30,
            title: "Nonsense",
            artist: "Sabrina Carpenter",
            src: "audio/Nonsense.mp3",
            duration: 163,
            bgImage: "image/bgnonsense.jpg",
            lyricsText: `No
(Oh, la-la) da-ah-ah, ah (ah-ah)
(Uh, uh, uh, yeah)
Think I only want one number in my phone
I might change your contact to "don't leave me alone"
You said you like my eyes and you like to make 'em roll
Treat me like a queen, now you got me feelin' thrown, oh
But I can't help myself
When you get close to me
Baby, my tongue goes numb
Sounds like bleh, blah, blee
I don't want no one else (don't want)
Baby, I'm in too deep
Here's a lil' song I wrote (a song I wrote)
It's about you and me (me)
I'll be honest
Lookin' at you got me thinkin' nonsense
Cartwheels in my stomach when you walk in
When you got your arms around me
Oh, it feels so good I had to jump the octave
I think I got an ex but I forgot him
And I can't find my chill, I must have lost it
I don't even know I'm talkin' nonsense
I'm talkin', I'm talkin' (ah)
I'm talkin' all around the clock
I'm talkin' hope nobody knocks
I'm talkin' opposite of soft
I'm talkin' wild, wild thoughts
You gotta keep up with me
I got some young energy
I caught the L-O-V-E
How do you do this to me?
But I can't help myself
When you get close to me
Baby, my tongue goes numb
Sounds like blah, blah, bleh, blee
I don't want no one else (don't want)
Baby, I'm in too deep (too deep)
Here's a lil' song I wrote (a song I wrote)
It's about you and me
I'll be honest (honest)
Lookin' at you got me thinkin' nonsense
Cartwheels in my stomach when you walk in (when you walk in)
When you got your arms around me
Oh, it feels so good I had to hit the octave
I think I got an ex but I forgot him
And I can't find my chill, I must have lost it
I don't even know I'm talkin' nonsense (oh)
I'm talkin', I'm talkin', I'm talkin'
I'm talkin', I'm talkin'
Blah, blah, blah, blah, uh-uh-uh-uh
Ah
I don't even know anymore
(Oh)
This song catchier than chickenpox is
I bet your house is where my other sock is
Woke up this morning, thought I'd write a pop hit
How quickly can you take your clothes off pop quiz?
That one's not gonna make it
Most of these aren't gonna make`
        },
        {
            id: 31,
            title: "Jatuh Suka",
            artist: "Tulus",
            src: "audio/Jatuh Suka.mp3",
            duration: 174,
            bgImage: "image/bgjatuhsuka.jpg",
            lyricsText: `Sungguh ku tidak memiliki daya
Di depan harummu
Sungguh terkunci kata yang tertata
Di depan ragamu
Hu
Bila kau lihat ku tanpa sengaja
Beginikah surga
Bayangkan bila kau ajakku bicara
Ini semua bukan salahmu
Punya magis perekat yang sekuat itu
Dari lahir sudah begitu
Maafkan
Aku jatuh suka
Bila kau lihat ku tanpa sengaja
Hu
Beginikah surga
Bayangkan bila kau ajakku bicara
Ini semua bukan salahmu
Punya magis perekat yang sekuat itu
Dari lahir sudah begitu
Maafkan
Aku jatuh suka
Bila kau berkenan biarkanku di sampingmu
Berkuranglah satu jiwa yang sepi
Ini semua bukan salahmu
Punya magis perekat yang sekuat itu
Dari lahir sudah begitu
Maafkan oh uh
Ini semua bukan salahmu
Punya magis perekat yang sekuat itu
Dari lahir sudah begitu
Maafkan
Aku jatuh suka hm
Aku jatuh suka`
        },
        {
            id: 32,
            title: "The Art of Chasing You",
            artist: "Magnolia Celebration feat. Ade Paloh",
            src: "audio/The Art of Chasing You.mp3",
            duration: 234,
            bgImage: "image/bgtheart.jpg",
            lyricsText: `Stay up late
While i contemplate
All the dreams that crashin within my fate
The expectation
And satisfaction
Battle in and out against my patience
It is all because of you
Believe it or not
In every spot
All imagination culminate in a clot
Maybe i am
Maybe i'm not
Maybe you and i understood at what i told you
This is my fallout
To my fear of you
Fear of your way
Of getting away from me
Cause
I wanna know the way to you
And i want to understand
The art of chasing you
Cause
I wanna know the way to you
And i want to understand
The art of chasing you
I always think
That i'm right
Cause you never left
And everything is alright
Maybe i am
Maybe i'm not
Maybe you and i understood at what i told you
This is my fallin' out
To my fear of you
Fear of your way
Of getting away from me
Cause
I wanna know the way to you
And i want to understand
The art of chasing you
Cause
I wanna know the way to you
And i want to understand
The art of chasing you
It's a Cold
Winding road
Dusty eyes and i'm still walkin'
To feel what you feel
I must admit that i am welcomin' the pain that you inflict
To get beside you
Cause
I wanna know the way to you
And i want to understand
The art of chasing you
Cause
I wanna know the way to you
And i want to understand
The art of chasing you
Cause
I wanna know the way to you
And i want to understand
The art of chasing you
Cause
I wanna know the way to you
And i want to understand
The art of chasing you`
        },
        {
            id: 33,
            title: "Universe",
            artist: "thuy",
            src: "audio/Universe.mp3",
            duration: 182,
            bgImage: "image/bgthuy.jpg",
            lyricsText: `Oh, yeah (oh, yeah)
Just hold me close (just hold me close)
You keep me afloat (keep me)
With you, I feel stronger, oh
Just imagine all the little things we could do
Just imagine if I put my trust in you
Oh I, oh I (oh I)
'Cause you are my universe, my everything, my sunset
You still give me butterflies
My lullaby, you are
Everything I wanted (I wanted)
When you see me runnin' (runnin', runnin')
Run after me, don't let me go (oh)
Just imagine all the little things we could do
Just imagine if I put my trust into you
Oh I, oh I, run after me
I was down bad in a place where the sun don't shine
Had my head down, looked up, then you fell in my life
I was ducking all signs (oh), but look at how the stars aligned
You give me fever, you give me chills
Started as strangers, now look what we built
Oh I, oh I (oh I)
'Cause you are my universe, my everything, my sunset
You still give me butterflies
My lullaby, you are
Everything I wanted
When you see me runnin' (see me runnin')
Run after me, don't let me go, oh
Just imagine all the little things we could do
Just imagine if I put my trust into you
Oh I, oh I (oh I)
My universe, my everything, my sunset
You still give me butterflies, oh
Everything I wanted
When you see me runnin', run after me`
        },
        {
            id: 34,
            title: "Iris",
            artist: "The Goo Goo Dolls",
            src: "audio/Iris.mp3",
            duration: 282,
            bgImage: "image/bgiris.jpg",
            lyricsText: `And I'd give up forever to touch you
'Cause I know that you feel me somehow
You're the closest to Heaven that I'll ever be
And I don't wanna go home right now
And all I can taste is this moment
And all I can breathe is your life
And sooner or later, it's over
I just don't wanna miss you tonight
And I don't want the world to see me
'Cause I don't think that they'd understand
When everything's made to be broken
I just want you to know who I am
And you can't fight the tears that ain't coming
Or the moment of truth in your lies
When everything feels like the movies
Yeah, you bleed just to know you're alive
And I don't want the world to see me
'Cause I don't think that they'd understand
When everything's made to be broken
I just want you to know who I am
And I don't want the world to see me
'Cause I don't think that they'd understand
When everything's made to be broken
I just want you to know who I am
And I don't want the world to see me
'Cause I don't think that they'd understand
When everything's made to be broken
I just want you to know who I am
I just want you to know who I am
I just want you to know who I am
I just want you to know who I am`
        },
        {
            id: 35,
            title: "Cincin",
            artist: "Hindia",
            src: "audio/Cincin.mp3",
            duration: 270,
            bgImage: "image/bgcincin.jpg",
            lyricsText: `Kau bermasalah jiwa aku pun rada gila
Jodoh akal-akalan neraka kita bersama
Kau langganan menangis lakimu muntah-muntah
Begitu terus sampai Iblis tobat dan sedekah
Terkadang rasanya leher terbakar hingga pagi
Seperti aku hidup berpasangan dengan api
Berhenti ulangi psikolog dan terapi
Aku isi bensin kita coba lagi
Tapi sbelumnya sejuta sayang untukmu cinta
Karna aku pun bola panas juga kadang lebih atau sama parahnya
Dan jika bicara tentang masa depan aku pun bingung tak punya tebakan
Lagu cinta untuk akhir dunia lihat kami nyanyikan ini bersama
Smoga hidup kita trus begini-gini saja
Walau sungai meluap dan kurs tak masuk logika
Smoga kita mencintai apa adanya
Walau katanya skarang ku bisa masuk penjara
Satu per satu hari per hari
Yang menyakiti benahi lagi
Perihal esok tuk nanti dulu
Perihal cincin kucari waktu
Persetan kata siapa mau bilang apa tak guna
Mreka hanya tahu namamu mreka takkan jadi diriku
Persetan aturan cinta tak tertulis di atas batu
Apa kau ingin menjadi benar atau ingin menjadi muda
Smoga hidup kita trus begini-gini saja
Walau sungai meluap dan kurs tak masuk logika
Smoga kita mencintai apa adanya
Walau katanya skarang ku bisa masuk penjara
Persetan kata siapa mau bilang apa tak guna
Mreka hanya tahu namamu mreka takkan jadi diriku
Persetan aturan cinta tak tertulis di atas batu
Apa kau ingin menjadi benar atau kau ingin menjadi muda
Lagu cinta untuk akhir dunia
Sekarang bantu aku nyanyikan ini bersama
Smoga hidup kita trus begini-gini saja
Walau sungai meluap dan kurs tak masuk logika
Smoga kita mencintai apa adanya
Walau katanya skarang ku bisa masuk penjara
Satu per satu hari per hari
Yang menyakiti benahi lagi
Perihal esok tuk nanti dulu
Perihal cincin kucari waktu`
        },
        {
            id: 36,
            title: "Love Story",
            artist: "Taylor Swift",
            src: "audio/Love Story.mp3",
            duration: 235,
            bgImage: "image/bglovestory.jpg",
            lyricsText: `We were both young when I first saw you
I close my eyes and the flashback starts
I'm standin' there
On a balcony in summer air
See the lights, see the party, the ball gowns
See you make your way through the crowd
And say, "Hello"
Little did I know
That you were Romeo, you were throwin' pebbles
And my daddy said, "Stay away from Juliet"
And I was cryin' on the staircase
Beggin' you, "Please don't go, " and I said
Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story, baby, just say, "Yes"
So I sneak out to the garden to see you
We keep quiet, 'cause we're dead if they knew
So close your eyes
Escape this town for a little while, oh oh
'Cause you were Romeo, I was a scarlet letter
And my daddy said, "Stay away from Juliet"
But you were everything to me
I was beggin' you, "Please don't go, " and I said
Romeo, take me somewhere we can be alone
I'll be waiting, all there's left to do is run
You'll be the prince and I'll be the princess
It's a love story, baby, just say, "Yes"
Romeo, save me, they're tryna tell me how to feel
This love is difficult, but it's real
Don't be afraid, we'll make it out of this mess
It's a love story, baby, just say, "Yes"
Oh, oh
I got tired of waiting
Wonderin' if you were ever comin' around
My faith in you was fading
When I met you on the outskirts of town, and I said
Romeo, save me, I've been feeling so alone
I keep waiting for you, but you never come
Is this in my head? I don't know what to think
He knelt to the ground and pulled out a ring
And said, "Marry me, Juliet
You'll never have to be alone
I love you and that's all I really know
I talked to your dad, go pick out a white dress
It's a love story, baby, just say, "Yes"
Oh, oh, oh
Oh, oh, oh, oh
'Cause we were both young when I first saw you`
        },
        {
            id: 37,
            title: "Shout Out",
            artist: "ENYHYPEN",
            src: "audio/Shout Out.mp3",
            duration: 228,
            bgImage: "image/bgshoutout.jpg",
            lyricsText: `We go and shout, yeah-eh
Oh, oh-oh, oh-oh

Maeil hwipsseullideut harureul saldaga
Jageun uimuni saenggyeotji
Ongat saramdeurui mare jichyeoman ga
Daeche nuga nareul jeonguihae
Nal gadwotdeon geojit gateun paradigm
Nugunga geueo noeun border line neomeo
I shout out, and this is my shout out
Na daun nal wihae

Jemeotdaero ne meotdaero (Woah-oh-oh)
Yeogin urimanui universe (Woah-oh-oh)
Nunchi ttawi bol geot eopsi
Geujeo jayuroun i sungan
You and me

We go and shout, shout, shout
When we're together
Three, two, one, tteugeopge oechyeo
Hanaro keojyeoganeun moksori
Simjangi teojil deusi ttwigo isseo
Shout, shout, shout, neowa na gachi
Sesangeul heundeureo nwa
Deo sikkeureopge
Neol hyanghan nae maeumeul sorichyeo
Gaseum tteugeopge shout out

Honjaramyeon pogi haetgetji
Nal gadwodun geu byeoge gatyeo
Nal bureuneun neoui moksori
You're blowing up my heart uh, bang-bang!
Seoroui mokgyeokja
Yeah, you and I-I
Seoroui listener
Mitgo itjana
Uriui wanbyeokan harmony
Jeongmal areumdawo

Jemeotdaero ne meotdaero
Yeogin urimanui universe
Nunchi ttawi bol geot eopsi
Geujeo jayuroun i sungan
You and me

We go and shout, shout, shout
When we're together
Three, two, one, tteugeopge oechyeo
Hanaro keojyeoganeun moksori
Simjangi teojil deusi ttwigo isseo
Shout, shout, shout, neowa na gachi
Sesangeul heundeureo nwa
Deo sikkeureopge
Neol hyanghan nae maeumeul sorichyeo
Gaseum tteugeopge shout out

Oh-oh-oh-oh, shout
Oh-oh-oh-oh, oh
Sesangeul hyanghae hamkke sorichyeo
Urin deo keuge shout out!

Jinjja nae moksoriro (Oh-oh-oh)
Nege jinsimeul jeonhae (Oh-oh, ah-ah)
Uri hamkkemyeon segyeneun areumdawo
Jeomjeom peojyeoga peojyeoga meolli
Ijen sorichyeo sorichyeo oechyeo
'Till the end of time
The story of you and I

We go and shout, shout, shout
When we're together
Stay stay stay you make it better
My life without you is a misery
Simjangi teojil deusi ttwigo isseo
Shout, shout, shout, neowa na gachi
Sesangeul heundeureo nwa
Deo sikkeureopge
Neol hyanghan nae maeumeul sorichyeo
Gaseum tteugeopge shout out

Oh-oh-oh-oh, shout
Oh-oh-oh-oh, oh
Sesangeul hyanghae hamkke sorichyeo
Urin deo keuge shout out
Oh-oh-oh-oh, shout
Oh-oh-oh-oh, oh
Sesangeul hyanghae hamkke sorichyeo
Urin deo keuge shout out`
        },
        {
            id: 38,
            title: "Bertaut",
            artist: "Nadin Amizah",
            src: "audio/Bertaut.mp3",
            duration: 357,
            bgImage: "image/bgbertaut.jpg",
            lyricsText: `Bun, hidup berjalan seperti bajingan
Seperti landak yang tak punya teman
Ia menggonggong bak suara hujan
Dan kau pangeranku mengambil peran
Bun, kalau saat hancur, ku disayang
Apalagi saat ku jadi juara
Saat tak tahu arah, kau di sana
Menjadi gagah saat ku tak bisa
Sedikit kujelaskan tentangku dan kamu
Agar seisi dunia tahu
Keras kepalaku sama denganmu
Caraku marah, caraku tersenyum
Seperti detak jantung yang bertaut
Nyawaku nyala kar'na denganmu
Aku masih ada sampai di sini
Melihatmu kuat setengah mati
Seperti detak jantung yang bertaut
Nyawaku nyala kar'na denganmu
Bun, aku masih tak mengerti banyak hal
Semuanya berenang di kepala
Dan kau, dan semua yang kau tahu tentangnya
Menjadi jawab saat ku bertanya
Sedikit kujelaskan tentangku dan kamu
Agar seisi dunia tahu
Keras kepalaku sama denganmu
Caraku marah, caraku tersenyum
Seperti detak jantung yang bertaut
Nyawaku nyala kar'na denganmu
Aku masih ada sampai di sini
Melihatmu kuat setengah mati
Seperti detak jantung yang bertaut
Nyawaku nyala kar'na denganmu
Semoga lama hidupmu di sini
Melihatku berjuang sampai akhir
Seperti detak jantung yang bertaut
Nyawaku nyala kar'na denganmu
Hu-oh-oh, hu-uh-ho, hu-oh`
        },
        {
            id: 39,
            title: "There's Nothing Holdin' Me Back",
            artist: "Shawn Mendes",
            src: "audio/There's Nothing Holdin' Me Back.mp3",
            duration: 199,
            bgImage: "image/bgtreatyoubetter.jpg",
            lyricsText: `I wanna follow where she goes
I think about her and she knows it
I wanna let her take control
'Cause every time that she gets close, yeah
She pulls me in enough to keep me guessin', hm
And maybe I should stop and start confessin'
Confessin', yeah
Oh, I've been shakin', I love it when you go crazy
You take all my inhibitions
Baby, there's nothing holdin' me back
You take me places that tear up my reputation
Manipulate my decisions
Baby, there's nothing holdin' me back
There's nothing holdin' me back
There's nothing holdin' me back
She says that she's never afraid
Just picture everybody naked
She really doesn't like to wait
Not really into hesitation
Pulls me in enough to keep me guessin', whoa
And maybe I should stop and start confessin'
Confessin', yeah
Oh, I've been shakin', I love it when you go crazy
You take all my inhibitions
Baby, there's nothing holdin' me back
You take me places that tear up my reputation
Manipulate my decisions
Baby, there's nothing holdin' me back
There's nothing holdin' me back
'Cause if we lost our minds and we took it way too far
I know we'd be alright, I know we would be alright
If you were by my side and we stumbled in the dark
I know we'd be alright, I know we would be alright
'Cause if we lost our minds and we took it way too far
I know we'd be alright, I know we would be alright
If you were by my side and we stumbled in the dark
I know we'd be alright, we would be alright
Oh, I've been shakin', I love it when you go crazy
You take all my inhibitions
Baby, there's nothing holdin' me back
You take me places that tear up my reputation
Manipulate my decisions
Baby, there's nothing holdin' me back, whoa-oh
There's nothing holdin' me back
I feel so free when you're with me, baby
Baby, there's nothin' holdin' me back`
        },
        {
            id: 40,
            title: "8 Letters",
            artist: "Why Don't We",
            src: "audio/8 Letters.mp3",
            duration: 190,
            bgImage: "image/bg8letters.jpg",
            lyricsText: `You know me the best
You know my worst, see me hurt, but you don't judge
That right there is the scariest feeling
Opening and closing up again
I've been hurt, so I don't trust
Now here we are, staring at the ceiling
I've said those words before, but it was a lie
And you deserve to hear them a thousand times
If all it is is eight letters
Why is it so hard to say?
If all it is is eight letters
Why am I in my own way?
Why do I pull you close?
And then ask you for space
If all it is is eight letters
Why is it so hard to say?
Isn't it amazing how almost every line on our hands align?
When your hand's in mine
It's like I'm whole again, isn't that a sign?
I should speak my mind
I've said those words before, but it was a lie
And you deserve to hear them a thousand times
If all it is is eight letters
Why is it so hard to say?
If all it is is eight letters
Why am I in my own way?
Why do I pull you close?
And then ask you for space
If all it is is eight letters
Why is it so hard to say? (Woah, oh yeah)
When I close my eyes
It's you there in my mind
When I close my eyes
If all it is is eight letters
Why is it so hard to say?
If all it is is eight letters
Why am I in my own way?
Why do I pull you close?
And then ask you for space
If all it is is eight letters
Why is it so hard to say?
If all it is is eight letters
When I close my eyes
It's you there in my mind (it's only you)
When I close my eyes
If all it is is eight letters
When I close my eyes
It's you there in my mind (you)
When I close my eyes
If all it is is eight letters`
        },
    ];

    
    
    let currentTrack = parseInt(localStorage.getItem("music_currentTrack")) || 0;
    let isPlaying = localStorage.getItem("music_isPlaying") === "true";
    let currentTime = parseFloat(localStorage.getItem("music_currentTime")) || 0;

    let audio = null;
    let isPlaylistVisible = false;
    
    // Format waktu
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Escape HTML
    function escapeHtml(text) {
        if (!text) return '';
        return String(text).replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }
    
    // Fungsi untuk mendapatkan array lirik
    function getLyricsArray(trackIndex) {
        const lyricsText = playlist[trackIndex].lyricsText;
        if (!lyricsText) return ["Lirik tidak tersedia"];
        return lyricsText.split('\n').filter(line => line.trim() !== '');
    }
    
    // Generate HTML lirik
    function generateLyricsHTML(trackIndex) {
        const lyrics = getLyricsArray(trackIndex);
        if (!lyrics.length) return '<div style="color: #888; text-align: center;">Lirik tidak tersedia</div>';
        
        return lyrics.map((line, idx) => `
            <div class="lyric-line" data-line-index="${idx}" style="color: #aaa; font-size: 13px; line-height: 1.5; padding: 8px 12px; border-radius: 8px; transition: all 0.3s ease; cursor: pointer; text-align: center;">
                ${escapeHtml(line)}
            </div>
        `).join('');
    }
    
    function generatePlaylistHTML() {
    return playlist.map((track, idx) => {
        const isActive = (idx === currentTrack);
        const trackNumber = (idx + 1).toString().padStart(2, '0'); // Nomor urut (01, 02, 03, dst)
        return `
            <div class="playlist-item" data-track-index="${idx}" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 12px; margin-bottom: 8px; cursor: pointer; transition: all 0.3s ease; ${isActive ? 'background: rgba(13,110,253,0.4); border-left: 3px solid #0d6efd;' : 'background: rgba(0,0,0,0.4);'}">
                <!-- NOMOR URUT -->
                <div style="width: 35px; text-align: center; flex-shrink: 0;">
                    <span style="color: ${isActive ? '#0d6efd' : '#888'}; font-size: 14px; font-weight: ${isActive ? '700' : '500'};">${trackNumber}</span>
                </div>
                <!-- GAMBAR -->
                <div style="width: 40px; height: 40px; border-radius: 8px; overflow: hidden; background: #2d3e4e; flex-shrink: 0;">
                    <img src="${track.bgImage || 'https://placehold.co/200x200?text=No+Cover'}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://placehold.co/200x200?text=No+Cover'">
                </div>
                <!-- INFO LAGU -->
                <div style="flex: 1; min-width: 0;">
                    <div style="color: white; font-weight: 600; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(track.title)}</div>
                    <div style="color: #ccc; font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(track.artist)}</div>
                </div>
                <!-- DURASI -->
                <div style="color: #ccc; font-size: 11px; flex-shrink: 0;">${formatTime(track.duration)}</div>
                <!-- ICON PLAY (jika lagu sedang diputar) -->
                ${isActive ? '<i class="bi bi-play-circle-fill" style="color: #0d6efd; font-size: 16px; flex-shrink: 0;"></i>' : ''}
            </div>
        `;
    }).join('');
}
    
    // HTML Player dengan Background Penuh
    const playerHTML = `
        <div id="globalMusicPlayer" style="position: fixed; bottom: 20px; left: 20px; z-index: 9999; width: 380px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); overflow: hidden; border: 1px solid rgba(255,255,255,0.1); transition: background 0.5s ease;">
            <!-- Header dengan blur effect -->
            <div style="padding: 12px 15px; background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <i class="bi bi-music-note-beamed" style="color: white; font-size: 18px;"></i>
                    <span style="color: white; font-weight: 600; margin-left: 8px;">Music Player</span>
                </div>
                <div>
                    <button id="showPlaylistBtn" style="background: none; border: none; color: white; cursor: pointer; font-size: 16px; margin-right: 10px;">
                        <i class="bi bi-list-ul"></i>
                    </button>
                    <button id="minimizePlayerBtn" style="background: none; border: none; color: white; cursor: pointer; font-size: 16px;">
                        <i class="bi bi-dash-lg"></i>
                    </button>
                    <button id="closePlayerBtn" style="background: none; border: none; color: white; cursor: pointer; font-size: 16px; margin-left: 10px;">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
            </div>
            
            <!-- Konten Player dengan blur agar teks terbaca -->
            <div id="playerContent" style="padding: 15px; background: rgba(0,0,0,0.4); backdrop-filter: blur(8px);">
                <!-- Album Art -->
                <div style="text-align: center; margin-bottom: 15px;">
                    <div id="albumArt" style="width: 100px; height: 100px; margin: 0 auto; border-radius: 16px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
                        <img id="albumArtImage" src="https://placehold.co/200x200?text=Music" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                </div>
                
                <!-- Info Lagu -->
                <div style="text-align: center; margin-bottom: 15px;">
                    <div id="musicTitle" style="color: white; font-weight: 700; font-size: 16px;">${escapeHtml(playlist[currentTrack].title)}</div>
                    <div id="musicArtist" style="color: #ccc; font-size: 12px;">${escapeHtml(playlist[currentTrack].artist)}</div>
                </div>
                
                <!-- Progress Bar -->
                <div style="margin-bottom: 15px;">
                    <div style="background: rgba(255,255,255,0.3); height: 4px; border-radius: 2px; cursor: pointer; position: relative;" id="progressBar">
                        <div id="progressFill" style="background: #0d6efd; width: 0%; height: 4px; border-radius: 2px;"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 5px;">
                        <span id="currentTime" style="color: #ccc; font-size: 11px;">0:00</span>
                        <span id="durationTime" style="color: #ccc; font-size: 11px;">${formatTime(playlist[currentTrack].duration)}</span>
                    </div>
                </div>
                
                <!-- Tombol Kontrol -->
                <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 15px;">
                    <button id="prevTrackBtn" style="background: rgba(255,255,255,0.2); border: none; width: 40px; height: 40px; border-radius: 50%; color: white; cursor: pointer; font-size: 18px;">
                        <i class="bi bi-skip-backward-fill"></i>
                    </button>
                    <button id="playPauseBtn" style="background: #0d6efd; border: none; width: 55px; height: 55px; border-radius: 50%; color: white; cursor: pointer; font-size: 26px; display: flex; align-items: center; justify-content: center; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
                        <i class="bi bi-play-fill"></i>
                    </button>
                    <button id="nextTrackBtn" style="background: rgba(255,255,255,0.2); border: none; width: 40px; height: 40px; border-radius: 50%; color: white; cursor: pointer; font-size: 18px;">
                        <i class="bi bi-skip-forward-fill"></i>
                    </button>
                </div>
                
                <!-- Tombol Lyrics -->
                <div style="text-align: center;">
                    <button id="showLyricsBtn" style="background: none; border: none; color: #0d6efd; cursor: pointer; font-size: 12px;">
                        <i class="bi bi-chat-text"></i> Lihat Lirik
                    </button>
                </div>
            </div>
            
            <!-- Lyrics Panel -->
            <div id="lyricsPanel" style="display: none; padding: 15px; background: rgba(0,0,0,0.85); border-top: 1px solid rgba(255,255,255,0.1); height: 250px; overflow-y: auto; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <span style="color: white; font-weight: 600;"><i class="bi bi-chat-text"></i> Lirik Lagu</span>
                    <button id="closeLyricsBtn" style="background: none; border: none; color: #ccc; cursor: pointer; font-size: 18px;">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <div id="lyricsContainer">
                    ${generateLyricsHTML(currentTrack)}
                </div>
            </div>
            
            <!-- Playlist Panel -->
            <div id="playlistPanel" style="display: none; padding: 15px; background: rgba(0,0,0,0.85); border-top: 1px solid rgba(255,255,255,0.1); max-height: 300px; overflow-y: auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <span style="color: white; font-weight: 600;"><i class="bi bi-list-ul"></i> Playlist</span>
                    <button id="closePlaylistBtn" style="background: none; border: none; color: #ccc; cursor: pointer; font-size: 18px;">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <div id="playlistContainer">
                    ${generatePlaylistHTML()}
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', playerHTML);
    
    // Inisialisasi audio
    audio = new Audio(playlist[currentTrack].src);
    
    
    // DOM Elements
    const playPauseBtn = document.getElementById("playPauseBtn");
    const prevTrackBtn = document.getElementById("prevTrackBtn");
    const nextTrackBtn = document.getElementById("nextTrackBtn");
    const progressBar = document.getElementById("progressBar");
    const progressFill = document.getElementById("progressFill");
    const currentTimeSpan = document.getElementById("currentTime");
    const durationTimeSpan = document.getElementById("durationTime");
    const musicTitleSpan = document.getElementById("musicTitle");
    const musicArtistSpan = document.getElementById("musicArtist");
    const albumArtImage = document.getElementById("albumArtImage");
    const showLyricsBtn = document.getElementById("showLyricsBtn");
    const lyricsPanel = document.getElementById("lyricsPanel");
    const closeLyricsBtn = document.getElementById("closeLyricsBtn");
    const showPlaylistBtn = document.getElementById("showPlaylistBtn");
    const playlistPanel = document.getElementById("playlistPanel");
    const closePlaylistBtn = document.getElementById("closePlaylistBtn");
    const minimizeBtn = document.getElementById("minimizePlayerBtn");
    const closePlayerBtn = document.getElementById("closePlayerBtn");
    const playerContent = document.getElementById("playerContent");
    const lyricsContainer = document.getElementById("lyricsContainer");
    
    let isMinimized = false;
    let currentLineIndex = 0;
    
    // ======================= FUNGSI UPDATE BACKGROUND (UTAMA) =======================
    function updatePlayerBackground(trackIndex) {
        const track = playlist[trackIndex];
        const player = document.getElementById("globalMusicPlayer");
        
        if (player && track && track.bgImage) {
            // Set background gambar penuh dengan overlay gelap
            player.style.background = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('${track.bgImage}')`;
            player.style.backgroundSize = "cover";
            player.style.backgroundPosition = "center";
            player.style.backgroundRepeat = "no-repeat";
        } else if (player) {
            // Fallback jika tidak ada gambar
            player.style.background = "linear-gradient(135deg, #1a1a2e, #16213e)";
        }
    }
    
    // Update UI track
    function updateTrackUI(trackIndex) {
        const track = playlist[trackIndex];
        if (!track) return;
        
        // Update background player
        updatePlayerBackground(trackIndex);
        
        // Update album art
        albumArtImage.src = track.bgImage || 'https://placehold.co/200x200?text=No+Cover';
        
        // Update teks
        musicTitleSpan.textContent = track.title;
        musicArtistSpan.textContent = track.artist;
        durationTimeSpan.textContent = formatTime(track.duration);
        
        // Update lirik
        if (lyricsContainer) {
            lyricsContainer.innerHTML = generateLyricsHTML(trackIndex);
        }
        
        // Update playlist highlight
        updatePlaylistHighlight();
    }
    
    // Update playlist highlight
    function updatePlaylistHighlight() {
        const playlistItems = document.querySelectorAll('.playlist-item');
        playlistItems.forEach((item, idx) => {
            if (idx === currentTrack) {
                item.style.background = 'rgba(13,110,253,0.4)';
                item.style.borderLeft = '3px solid #0d6efd';
                if (!item.querySelector('.bi-play-circle-fill')) {
                    const iconSpan = document.createElement('span');
                    iconSpan.innerHTML = '<i class="bi bi-play-circle-fill" style="color: #0d6efd; font-size: 18px;"></i>';
                    item.appendChild(iconSpan);
                }
            } else {
                item.style.background = 'rgba(0,0,0,0.4)';
                item.style.borderLeft = 'none';
                const icon = item.querySelector('.bi-play-circle-fill');
                if (icon) icon.remove();
            }
        });
    }
    
    // Refresh playlist container
    function refreshPlaylistContainer() {
        const playlistContainer = document.getElementById("playlistContainer");
        if (playlistContainer) {
            playlistContainer.innerHTML = generatePlaylistHTML();
            document.querySelectorAll('.playlist-item').forEach(item => {
                item.removeEventListener('click', playlistItemClickHandler);
                item.addEventListener('click', playlistItemClickHandler);
            });
        }
    }
    
    // Playlist item click handler
    function playlistItemClickHandler(e) {
        const item = e.currentTarget;
        const index = parseInt(item.getAttribute('data-track-index'));
        if (!isNaN(index)) {
            switchToTrack(index);
        }
    }
    
    // Switch track
    function switchToTrack(trackIndex) {
        if (trackIndex === currentTrack) return;
        currentTrack = trackIndex;
        const track = playlist[currentTrack];
        if (!track) return;
        saveMusicState();

        audio.src = track.src;
        updateTrackUI(currentTrack);
        audio.load();
        if (isPlaying) {
            audio.play().catch(e => console.log("Play diblokir"));
        }
        if (isPlaylistVisible && playlistPanel) {
    playlistPanel.style.display = "block";
}
        refreshPlaylistContainer();
    }
    
    // Expose function globally
    window.switchToTrack = switchToTrack;
    
    // Update progress
    function updateProgress() {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = `${percent}%`;
            currentTimeSpan.textContent = formatTime(audio.currentTime);
            
            // Update lirik highlight
            const lyrics = document.querySelectorAll('.lyric-line');
            if (lyrics.length) {
                const timePerLine = audio.duration / lyrics.length;
                const activeIndex = Math.floor(audio.currentTime / timePerLine);
                if (activeIndex !== currentLineIndex && activeIndex < lyrics.length) {
                    currentLineIndex = activeIndex;
                    lyrics.forEach((el, idx) => {
                        el.style.color = '#aaa';
                        el.style.background = 'transparent';
                        el.style.fontSize = '13px';
                        el.style.fontWeight = 'normal';
                    });
                    if (lyrics[activeIndex]) {
                        lyrics[activeIndex].style.color = '#0d6efd';
                        lyrics[activeIndex].style.background = 'rgba(13,110,253,0.2)';
                        lyrics[activeIndex].style.fontSize = '15px';
                        lyrics[activeIndex].style.fontWeight = '600';
                        if (lyricsPanel.style.display !== 'none') {
                            lyrics[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
                            saveMusicState();
                        }
                    }
                }
            }
        }
    }
    
    // Play/Pause
    function togglePlay() {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
            isPlaying = false;
        } else {
            audio.play().catch(e => console.log("Play diblokir"));
            playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
            isPlaying = true;
            saveMusicState();

        }
    }
    
    // Next/Prev
    function nextTrack() {
        const nextIndex = (currentTrack + 1) % playlist.length;
        switchToTrack(nextIndex);
        if (isPlaying) audio.play();
    }
    
    function prevTrack() {
        const prevIndex = (currentTrack - 1 + playlist.length) % playlist.length;
        switchToTrack(prevIndex);
        if (isPlaying) audio.play();
    }
    
    // Event listeners
    playPauseBtn.addEventListener("click", togglePlay);
    nextTrackBtn.addEventListener("click", nextTrack);
    prevTrackBtn.addEventListener("click", prevTrack);
    
    progressBar.addEventListener("click", (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
    
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", function() {
    // Jika ini adalah lagu terakhir, putar lagu pertama
    if (currentTrack === playlist.length - 1) {
        switchToTrack(0);  // Kembali ke lagu pertama
    } else {
        nextTrack();  // Lanjut ke lagu berikutnya
    }
});
    audio.addEventListener("loadedmetadata", () => {
        durationTimeSpan.textContent = formatTime(audio.duration);
    });
    
    // Lyrics panel
    showLyricsBtn.addEventListener("click", () => {
        lyricsPanel.style.display = "flex";
        lyricsPanel.style.flexDirection = "column";
    });
    closeLyricsBtn.addEventListener("click", () => {
        lyricsPanel.style.display = "none";
    });
    
    // Playlist panel
    showPlaylistBtn.addEventListener("click", () => {
        if (playlistPanel.style.display === "none" || !isPlaylistVisible) {
            refreshPlaylistContainer();
            playlistPanel.style.display = "block";
            isPlaylistVisible = true;
        } else {
            playlistPanel.style.display = "none";
            isPlaylistVisible = false;
        }
    });
    closePlaylistBtn.addEventListener("click", () => {
        playlistPanel.style.display = "none";
        isPlaylistVisible = false;
    });
    
    // Minimize
    minimizeBtn.addEventListener("click", () => {
        if (isMinimized) {
            playerContent.style.display = "block";
            minimizeBtn.innerHTML = '<i class="bi bi-dash-lg"></i>';
            isMinimized = false;
        } else {
            playerContent.style.display = "none";
            minimizeBtn.innerHTML = '<i class="bi bi-plus-lg"></i>';
            isMinimized = true;
        }
    });
    
    // Close
    closePlayerBtn.addEventListener("click", () => {
        document.getElementById("globalMusicPlayer").style.display = "none";
    });
    
    // Klik lirik untuk lompat
    document.addEventListener("click", function(e) {
        const lyricDiv = e.target.closest('.lyric-line');
        if (lyricDiv && lyricsPanel.style.display !== 'none') {
            const index = parseInt(lyricDiv.getAttribute('data-line-index'));
            const lyrics = document.querySelectorAll('.lyric-line');
            if (lyrics.length && !isNaN(index)) {
                const timePerLine = audio.duration / lyrics.length;
                audio.currentTime = index * timePerLine;
                if (!isPlaying) togglePlay();
            }
        }
    });
    
    // Inisialisasi playlist item event listeners
    document.querySelectorAll('.playlist-item').forEach(item => {
        item.addEventListener('click', playlistItemClickHandler);
    });
    
    // Inisialisasi
    updateTrackUI(0);
    console.log("Music Player with Playlist, Lyrics, and Full Background loaded!");

    function saveMusicState() {
    if (audio) {
        localStorage.setItem("music_currentTrack", currentTrack);
        localStorage.setItem("music_isPlaying", isPlaying);
        localStorage.setItem("music_currentTime", audio.currentTime);
    }
}

    window.addEventListener("beforeunload", function() {
    if (audio) {
        localStorage.setItem("music_currentTrack", currentTrack);
        localStorage.setItem("music_isPlaying", isPlaying);
        localStorage.setItem("music_currentTime", audio.currentTime);
    }
});

})();
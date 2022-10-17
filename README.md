# Note Taker App

## Description

This app allows a user to keep track of notes given they enter a title, and a message below. The title and message they entered will be automatically assigned an id and stored in a js database. This info will be persistent across all platforms and the user is able to add new items, delete items, and view items. A couple of key components to making this app were a thorough understanding of Vanilla Js, a high level understanding of Express.js, and a basic understanding of HTML structure. 

As a bonus, we implemented UUID which automatically assigned each item in the array a random and unique character id so that we could keep track of objects in the array for deletion. The note taker app is a very real world, useful tool that a lot of us would need in our day to day live's not only as software engineers, but as ordinary everyday folks.

## Installation/Credits

In order to make this app work on the developer end, we would need to require a couple of different technologies:

Using UUID for random id generation: npm i uuid
Using Express.js for routes/middleware/server: npm i express

## Screenshots/Videos/Usage

[Untitled_ Oct 17, 2022 4_14 PM.webm](https://user-images.githubusercontent.com/103971233/196300744-0cf78947-ce22-46e6-907d-47e41e6f9cbf.webm)

![index](https://user-images.githubusercontent.com/103971233/196300776-94a1aad7-d75a-4ff7-adcc-868c8efe1b6b.PNG)

![notes](https://user-images.githubusercontent.com/103971233/196300786-6284a0b8-5aba-4461-be4e-d14cdc18a103.PNG)

![typing](https://user-images.githubusercontent.com/103971233/196300791-83fd1131-1298-43f7-bf60-328badbc1da7.PNG)

## License

MIT License

Copyright (c) 2022 Brandon Maggiano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

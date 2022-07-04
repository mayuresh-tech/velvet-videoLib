/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import { v4 as uuid } from "uuid";

export const videos = [
  {
    _id: uuid(),
    title: "Tarak Mehta ka Ooltah Chasma",
    description:
      "सुबह - सुबह Jetha पर भड़के Bapuji | Taarak Mehta Ka Ooltah Chashmah | A Steel Container",
    creator: "Sony Sab",
    link: "https://www.youtube.com/embed/04Qp-vS9et0",
    since: "Jan 10 2022",
    views: "6,627,895 views",
    category: "family",
    imagePath: "./assets/tarak_1.jpg",
  },
  {
    _id: uuid(),
    title: "Episode 126 - Tarak Mehta ka Ooltah Chasma",
    description:
      "We bring to you the best videos from your favorite show Taarak Mehta Ka Ooltah Chashmah. So, get your daily dose of laughter with Jethalal, Taarak Mehta, Daya, Champaklal and their neighbors in Gokuldham Society.",
    creator: "Sony Sab",
    link: "https://www.youtube.com/embed/agX3wT6R2-M",
    since: "May 9, 2022",
    views: "1,817,973 views",
    category: "family",
    imagePath: "./assets/tarak_2.jpg",
  },
  {
    _id: uuid(),
    title: "Fortnite Chapter 3 Season 2 Resistance Story Trailer",
    description:
      "Check out the Chapter 3 Season 2 Story Trailer and visit https://www.epicgames.com/fortnite/home for more details.",
    creator: "Fortnite",
    link: "https://www.youtube.com/embed/6M3-AwaIwzM",
    since: "Mar 20, 2022",
    views: "9,008,553 views",
    category: "games",
    imagePath: "./assets/fortnite.jpg",
  },
  {
    _id: uuid(),
    title: "Jaspreet Singh Crowd work Comedy | Stand up Comedy",
    description:
      "One of my favourite shows of \"Koi Load Nahi\". \nRecorded by The Laugh Club Team - AnmolVir Sidhu",
    creator: "Jaspreet Singh",
    link: "https://www.youtube.com/embed/2WK6qNq-WoQ",
    since: "May 20, 2022",
    views: "1,446,960 views",
    category: "comedy",
    imagePath: "./assets/comedy_1.jpg",
  },
  {
    _id: uuid(),
    title: "Telemarketing Prank Story | Rahul Dua | Stand Up Comedy",
    description:
      "NEW STAND UP COMEDY VIDEO 2020.",
    creator: "Rahul Dua",
    link: "https://www.youtube.com/embed/rsQrVwNUnPc",
    since: "Jan 17, 2020",
    views: "7,363,198 views",
    category: "comedy",
    imagePath: "./assets/comedy_2.jpg",
  },
  {
    _id: uuid(),
    title: "Friends, Crime, & The Cosmos | Stand-Up Comedy by Abhishek Upmanyu",
    description:
      "Jokes about Friends, Crime Patrol and The Cosmos. Hope you enjoy it!",
    creator: "Abhishek Upmanyu",
    link: "https://www.youtube.com/embed/c7QYEedjb_o",
    since: "May 8, 2019",
    views: "48,532,701 views",
    category: "comedy",
    imagePath: "./assets/comedy_3.jpg",
  },
  {
    _id: uuid(),
    title: "Finding a Taxi | Stand-Up Comedy by Kunal Kamra",
    description:
      "Kunal Kamra on Finding a Taxi. Subscribe to the channel for more videos.",
    creator: "Kunal Kamra",
    link: "https://www.youtube.com/embed/pjBDQOH4VpM",
    since: "Mar 20, 2017",
    views: "10,929,618 views",
    category: "comedy",
    imagePath: "./assets/comedy_4.jpg",
  },
  {
    _id: uuid(),
    title: "Welcome | Superhit Comedy Movie",
    description:
      "Two thugs meet Rajeev, who belongs to a respectable family, and want to fix their sister's wedding with him. However, when Rajeev's uncle refuses to the match, a series of hilarious situations occur.",
    creator: "Shemaroo Comedy",
    link: "https://www.youtube.com/embed/j0VGm1B7O6w",
    since: "Jan 2, 2022",
    views: "4,580,565 views",
    category: "comedy",
    imagePath: "./assets/comedy_5.jpg",
  },
  {
    _id: uuid(),
    title: "Apex Legends: Saviors Gameplay Trailer",
    description:
      "See how new Legend Newcastle wields his shield, the monstrous changes to Storm Point and the reworked Ranked system, all coming in Apex Legends: Saviors!",
    creator: "Apex Legends",
    link: "https://www.youtube.com/embed/cOFuEQEvC3E",
    since: "May 2, 2022",
    views: "3,173,642 views",
    category: "games",
    imagePath: "./assets/apex.jpg",
  },
  {
    _id: uuid(),
    title: "Kobe Bryant's Greatest Speech | BEST Motivation Ever",
    description:
      "In this powerful and emotional video, we will hear from a legend, a 5-time NBA champion, an 18-time All-Star, and an inductee of the Naismith Memorial Basketball Hall of Fame, Kobe Bryant. Bryant shares his best advice about what it’s like to have the “Mamba Mentality”. He talks about becoming who you want to be as long as you outwork everyone. We hope this video inspires you to take action in pursuing your dreams",
    creator: "Outcast Motivation",
    link: "https://www.youtube.com/embed/dTRBnHtHehQ",
    since: "Sep 12, 2021",
    views: "1,457,753 views",
    category: "motivational",
    imagePath: "./assets/kobe.jpg",
  },
  {
    _id: uuid(),
    title: "One of the Greatest Speeches Ever | Steve Jobs",
    description:
      "Steve Jobs: The Exclusive Biography - https://amzn.to/3zKeTM6 \nSteve Jobs delivers an inspirational speech. Listen to the end for the most life changing quote of all-time. Don't let anyone ever tell you that you cannot achieve your dreams.",
    creator: "Motivational Ark",
    link: "https://www.youtube.com/watch?v=Tuw8hxrFBH8",
    since: "Oct 21, 2020",
    views: "19,627,162 views",
    category: "motivational",
    imagePath: "./assets/steve.jpg",
  },
];

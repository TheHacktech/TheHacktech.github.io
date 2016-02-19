//Location can be: “Field”, “Uni”, “Other”
//Days can be: “fri”, “sat”, “sun”
//start can be: [TIME][PERIOD]  ie “12:00AM”, “12:45PM”
//duration is duration in hours. ie 1 hour would be “1:00”

var schedule = [
{

// food

  title: "Dinner",
  caption: "",
  time: {day: "fri", start: "7:00PM", duration: "2:00"},
  location: "Chandler",
  event_type: "Main timeline"
},

{
  title: "Midnight Snack",
  caption: "",
  time: {day: "sat", start: "2:00AM", duration: "1:00"},
  location: "Avery",
  event_type: "Main timeline",
},

{
  title: "Breakfast",
  caption: "",
  time: {day: "sat", start: "9:00AM", duration: "1:00"},
  location: "Chandler",
  event_type: "Main timeline"
},

{
  title: "Lunch",
  caption: "",
  time: {day: "sat", start: "1:30PM", duration: "1:00"},
  location: "Chandler",
  event_type: "Main timeline"
},

{
  title: "Dinner",
  caption: "",
  time: {day: "sat", start: "6:00PM", duration: "1:00"},
  location: "Chandler",
  event_type: "Main timeline"
},

{
  title: "Midnight Snack",
  caption: "",
  time: {day: "sat", start: "11:00PM", duration: "1:00"},
  location: "Avery",
  event_type: "Main timeline"
},

{
  title: "Breakfast",
  caption: "",
  time: {day: "sun", start: "8:00AM", duration: "1:00"},
  location: "Chandler",
  event_type: "Main timeline"
},

{
  title: "Lunch",
  caption: "",
  time: {day: "sun", start: "11:30AM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

// workshops

{
  title: "Intro to Game Development",
  caption: "",
  time: {day: "sat", start: "1:00AM", duration: "1:00"},
  location: "Winnett",
  event_type: "Workshops"
},

{
  title: "Using the Cloud in your App",
  caption: "",
  time: {day: "sat", start: "10:00AM", duration: "1:00"},
  location: "Winnett",
  event_type: "Workshops"
},

{
  title: "Venture Capital: From Idea to Startup",
  caption: "",
  time: {day: "sat", start: "3:00PM", duration: "1:00"},
  location: "Winnett",
  event_type: "Workshops"
},

{
  title: "Finance in Technology",
  caption: "",
  time: {day: "sat", start: "4:30PM", duration: "1:00"},
  location: "Winnett",
  event_type: "Workshops"
},

{
  title: "Mentor Recruitment",
  caption: "",
  time: {day: "sat", start: "7:00PM", duration: "1:00"},
  location: "Winnett",
  event_type: "Workshops"
},

// Events

{
  title: "Registration",
  caption: "",
  time: {day: "fri", start: "7:00PM", duration: "2:00"},
  location: "Winnett",
  event_type: "events"
},

{
  title: "Opening Ceremony",
  caption: "",
  time: {day: "fri", start: "9:30PM", duration: "1:30"},
  location: "Brown Gym",
  event_type: "events",
},

{
  title: "Team-Building Mixer",
  caption: "",
  time: {day: "fri", start: "11:00PM", duration: "1:00"},
  location: "Winnett",
  event_type: "events"
},

{
  title: "Hacking Begins!",
  caption: "",
  time: {day:"fri", start:"11:30PM", duration:"0:30"},
  location: "",
  event_type: "events",
  offset: 1
},

{
  title: "Watermelon Eating Contest",
  caption: "",
  time: {day: "sat", start: "12:30PM", duration: "1:00"},
  location: "Avery Courtyard",
  event_type: "events"
},

{
  title: "Weebs@Hacktech Mixer",
  caption: "Vote for an anime here!",
  time: {day: "sat", start: "8:00PM", duration: "2:00"},
  location: "Avery",
  event_type: "events"
},


{
  title: "Project Expo",
  caption: "",
  time: {day: "sun", start: "12:30PM", duration: "2:00"},
  location: "Chandler, Winnett",
  event_type: "events",
},

{
  title: "Closing Ceremony",
  caption: "",
  time: {day: "sun", start: "3:00PM", duration: "1:30"},
  location: "Beckman Auditorium",
  event_type: "events",
},

{
  title: "Buses Depart",
  caption: "",
  time: {day: "sun", start: "4:30PM", duration: "0:30"},
  location: "",
  event_type: "events",
},

]
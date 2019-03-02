//Location can be: “Field”, “Uni”, “Other”
//Days can be: “fri”, “sat”, “sun”
//start can be: [TIME][PERIOD]  ie “12:00AM”, “12:45PM”
//duration is duration in hours. ie 1 hour would be “1:00”

var schedule = [
{

// food

  title: "Dinner",
  caption: "",
  time: {day: "fri", start: "6:30PM", duration: "2:00"},
  location: "Bechtel",
  event_type: "Main timeline"
},

{
  title: "Midnight Snack",
  caption: "Come eat something!",
  time: {day: "sat", start: "12:00AM", duration: "1:00"},
  location: "Bechtel",
  event_type: "Main timeline",
},

{
  title: "Breakfast",
  caption: "",
  time: {day: "sat", start: "9:00AM", duration: "2:00"},
  location: "Bechtel",
  event_type: "Main timeline"
},

{
  title: "Lunch",
  caption: "",
  time: {day: "sat", start: "11:00AM", duration: "2:00"},
  location: "Bechtel",
  event_type: "Main timeline"
},

{
  title: "Dinner",
  caption: "",
  time: {day: "sat", start: "6:30PM", duration: "2:00"},
  location: "Bechtel",
  event_type: "Main timeline"
},

{
  title: "Midnight Snack",
  caption: "",
  time: {day: "sun", start: "12:00AM", duration: "1:00"},
  location: "Bechtel",
  event_type: "Main timeline"
},


{
  title: "Donuts!",
  caption: "Enjoy some early morning donuts.",
  time: {day: "sun", start: "7:00AM", duration: "1:00"},
  location: "Bechtel",
  event_type: "Main timeline"
},


{
  title: "Brunch",
  caption: "",
  time: {day: "sun", start: "9:30AM", duration: "3:00"},
  location: "Bechtel",
  event_type: "Main timeline",
},


// workshops

{
  title: "Innovation Journey Using eBay APIs",
  caption: "Join this working session for hands-on help w/ eBay APIs and to hear about how they were used to in one developer's innovation journey.",
  time: {day: "fri", start: "10:30PM", duration: "1:00"},
  location: "Annenberg 105",
  event_type: "Workshops"
},

{
  title: "Your Next Uber Trip in Self-Driving Car",
  caption: "Learn about Uber's developments in the field of self-driving cars!",
  time: {day: "sat", start: "11:00AM", duration: "1:00"},
  location: "Annenberg 105",
  event_type: "Workshops"
},

{
  title: "From localhost to https://",
  caption: "How to host a web app on the WWW securely and for free!",
  time: {day: "sat", start: "2:30PM", duration: "1:00"},
  location: "Annenberg 105",
  event_type: "Workshops"
},
{
  title: "Machine Learning 101",
  caption: "",
  time: {day: "sat", start: "12:30PM", duration: "2:00"},
  location: "Annenberg 105",
  event_type: "Workshops"
},
{
  title: "How to Board the Intern Ship ",
  caption: "",
  time: {day: "sat", start: "5:00PM", duration: "1:00"},
  location: "Annenberg 105",
  event_type: "Workshops"
},
// Events

{
  title: "Hacker Registration",
  caption: "",
  time: {day: "fri", start: "6:30PM", duration: "2:30"},
  location: "Avery",
  event_type: "events"
},

{
  title: "Opening Ceremony",
  caption: "Get hyped for Hacktech 2019!",
  time: {day: "fri", start: "9:00PM", duration: "1:30"},
  location: "Beckman Auditorium",
  event_type: "events",
},

{
  title: "Team Building",
  caption: "Find a team to work with!",
  time: {day: "fri", start: "10:30PM", duration: "1:00"},
  location: "Beckman Auditorium",
  event_type: "events"
},

{
  title: "Puppies",
  caption: "",
  time: {day:"sat", start:"10:00AM", duration:"1:00"},
  location: "Avery Garage",
  event_type: "events"
},

{
  title: "Ultimate Frisbee",
  caption: "Come throw a frisbee around or play some pick-up ultimate (if it's not raining)!",
  time: {day:"sat", start:"1:30PM", duration:"1:30"},
  location: "Beckman Mall",
  event_type: "events"
},

{
  title: "Giant Jenga",
  caption: "",
  time: {day:"sat", start:"3:30PM", duration:"1:00"},
  location: "Avery Garage",
  event_type: "events"
},


{
  title: "Virtual Reality Games",
  caption: "",
  time: {day:"sat", start:"4:30PM", duration:"2:00"},
  location: "Sherman Fairchild Library",
  event_type: "events"
},

{
  title: "Cup Stacking with MLH",
  caption: "",
  time: {day:"sat", start:"8:00PM", duration:"1:00"},
  location: "Avery Garage",
  event_type: "events"
},

{
  title: "Movie Night",
  caption: "TBD the movie",
  time: {day:"sat", start:"9:00PM", duration:"3:00"},
  location: "Annenberg 105",
  event_type: "events"
},

{
  title: "Board Game Night",
  caption: "Take a break with some board games!",
  time: {day:"sun", start:"12:00AM", duration:"2:00"},
  location: "Annenberg 105",
  event_type: "events"
},

{
  title: "Project Expo",
  caption: "Show off your fantastic new hack!",
  time: {day: "sun", start: "12:00PM", duration: "2:00"},
  location: "Avery",
  event_type: "events",
},

{
  title: "Closing Ceremony",
  caption: "",
  time: {day: "sun", start: "2:30PM", duration: "1:30"},
  location: "Beckman Auditorium",
  event_type: "events",
},

{
  title: "Buses Depart",
  caption: "Don't leave :'(",
  time: {day: "sun", start: "4:00PM", duration: "1:00"},
  location: "",
  event_type: "events",
},

]

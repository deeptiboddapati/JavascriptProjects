// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const dataLength = reviews.length;
const picture = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const reviewElement = document.getElementsByClassName('review')[0];

function updateReview(index) {
  picture.setAttribute( 'src', reviews[index].img );
  
  author.textContent= reviews[index].name;
  
  job.textContent = reviews[index].job;

  info.textContent= reviews[index].text;

  reviewElement.dataset.currentId = index;
}

updateReview(0);

const prevbtn = document.getElementsByClassName('prev-btn')[0];
const nextbtn = document.getElementsByClassName('next-btn')[0];
const randombtn = document.getElementsByClassName('random-btn')[0];

prevbtn.addEventListener('click', changeReview );
nextbtn.addEventListener('click', changeReview );
randombtn.addEventListener('click', changeReview );


function changeReview(event) {
  classes = event.currentTarget.classList;
  var currentId = reviewElement.dataset.currentId;
  if(classes.contains('next-btn')){
    if ( currentId == dataLength-1 ){
      currentId = 0;
    }
    else{
      ++currentId;
    }
  }
  else if(classes.contains('prev-btn')){
    if ( currentId == 0 ){
      currentId = dataLength-1;
    }
    else{
      --currentId;
    }
    
  }
  else{
    currentId = getRandomInt(4);
  }
  updateReview(currentId);
}
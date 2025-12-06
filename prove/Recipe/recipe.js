const recipes = [
  {
    author: 'Provo High Culinary Students',
    url: '',
    isBasedOn: '',
    cookTime: '30 Min',
    datePublished: '2016-10-16',
    tags: ['Waffles', 'Sweet Potato', 'Side'],
    description: 'Savory waffles made with Sweet potato with a hint of Ginger',
    image: '../images/sweet-potato-waffle-md.jpg',
    recipeIngredient: [],
    name: 'Sweet Potato Waffles',
    prepTime: '30 Min',
    recipeInstructions: [],
    recipeYield: '6 waffles',
    rating: 4
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '20 min',
    datePublished: '',
    tags: ['Chicken', 'Entree'],
    description: 'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
    image: '../images/escalopes-de-poulet-a-la-creme.webp',
    recipeIngredient: [],
    name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
    prepTime: '10 min',
    recipeInstructions: [],
    recipeYield: '3 servings',
    rating: 4.5
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '30 min',
    datePublished: '2018-09-19',
    tags: ['Potatoes', 'side'],
    description: 'Easy and delicious oven roasted potatoes that go great with almost anything.',
    image: '../images/roasted-potatoes.webp',
    recipeIngredient: [],
    name: 'Oven Roasted potato slices',
    prepTime: '10 min',
    recipeInstructions: [],
    recipeYield: '',
    rating: 4
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '20 min',
    datePublished: '2018-09-19',
    tags: ['Southwest', 'entree'],
    description: 'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
    image: '../images/black-beans-and-rice.jpg',
    recipeIngredient: [],
    name: 'Black Beans and Rice',
    prepTime: '10 min',
    recipeInstructions: [],
    recipeYield: '4 servings',
    rating: 3
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '30 min',
    datePublished: '2018-09-19',
    tags: ['chicken', 'entree', 'Indian'],
    description: 'Quick and easy Chicken curry recipe made with easy to find ingredients.',
    image: '../images/chicken-curry.webp',
    recipeIngredient: [],
    name: 'Chicken Curry',
    prepTime: '10 min',
    recipeInstructions: [],
    recipeYield: '5 servings',
    rating: 5
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '11 min',
    datePublished: '2018-09-19',
    tags: ['dessert'],
    description: 'Delicious soft chocolate chip cookies with coconut.',
    image: '../images/chocolate-chip-cookies.jpg',
    recipeIngredient: [],
    name: 'Chocolate Chip Cookies',
    prepTime: '15 min',
    recipeInstructions: [],
    recipeYield: '8 dozen',
    rating: 5
  },
  {
    author: 'Ester Kocht',
    url: 'https://www.esterkocht.com/german-gooseberry-cake-with-vanilla-cream-and-crumble/',
    isBasedOn: '',
    cookTime: '45min',
    datePublished: '2023-10-10',
    tags: ['dessert', 'German'],
    description: "This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet. Made up of a cake base, filled with fresh gooseberries and vanilla cream and finished off with crumble that's flavored with vanilla. A must have recipe for gooseberry lovers!!",
    image: '../images/german-gooseberry-cake.jpg',
    recipeIngredient: [],
    name: 'Gooseberry cake with vanilla cream and crumble',
    prepTime: '30 min',
    recipeInstructions: [],
    recipeYield: '12 servings',
    rating: 5
  },
  {
    author: 'AllRecipes',
    url: 'https://www.allrecipes.com/recipe/12409/apple-crisp-ii/',
    isBasedOn: '',
    cookTime: '45min',
    datePublished: '2023-10-10',
    tags: ['dessert'],
    description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
    image: '../images/apple-crisp.jpg',
    recipeIngredient: [],
    name: 'Apple Crisp',
    prepTime: '30 min',
    recipeInstructions: [],
    recipeYield: '12 servings',
    rating: 4
  }
];

const recipeContainer = document.querySelector('#recipeContainer');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

function getStars(rating) {
  const rounded = Math.round(rating);
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rounded) {
      stars += '⭐';
    } else {
      stars += '☆';
    }
  }
  return stars;
}

function createRecipeCard(recipe) {
  const section = document.createElement('section');
  section.className = 'recipe-card';

  const img = document.createElement('img');
  img.src = recipe.image;
  img.alt = recipe.name;
  section.appendChild(img);

  const info = document.createElement('div');
  info.className = 'recipe-info';

  const tag = document.createElement('p');
  tag.className = 'tag';
  if (recipe.tags && recipe.tags.length > 0) {
    tag.textContent = recipe.tags[0];
  } else {
    tag.textContent = '';
  }
  info.appendChild(tag);

  const title = document.createElement('h2');
  title.textContent = recipe.name;
  info.appendChild(title);

  const rating = document.createElement('span');
  rating.className = 'rating';
  rating.setAttribute('role', 'img');
  rating.setAttribute('aria-label', 'Rating: ' + recipe.rating + ' out of 5 stars');
  rating.textContent = getStars(recipe.rating);
  info.appendChild(rating);

  const desc = document.createElement('p');
  desc.className = 'description';
  desc.textContent = recipe.description;
  info.appendChild(desc);

  section.appendChild(info);
  return section;
}

function renderRecipes(list) {
  recipeContainer.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    const card = createRecipeCard(list[i]);
    recipeContainer.appendChild(card);
  }
}

function showRandomRecipe() {
  const index = Math.floor(Math.random() * recipes.length);
  renderRecipes([recipes[index]]);
}

function handleSearch() {
  const term = searchInput.value.trim().toLowerCase();
  if (term === '') {
    showRandomRecipe();
    return;
  }

  const matches = [];
  for (let i = 0; i < recipes.length; i++) {
    const r = recipes[i];
    const name = r.name.toLowerCase();
    const desc = r.description.toLowerCase();
    const tags = r.tags.join(' ').toLowerCase();
    if (name.includes(term) || desc.includes(term) || tags.includes(term)) {
      matches.push(r);
    }
  }

  matches.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  renderRecipes(matches);
}

searchButton.addEventListener('click', handleSearch);

searchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleSearch();
  }
});

showRandomRecipe();

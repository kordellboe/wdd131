const recipes = [
  {
    name: 'Sweet Potato Waffles',
    description: 'Savory waffles made with Sweet potato with a hint of Ginger',
    tags: ['waffles', 'sweet potato', 'side'],
    image: '../images/sweet-potato-waffle-md.jpg',
    rating: 4
  },
  {
    name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
    description: 'Delicious quick and easy creamy rice dish.',
    tags: ['chicken', 'entree'],
    image: '../images/escalopes-de-poulet-a-la-creme.webp',
    rating: 4.5
  },
  {
    name: 'Oven Roasted potato slices',
    description: 'Easy and delicious oven roasted potatoes.',
    tags: ['potatoes', 'side'],
    image: '../images/roasted-potatoes.webp',
    rating: 4
  },
  {
    name: 'Black Beans and Rice',
    description: 'Black beans and tomatoes served over rice.',
    tags: ['beans', 'southwest', 'entree'],
    image: '../images/black-beans-and-rice.jpg',
    rating: 3
  },
  {
    name: 'Chicken Curry',
    description: 'Quick and easy chicken curry recipe.',
    tags: ['chicken', 'indian', 'entree'],
    image: '../images/chicken-curry.webp',
    rating: 5
  },
  {
    name: 'Chocolate Chip Cookies',
    description: 'Delicious soft chocolate chip cookies with coconut.',
    tags: ['dessert', 'cookie'],
    image: '../images/chocolate-chip-cookies.jpg',
    rating: 5
  },
  {
    name: 'Gooseberry cake with vanilla cream and crumble',
    description: 'Tart and sweet gooseberry cake with crumble.',
    tags: ['dessert', 'german'],
    image: '../images/german-gooseberry-cake.jpg',
    rating: 5
  },
  {
    name: 'Apple Crisp',
    description: 'Served warm with vanilla ice cream.',
    tags: ['dessert', 'apple'],
    image: '../images/apple-crisp.jpg',
    rating: 4
  }
];

const recipeContainer = document.querySelector('#recipeContainer');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

function getStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += i < Math.round(rating) ? '⭐' : '☆';
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
  tag.textContent = recipe.tags[0];
  info.appendChild(tag);

  const title = document.createElement('h2');
  title.textContent = recipe.name;
  info.appendChild(title);

  const rating = document.createElement('span');
  rating.className = 'rating';
  rating.setAttribute('role', 'img');
  rating.setAttribute('aria-label', `Rating: ${recipe.rating} out of 5 stars`);
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
  list.forEach(recipe => {
    recipeContainer.appendChild(createRecipeCard(recipe));
  });
}

function showInitialRecipe() {
  renderRecipes([recipes[recipes.length - 1]]);
}

function handleSearch() {
  const term = searchInput.value.trim().toLowerCase();
  if (term === '') {
    return;
  }

  const matches = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(term) ||
    recipe.description.toLowerCase().includes(term) ||
    recipe.tags.join(' ').toLowerCase().includes(term)
  );

  matches.sort((a, b) => a.name.localeCompare(b.name));
  renderRecipes(matches);
}

searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
});

showInitialRecipe();
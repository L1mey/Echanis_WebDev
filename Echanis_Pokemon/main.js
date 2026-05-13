const API_BASE = 'https://pokeapi.co/api/v2/pokemon/';

function setLoading(isLoading) {
  const screen = document.getElementById('main-screen');
  if (isLoading) {
    screen.style.backgroundImage = '';
    document.getElementById('name-screen').textContent = '...';
    document.getElementById('about-screen').textContent = 'Loading...';
    document.getElementById('type-screen').textContent = '---';
    document.getElementById('id-screen').textContent = '---';
  }
}

function setError(msg) {
  document.getElementById('name-screen').textContent = 'ERR';
  document.getElementById('about-screen').textContent = msg || 'Not found';
  document.getElementById('type-screen').textContent = '---';
  document.getElementById('id-screen').textContent = '---';
  document.getElementById('main-screen').style.backgroundImage = '';
}

function displayPokemon(data) {
  const name = data.name.toUpperCase();
  const id = '#' + String(data.id).padStart(3, '0');
  const heightM = (data.height / 10).toFixed(1) + 'm';
  const weightKg = (data.weight / 10).toFixed(1) + 'kg';
  const types = data.types.map(t => t.type.name.toUpperCase()).join(' / ');

  const sprite =
    data.sprites.other?.['official-artwork']?.front_default ||
    data.sprites.front_default ||
    '';

  document.getElementById('main-screen').style.backgroundImage = sprite ? `url(${sprite})` : '';
  document.getElementById('name-screen').textContent = name.length > 9 ? name.slice(0, 9) : name;
  document.getElementById('about-screen').textContent = `Ht:${heightM} Wt:${weightKg}`;
  document.getElementById('type-screen').textContent = types;
  document.getElementById('id-screen').textContent = id;
}

function searchPokemon() {
  const query = document.getElementById('name-input').value.trim().toLowerCase();
  if (!query) return;

  setLoading(true);

  fetch(API_BASE + query)
    .then(res => {
      if (!res.ok) throw new Error('Not found');
      return res.json();
    })
    .then(data => {
      setLoading(false);
      displayPokemon(data);
    })
    .catch(() => {
      setLoading(false);
      setError('Not found!');
    });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search-btn').addEventListener('click', searchPokemon);
  document.getElementById('name-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') searchPokemon();
  });
});

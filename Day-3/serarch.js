const input = document.getElementsByClassName('search-bar')[0];
const list = document.getElementById('suggestions-list');

const locations = [
    "New York, NY",
    "Los Angeles, CA",
    "Miami, FL",
    "Chicago, IL",
    "Boston, MA",
    "Seattle, WA",
    "Austin, TX",
    "Dallas, TX",
    "Portland, OR",
    "San Francisco, CA",
    "Malibu, CA",
    "Aspen, CO",
    "Beverly Hills, CA"
];

input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();

    if (query.length < 1) {
        list.innerHTML = '';
        list.classList.add('suggestions-hidden');
        return;
    }

    const filtered = locations.filter(loc => loc.toLowerCase().includes(query));

    list.innerHTML = '';
    
    if (filtered.length === 0) {
        list.classList.add('suggestions-hidden');
        return;
    }

    filtered.forEach(fullAddress => {
        const li = document.createElement('li');
        li.textContent = fullAddress;

        li.addEventListener('click', () => {
            input.value = fullAddress;
            list.innerHTML = '';
            list.classList.add('suggestions-hidden');
        });
        list.appendChild(li);
    });
    
    list.classList.remove('suggestions-hidden');
});

// Hide list when clicking outside
document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !list.contains(e.target)) {
        list.classList.add('suggestions-hidden');
    }
});

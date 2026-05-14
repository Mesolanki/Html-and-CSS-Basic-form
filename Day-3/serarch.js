const input = document.getElementsByClassName('search-bar')[0];

const list = document.getElementById('suggestions-list');
let debounceTimer;

input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const query = input.value.trim();

    if (query.length < 3) {
        list.innerHTML = '';
        list.classList.add('suggestions-hidden');
        return;
    }

    debounceTimer = setTimeout(() => {
        fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5`)
            .then(response => response.json())
            .then(data => {
                list.innerHTML = '';
                if (!data.features || data.features.length === 0) {
                    list.classList.add('suggestions-hidden');
                    return;
                }

                data.features.forEach(feature => {
                    const props = feature.properties;
                    const name = props.name || '';
                    const city = props.city ? `, ${props.city}` : '';
                    const country = props.country ? `, ${props.country}` : '';
                    const fullAddress = `${name}${city}${country}`;

                    const li = document.createElement('li');
                    li.textContent = fullAddress;
                    li.style.padding = "10px";
                    li.style.cursor = "pointer";

                    li.addEventListener('click', () => {
                        input.value = fullAddress;
                        list.innerHTML = '';
                        list.classList.add('suggestions-hidden');
                    });
                    list.appendChild(li);
                });
                list.classList.remove('suggestions-hidden');
            });
    }, 300);
});

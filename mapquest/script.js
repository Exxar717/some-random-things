L.mapquest.key = '4tjPdzhv9G3jvzJ6OUVVjjfv6z0p9Sjy';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [43.22407026112831, 76.86139621520914],
  // 1. change 'map' to 'hybrid', try other type of map
  layers: L.mapquest.tileLayer('dark'),
  zoom: 12
});

// 2. Add control
map.addControl(L.mapquest.satelliteControl());

// 3. Add icon
L.marker([43.22407026112831, 76.86139621520914], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'A'
  })
})
.bindPopup('This is Qazaqustan!')
.addTo(map);
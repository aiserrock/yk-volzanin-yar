// Инициализация Яндекс.Карты
function initMap() {
  const map = new ymaps.Map("map", {
    center: [57.649053, 39.944011],
    zoom: 17, // Уровень масштаба
  });

  const placemark = new ymaps.Placemark([57.649053, 39.944011], {
    balloonContent: `
      <strong>Управляющая компания ВОЛЖАНИН</strong><br>
      Адрес: г. Ярославль, пр-кт Машиностроителей, д. 7
    `,
  });

  map.geoObjects.add(placemark);
}
ymaps.ready(initMap);

// Обновление текущего года в футере
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
});
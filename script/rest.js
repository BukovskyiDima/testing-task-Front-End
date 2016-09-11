let rest = function(callback) {
  let xhr = new XMLHttpRequest(),
    players;

  // создали запрос с методом get на адрес /
  xhr.open('GET', 'players.json', true);

  // отправили запрос на сервер
  xhr.send(null);

  // назначили слушателя на событие "ответ с сервера"
  xhr.addEventListener('readystatechange', function() {

    console.log(xhr.status);
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      console.error(xhr.status);
    } else {
      players = JSON.parse(xhr.responseText);
      //console.log(players);
      return callback(players);
    }
  });
};
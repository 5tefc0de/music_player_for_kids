export function getSongs() {
  return fetchSongs()
}

export function postSong(data) {
  return fetchSongs({ method: 'POST', data })
}

export function patchSong(id, data) {
  return fetchSongs({ method: 'PATCH', id, data })
}

function fetchSongs({ method = 'GET', id = '', data } = {}) {
  return fetch('/songs/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}

export function fetchAuthorization() {
  return fetch("https://accounts.spotify.com/authorize");
}

export function fetchSpotify(data) {
  return fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: data,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer"
    }
  });
}
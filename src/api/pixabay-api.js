function fetchPhotos(name) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=1&key=28586147-3ab4251b0e4522a1aabc38539&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

const api = {
  fetchPhotos,
};

export default api;

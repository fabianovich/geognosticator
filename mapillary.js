const ACCESS_TOKEN = CONFIG.ACCESS_TOKEN; //separate file for sensitive stuff
coords = CONFIG.coords;
const url = 'https://graph.mapillary.com/images?fields=id&lat='+coords.lat+'&lng='+coords.lng+'&radius=50&limit=1';

fetch(url, {
  headers: {
    "Authorization": "OAuth " + ACCESS_TOKEN,
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const imid = data.data[0].id;
    const imidint = Number(imid);
    console.log(imidint);

    //viewer
    const viewer = new mapillary.Viewer({
      accessToken: ACCESS_TOKEN,
      container: 'mly',
      imageId: imidint,
      component: {
        cover: false,
        navigation: true,
        sequence: { visible: false, playing: false },
      }
    });
  })
  .catch(err => {
    console.log('Fetch Error :-S', err);
  });
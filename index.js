const ACCESS_TOKEN = "MLY|27069975479318202|c526e5da37bd1125672c7ba9c54f1ae2";

const viewer = new mapillary.Viewer({
  accessToken: ACCESS_TOKEN,
  container: 'mly',
  imageId: '779347306365050',
  component: {
    cover: false,
    navigation: true,
  }
});

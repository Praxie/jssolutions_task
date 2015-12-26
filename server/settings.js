Router.configure({
    layoutTemplate: 'main',
});

Foursquare.init({
  id: 'F0TT5N0VNRNJBBCCTTYAVYQQYGZTUXVT0ED1E24IMV31ZUVZ',
  secret: '0CUFVYRHP2ORKADGAWHBSEYFQWQXUKXU2YJ3SBGINE0ACHDL',
  authOnly: false // need auth for using or no?
});

ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: "553074829263-i7tmccg42lj932q347nib87l9hh3k772.apps.googleusercontent.com",
  	secret: "hJBpD5NwZ6ta1kl1WNd1APg0"
    }
  }
);
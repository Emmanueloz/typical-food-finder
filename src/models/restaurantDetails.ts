interface RestaurantDetails {
  location: {
    name: string;
    latitude: string;
    longitude: string;
  };

  overview: {
    name: string;
    rating: number;
    numberReviews: number;
  };
}

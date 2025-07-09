interface RestaurantDetails {
  location: {
    name: string;
    latitude: string;
    longitude: string;
    ranking: string;
  };
  hours: {
    openStatusText: string;
    currentHoursText: string;
    allOpenHours: [
      {
        days: string;
        times: string[];
      }
    ];
  };
  overview: {
    name: string;
    detailId: number;
    contact: {
      address: string;
      email: string;
    };
  };
}

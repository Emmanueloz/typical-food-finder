interface EventDetail {
  organizer_info: {
    eventTitle: string;
    displayOrganizationName: string;
    thumbnailLogo80: string;
    nameTruncated: string;
    id: string;
  };
  event: {
    end: {
      timezone: string;
      local: string;
      utc: string;
    };
    name: string;
    start: {
      timezone: string;
      local: string;
      utc: string;
    };
    url: string;
    startDateTime: string;
  };
  about: {
    about_us: string;
  }[];
}

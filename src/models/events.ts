interface EventData {
  event_name: string;
  eid: string;
  published: string;
  summary: string;
  primary_venue: {
    name: string;
    address: {
      localized_address_display: string;
      postal_code: string;
    };
  };
  start_date: string;
  start_time: string;
  end_time: string;
}

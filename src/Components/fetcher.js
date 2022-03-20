export const fetcher = async (url) => {
  const res = await fetch(url);
  const {
    ip,
    isp,
    location: { lat, lng, region, city, timezone },
  } = await res.json();

  return {
    ip,
    isp,
    location: { lat, lng, region, city, timezone },
  };
};

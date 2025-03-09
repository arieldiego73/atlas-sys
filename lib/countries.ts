export async function getAllCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all", {
    cache: "force-cache", // Enable caching
    next: { revalidate: 3600 }, // Revalidate data every hour (optional)
  });

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  return response.json();
}

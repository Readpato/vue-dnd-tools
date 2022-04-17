export default async function getApiData() {
  const response = await fetch(
    "https://www.dnd5eapi.co/api/spells/eldritch-blast"
  );
  const json = await response.json();
}

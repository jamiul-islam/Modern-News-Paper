import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function Homepage() {
  // fetch news data
  // const news: NewsResponse = await fetchNews(categories.join(","));

  // console.log(news); // BOOM! we have the data

  return <div>homepage</div>;
}

export default Homepage;

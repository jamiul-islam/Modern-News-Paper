type Article = {
  author: String | null;
  category: String;
  country: String;
  description: String;
  image: String | null;
  language: String;
  published_at: DateTime;
  source: String;
  title: String;
  url: String;
};

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};

type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

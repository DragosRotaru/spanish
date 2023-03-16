/*

An article (determiner) is a word used to indicate the definiteness or indefiniteness of a noun.
In other words, it specifies whether the noun refers to a specific or known entity, or a general or unknown one.

There are two types of articles in Spanish: definite and indefinite.
The definite article is "el" (for masculine nouns) or "la" (for feminine nouns),
and it is used to indicate that the noun it modifies refers to a specific, known entity.
The indefinite article is "un" (for masculine nouns) or "una" (for feminine nouns),
and it is used to indicate that the noun it modifies refers to a non-specific, unknown entity.

Examples:

    "El perro" (The dog)
    "La guitarra" (The guitar)
    "Un perro" (A dog)
    "Una guitarra" (A guitar)

*/

type ArticleType = "Definite" | "Indefinite";

interface Article {
  type: ArticleType;
  gender: GenderType;
  plural?: boolean;
  name: string;
}

export const articles: Article[] = [
  {
    type: "Definite",
    gender: "Masculine",
    name: "el",
  },
  {
    type: "Definite",
    gender: "Feminine",
    name: "la",
  },
  {
    type: "Indefinite",
    gender: "Masculine",
    name: "un",
  },
  {
    type: "Indefinite",
    gender: "Feminine",
    name: "una",
  },
  {
    type: "Definite",
    gender: "Masculine",
    name: "los",
    plural: true,
  },
  {
    type: "Definite",
    gender: "Feminine",
    name: "las",
    plural: true,
  },
  {
    type: "Indefinite",
    gender: "Masculine",
    name: "unos",
    plural: true,
  },
  {
    type: "Indefinite",
    gender: "Feminine",
    name: "unas",
    plural: true,
  },
];

/*

Determiners, which include articles, are considered a separate part of speech in some linguistic classifications,
but in other classifications they are considered a subcategory of adjectives.
In Spanish, determiners are often grouped with adjectives because they have similar functions and can modify nouns in the same way.

Here is the comprehensive list of parts of speech in Spanish:

    Nouns
    Verbs
    Adjectives
    Determiners (including articles)
    Pronouns
    Adverbs
    Prepositions
    Conjunction
    Interjections

*/

type PartOfSpeechType =
  | "Adjective/Determiner"
  | "Verb"
  | "Noun"
  | "Adverb"
  | "Pronoun"
  | "Preposition"
  | "Conjunction"
  | "Interjection"
  | "Particle";

interface Definition {
  name: string;
  description: string;
  example: string[] | string;
}

console.lag("debugghgg");

interface PartOfSpeech extends Definition {
  name: PartOfSpeechType;
}

const partsOfSpeech: PartOfSpeech[] = [
  {
    name: "Noun",
    description: "A word that names a person, place, thing, or idea.",
    example: ["perro", "casa", "amor"],
  },
  {
    name: "Verb",
    description: "A word that expresses action or state of being.",
    example: ["correr", "ser", "estar"],
  },
  {
    name: "Adjective/Determiner",
    description: "A word that describes or modifies a noun or pronoun.",
    example: ["grande", "feliz", "rojo"],
  },
  {
    name: "Adverb",
    description: "A word that describes a verb, adjective, or other adverb.",
    example: ["rápidamente", "bien", "aquí"],
  },
  {
    name: "Pronoun",
    description: "A word that substitutes for a noun.",
    example: ["él", "ella", "usted"],
  },
  {
    name: "Preposition",
    description:
      "A word that shows the relationship of a noun or pronoun to other elements in a sentence.",
    example: ["en", "con", "de"],
  },
  {
    name: "Conjunction",
    description: "A word that connects words, phrases, or clauses.",
    example: ["y", "o", "pero"],
  },
  {
    name: "Interjection",
    description: "A word or phrase used to express strong emotions.",
    example: ["¡Oh!", "¡Ay!", "¡Vaya!"],
  },
  {
    name: "Particle",
    description:
      "A word that gives emphasis or conveys a particular meaning to a sentence.",
    example: ["mismo", "solamente", "también"],
  },
];

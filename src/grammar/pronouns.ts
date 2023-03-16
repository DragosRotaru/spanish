/**

Each pronoun type serves a different function in a sentence,
and they can help to clarify the role of nouns and other elements within the sentence.
Some common examples include "yo" (I) as a subject pronoun,
"él" (he) as a possessive pronoun, and "algo" (something) as an indefinite pronoun.

*/
type PronounType =
  | "Subject"
  | "Object"
  | "Reflexive"
  | "Possessive"
  | "Demonstrative"
  | "Indefinite"
  | "Interrogative"
  | "Relative"
  | "Negative"
  | "Emphatic"
  | "Total"
  | "Partitive";

interface Pronoun extends Definition {
  gender: GenderType;
}

type SubjectPronoun =
  | "Yo"
  | "Tú"
  | "Él"
  | "Ella"
  | "Usted"
  | "Nosotros/nosotras"
  | "Vosotros/vosotras"
  | "Ellos"
  | "Ellas"
  | "Ustedes";
const subjectPronouns: Pronoun[] = [
  {
    gender: "Neutral",
    name: "Yo",
    description: "I",
    example: "Yo soy un programador.",
  },
  {
    gender: "Neutral",
    name: "Tú",
    description: "you, informal singular",
    example: "Tú eres muy talentoso.",
  },
  {
    gender: "Masculine",
    name: "Él",
    description: "he",
    example: "Él es muy alto.",
  },
  {
    gender: "Feminine",
    name: "Ella",
    description: "she",
    example: "Ella es muy guapa.",
  },
  {
    gender: "Neutral",
    name: "Usted",
    description: "you, formal singular",
    example: "Ud. es muy amable.",
  },
  {
    gender: "Neutral",
    name: "Nosotros/nosotras",
    description: "we",
    example: "Nosotros somos muy unidos.",
  },
  {
    gender: "Neutral",
    name: "Vosotros/vosotras",
    description: "you all, informal plural",
    example: "Vosotros sois muy divertidos.",
  },
  {
    gender: "Masculine",
    name: "Ellos",
    description: "they, masculine",
    example: "Ellos son muy inteligentes.",
  },
  {
    gender: "Feminine",
    name: "Ellas",
    description: "they, feminine",
    example: "Ellas son muy simpáticas.",
  },
  {
    gender: "Neutral",
    name: "Ustedes",
    description: "you all, formal plural",
    example: "Uds. son muy profesionales.",
  },
];

const objectPronouns: Definition[] = [
  {
    name: "me",
    description:
      'Refers to the first-person singular pronoun "me", used as the direct or indirect object of a verb',
    example: "Me gusta el chocolate (I like chocolate)",
  },
  {
    name: "te",
    description:
      'Refers to the second-person singular pronoun "you", used as the direct or indirect object of a verb',
    example: "Te quiero (I love you)",
  },
  {
    name: "le",
    description:
      'Refers to the third-person singular pronoun "him", "her", or "it", used as the direct or indirect object of a verb',
    example: "Le di el libro (I gave him the book)",
  },
  {
    name: "nos",
    description:
      'Refers to the first-person plural pronoun "us", used as the direct or indirect object of a verb',
    example: "Nos gustan los perros (We like dogs)",
  },
  {
    name: "os",
    description:
      'Refers to the second-person plural pronoun "you all", used as the direct or indirect object of a verb',
    example: "Os quiero (I love you all)",
  },
  {
    name: "les",
    description:
      'Refers to the third-person plural pronoun "them", used as the direct or indirect object of a verb',
    example: "Les di los libros (I gave them the books)",
  },
];

const reflexivePronouns: Definition[] = [
  {
    name: "me",
    description:
      'Refers to the first-person singular pronoun "myself", used to indicate that the subject is performing the action on itself',
    example: "Me lavo las manos (I wash my hands)",
  },
  {
    name: "te",
    description:
      'Refers to the second-person singular pronoun "yourself", used to indicate that the subject is performing the action on itself',
    example: "Te ves bien (You look good)",
  },
  {
    name: "se",
    description:
      'Refers to the third-person singular pronoun "himself", "herself", or "itself", used to indicate that the subject is performing the action on itself',
    example: "Se cortó el pelo (He/She cut his/her hair)",
  },
  {
    name: "nos",
    description:
      'Refers to the first-person plural pronoun "ourselves", used to indicate that the subject is performing the action on itself',
    example: "Nos divertimos (We have fun)",
  },
  {
    name: "os",
    description:
      'Refers to the second-person plural pronoun "yourselves", used to indicate that the subject is performing the action on itself',
    example: "Os gusta la música (You all like music)",
  },
  {
    name: "se",
    description:
      'Refers to the third-person plural pronoun "themselves", used to indicate that the subject is performing the action on itself',
    example: "Se rieron (They laughed)",
  },
];

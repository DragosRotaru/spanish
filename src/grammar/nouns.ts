/*


Plural formation:

Spanish nouns can be singular or plural,
and there are several different ways to form plurals in Spanish,
including adding "-s" or "-es" to the end of the word,
changing the stem of the word, or using a completely different word.


Capitalization: Spanish nouns are capitalized when they begin a sentence or when they are used as proper nouns to refer to specific people, places, or things.
Accent marks: Spanish nouns may sometimes require accent marks to maintain the correct stress and pronunciation of the word.

*/

import { articles } from "./articles";

interface Noun {
  gender: GenderType;
  root: string;
  plural: boolean;
}

function getPluralForm(noun: Noun): string {
  /*
        The plurals of loanwords (words that have come into Spanish from other languages)
        that end in í or ú are formed by simply adding an -s to the end of the word.
        For example: popurrís (potpourris), menús (menus)
     */

  /*
Rule: If a singular noun ends in s or x, has more than one syllable, and the last syllable is unstressed, the singular and plural forms are the same.
Rule: If the second word in a singular compound noun is a plural noun, the singular and plural forms are the same.
If a singular noun ends in l, r, n, d, z or j and is a palabra esdrújula
(a word with three more syllables that is accented on the third-to-last syllable), the singular and plural forms are the same.



 */

  const exceptionList = {
    no: "noes",
    yo: "yoes / yos",
    sí: "síes / síes",
    club: "clubes",
    àlbum: "àlbumes",
    análisis: "análisis",
    jueves: "jueves",
    tórax: "tórax",
    ciempiés: "ciempiés",
    pasapuré: "pasapuré",
    polisíndeton: "polisíndeton",
  };

  if (exceptionList[noun.root]) {
    return exceptionList[noun.root];
  }

  const { root } = noun;
  const lastLetter = root.slice(0, -1);
  const secondLastLetter = root.slice(0, -2);

  // Vowel Rules:

  if (endsWithOneOf(root, ["á", "é", "ó"])) {
    return root + "s";
  }

  if (endsWithOneOf(root, ["í", "ú"])) {
    // can be s, but this is fancier
    return root + "es";
  }

  if (isVowel(lastLetter)) {
    return root + "s";
  }

  // TODO What if its a accented vowel?
  /*
    Words ending in n or s that stress the final syllable in the singular lose the written accent in the plural form.
    Words ending in n that stress the next-to-last syllable in the singular add a written accent in the plural form
    */

  // ends in a noun + y, add es
  if (isVowel(secondLastLetter) && lastLetter === "y") {
    return root + "es";
  }

  // ends in st or zt, return root
  if (endsWithOneOf(root, ["st", "zt"])) {
    return root;
  }

  // ends in a consonant cluster (more than one consonant together), add -s
  if (isConsonant(lastLetter) && isConsonant(secondLastLetter)) {
    return root + "s";
  }

  // ends in a vowel plus a consonant other than l, r, n, d, z, j, s, x, or ch, add -s.
  if (
    isVowel(secondLastLetter) &&
    isConsonant(lastLetter) &&
    !endsWithOneOf(root, ["l", "r", "n", "d", "z", "j", "s", "x", "ch"])
  ) {
    return root + "s";
  }

  // if ends in  l, r, n, d, j, s, x, or ch, add -es
  if ("lrndjsx".includes(lastLetter) || root.endsWith("ch")) {
    return root + "es";
  }

  // if ends in z, change to c and add -es
  if (lastLetter === "z") {
    return root.slice(0, -1) + "ces";
  }

  if (isConsonant(lastLetter)) {
    return root + "es";
  }

  throw new Error("Could not find plural form for " + root);
}

function endsWithOneOf(str: string, oneOf: string[]) {
  return oneOf.some((ending) => str.endsWith(ending));
}

function isVowel(char: string): boolean {
  return "aeiou".includes(char);
}

function isConsonant(char: string): boolean {
  return !isVowel(char);
}

function isStressedVowel(char: string): boolean {
  return "áéíóú".includes(char);
}

function getNounArticle(noun: Noun) {
  return articles.filter(
    (article) =>
      article.gender === noun.gender && article.plural === noun.plural
  )[0];
}

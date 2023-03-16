/*

In Spanish, conjugation refers to the process of changing the form of a verb to match the subject of a sentence.
It's a key aspect of the Spanish language and allows speakers to communicate who is performing the action described by the verb.
Spanish verbs are conjugated based on the person, number, and sometimes gender of the subject.

There are six persons in Spanish: first person singular (yo), second person singular (tú), third person singular (él, ella, usted),
first person plural (nosotros), second person plural (vosotros), and third person plural (ellos, ellas, ustedes).
In addition, there are two numbers in Spanish: singular and plural.

The Spanish verb conjugation system can be complex, as different verbs follow different conjugation patterns.
However, once a speaker understands the conjugation patterns of regular verbs, they can usually figure out the conjugation of most verbs.

It's also worth noting that Spanish has two past tense conjugations: the preterite and the imperfect.
The preterite is used to describe a completed action in the past, while the imperfect is used to describe ongoing actions in the past.

Overall, understanding Spanish conjugation is a crucial aspect of speaking and writing the language effectively.
With practice and study, it can become second nature.


For example, adjectives and nouns can also be conjugated to agree in gender and number with the noun they modify.
Spanish also has pronominal conjugation, which involves conjugating pronouns to reflect the person, number, and gender of the subject they refer to.
In addition, Spanish has a small amount of adverb conjugation, where adverbs can change form to agree with the verb they modify.
These various types of conjugation play an important role in expressing meaning in the Spanish language,
helping to clarify the relationships between words and making communication more precise.

*/

function conjugateVerb(
  verb: string,
  tense: Tense,
  pronoun: SubjectPronoun
): string {
  const verbEnding = verb.slice(-2);
  const verbRoot = verb.slice(0, -2);
  return "";
}

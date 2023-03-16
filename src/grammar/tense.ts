/*

Indicative Mood Simple Tenses

This is the most common combination of mood and tenses,
which means these are the conjugations that you’re going to use more.

Indicative Mood Compound Tenses

As I said before, the indicative mood is the most commonly used since we use it
to express things that happen in reality. Compound tenses include two verbs,
an auxiliary one which always is haber (to have) and the main verb in its past
participle form. Learn more details about How to Use the Past Participle as an
Adjective in Spanish.


Did you notice how all the compound tenses have the exact same conjugation of haber,
the helping verb? Meanwhile, the main verbs (comprar, correr, vivir) morphed into
their past participle forms.

My point is—while, yes, these are a lot of conjugations to learn, they’re not as many
(and difficult) as you think at closer inspection!

Subjunctive Mood Simple Tenses

If the indicative was the “normal” mood, then the subjunctive is the “weird” one.
You use the subjunctive to talk about things that are not part of reality, such
as wishes and desires, among many other things.

Subjunctive Mood Compound Tenses

These are arguably the most complex Spanish tenses that exist.
So much that some of them don’t even have a direct translation to English.

*/

type TenseType =
  | "Present"
  | "Preterite (Past)"
  | "Pluperfect"
  | "Imperfect"
  | "Future"
  | "Conditional";
type Compound = "Perfect" | "Anterior";

interface Tense {
  mood: MoodType;
  name: TenseType;
  compound?: Compound;
  second?: boolean;
  description: string;
  example: string[];
}

const tenses: Tense[] = [
  {
    mood: "Indicative",
    name: "Present",
    description: `Also known as the “present simple.” Use this tense to talk about things that happen in general, or about habits.
                    The present tense is used to describe actions that are happening now, or to talk about habits and general truths.`,
    example: [
      "Hablo español",
      "Ella come frutas todos los días",
      "El sol sale por el este",
    ],
  },
  {
    mood: "Indicative",
    name: "Preterite (Past)",
    description: `
        The preterite is one of the Spanish tenses used to speak about the past.
The imperfect is the other one. If you want to learn more about these two Spanish tenses check out our post about All You Ever Needed to Know About Spanish (Simple) Past Tense Verbs.

Use the preterite to talk about events that occured at a certain time in the past, usually with a specific time frame.
`,
    example: [
      "Visité a mi abuela ayer",
      "Ellos fueron al cine el fin de semana pasado",
      "Caminé al parque en la tarde",
    ],
  },
  {
    mood: "Indicative",
    name: "Imperfect",
    description: `
        The imperfect is that “other” simple past tense in Spanish.
Use it to talk about “past actions without a definite end,”
when you put an emphasis on the process of the action, or habitual events in the past.`,
    example: [
      "Yo hablaba español cuando era niño",
      "Ella siempre comía frutas en la tarde",
      "El sol salía por el este todas las mañanas",
    ],
  },
  {
    mood: "Indicative",
    name: "Future",
    description: `
        There are two Spanish tenses to talk about the events that will happen at any moment after the present moment: the future and the conditional.
The future translates to English using the word “will” and it straightforward expresses events that are about to happen or will happen at some point after right now.
It has the characteristic of changing the whole verb, and because of that it’s easier to learn as all verbs have the same conjugation regardless of their infinitive ending.`,
    example: [
      "Hablaré español en el futuro",
      "Ella comerá frutas mañana",
      "El sol saldrá por el este esta tarde",
    ],
  },
  {
    mood: "Indicative",
    name: "Conditional",
    description: `
        The conditional is basically the Spanish equivalent of the “would + verb” construction in English, but for a deeper understanding of how it works please read What is the Conditional Tense in Spanish?
The conditional is one of the easiest tenses to conjugate as it keeps the verb in its infinitive form and only adds an inflection at the end of it, for the three types of regular verbs (-ar, -er, -ir).`,
    example: [
      "Hablaría español si tuviera la oportunidad",
      "Ella comería frutas si no fuera alérgica",
      "El sol saldría por el este si no estuviera nublado",
    ],
  },

  {
    mood: "Indicative",
    name: "Present",
    compound: "Perfect",
    description: `
        The present perfect is the first one on this list of Spanish tenses that’s made up of two verbs: haber + main verb in past participle. Use the perfect present for:

    Events that started in the past, have continued until the present, and may continue into the future.
    Events that occurred in a non-specific time in the past.
    Events that just took place in the recent past.

Translate to English as “have/has + past participle verb.” `,
    example: [
      "He hablado español por 5 años",
      "Ella ha comido frutas todos los días esta semana",
      "El sol ha salido por el este todas las mañanas esta semana",
    ],
  },
  {
    mood: "Indicative",
    name: "Preterite (Past)",
    compound: "Anterior",
    description: `
        Also known as past anterior, preterite perfect helps you to talk about an action in the past that took place before another action in the past. Its use is minimal and limited to formal language and literature mostly. In other words, don’t spend too much time trying to memorize and use this verb tense.
Translate to English as “had + past participle verb.” `,
    example: [],
  },
  {
    mood: "Indicative",
    name: "Preterite (Past)",
    compound: "Perfect",
    description: `also called pluperfect
        The dreaded pluscuamperfecto also helps you to explain something that “had happened before something else happened.” Read this post to Master the Past Perfect Spanish Tense (El Pluscuamperfecto).

The pluscuamperfecto is the reason the preterite perfect isn’t as commonly used anymore.

Translate to English as “had + past participle verb.”`,
    example: [
      "Había hablado español antes de conocerte",
      "Ella había comido frutas antes de salir de casa",
      "El sol había salido por el este antes de que comenzara a llover",
    ],
  },
  {
    mood: "Indicative",
    name: "Future",
    compound: "Perfect",
    description: `
        The future perfect is one of the most complex Spanish tenses there are. It allows you to “look back to the past from a point in the future.”
        Translate to English as “will have + past participle verb.”`,
    example: [
      "Habré hablado español por 10 años en el futuro",
      "Ella habrá comido frutas todos los días durante un mes",
      "El sol habrá salido por el este todas las mañanas antes de las 9",
    ],
  },
  {
    mood: "Indicative",
    name: "Conditional",
    compound: "Perfect",
    description: `
        Use the conditional perfect to talk about suppositions in the past, complete or finished requests, invitations, or suggestions, and future actions from a past perspective.

Translate to English as “would have + past participle verb.”`,
    example: [
      "Habría hablado español si hubiera tenido más tiempo",
      "Ella habría comido frutas si no hubiera estado tan ocupada",
      "El sol habría salido por el este si no hubiera estado nublado",
    ],
  },

  {
    mood: "Subjunctive",
    name: "Present",
    description: `
        Use the present subjunctive to express uncertainty, doubt, and hope. `,
    example: [],
  },
  {
    mood: "Subjunctive",
    name: "Imperfect",
    description: `
        There are two imperfect tenses in subjunctive. Both are correct and you can use whichever you prefer and it makes no difference. Use the imperfect subjunctive to express a point of view in the past.
        `,
    example: [],
  },
  {
    mood: "Subjunctive",
    name: "Imperfect",
    second: true,
    description: `
        Same situations apply, it’s just a different way of expressing the same idea. If anything, this imperfect tense is more used in Spain than in Latin America. `,
    example: [],
  },
  {
    mood: "Subjunctive",
    name: "Future",
    description: `This Spanish tense is almost obsolete these days, but it’s still used in formal language when a verb in present or future requires the subjunctive in the main clause and refers to a future action.`,
    example: [],
  },
  {
    mood: "Subjunctive",
    name: "Present",
    compound: "Perfect",
    description: `
        Use the present perfect subjunctive when a verb requiring the subjunctive in the main clause is in the present, future, or present perfect. The only difference with the present subjunctive is that you have to use the present perfect subjunctive when the dependent clause is in the past, while you use the present subjunctive when the dependent clause is in the present or future. `,
    example: [],
  },
  {
    mood: "Subjunctive",
    name: "Preterite (Past)",
    compound: "Perfect",
    description: `
        Use the past perfect subjunctive to talk about hypothetical situations, regrets, or hindsight. This is the equivalent subjunctive compound tense to the imperfect, so there are also two versions of it. `,
    example: [],
  },
  {
    mood: "Subjunctive",
    name: "Preterite (Past)",
    compound: "Perfect",
    second: true,
    description: `Same case as the imperfect, this version is more widely used in Spain. Besides that, there’s no other difference between the two subjunctive past perfect tenses. `,
    example: [],
  },
  {
    mood: "Subjunctive",
    name: "Future",
    compound: "Perfect",
    description: `Another rarely used tense in modern Spanish. You can use it to talk about actions that have happened, should have happened, or could have happened at some point in the future.`,
    example: [],
  },
];

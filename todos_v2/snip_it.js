{
   _id: 1,
   results: [
      { item: "A", score: 5 },
      { item: "B", score: 8, comment: "Strongly agree" }
   ]
}
{
   _id: 2,
   results: [
      { item: "C", score: 8, comment: "Strongly agree" },
      { item: "B", score: 4 }
   ]
}
db.survey.update(
  { },
  { $pull: { results: { score: 8 , item: "B" } } },
  { multi: true }
)
{
   "_id" : 1,
   "results" : [ { "item" : "A", "score" : 5 } ]
}
{
  "_id" : 2,
  "results" : [
      { "item" : "C", "score" : 8, "comment" : "Strongly agree" },
      { "item" : "B", "score" : 4 }
   ]
}
db.survey.update(
  { },
  { $pull: { results: { $elemMatch: { score: 8 , item: "B" } } } },
  { multi: true }
)
{
   _id: 1,
   results: [
      { item: "A", score: 5, answers: [ { q: 1, a: 4 }, { q: 2, a: 6 } ] },
      { item: "B", score: 8, answers: [ { q: 1, a: 8 }, { q: 2, a: 9 } ] }
   ]
}
{
   _id: 2,
   results: [
      { item: "C", score: 8, answers: [ { q: 1, a: 8 }, { q: 2, a: 7 } ] },
      { item: "B", score: 4, answers: [ { q: 1, a: 0 }, { q: 2, a: 8 } ] }
   ]
}
db.survey.update(
  { },
  { $pull: { results: { answers: { $elemMatch: { q: 2, a: { $gte: 8 } } } } } },
  { multi: true }
)
{
   "_id" : 1,
   "results" : [
      { "item" : "A", "score" : 5, "answers" : [ { "q" : 1, "a" : 4 }, { "q" : 2, "a" : 6 } ] }
   ]
}
{
   "_id" : 2,
   "results" : [
      { "item" : "C", "score" : 8, "answers" : [ { "q" : 1, "a" : 8 }, { "q" : 2, "a" : 7 } ] }
   ]
}

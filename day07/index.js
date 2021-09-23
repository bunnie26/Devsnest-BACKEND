const app = require("express")();

app.get("/", (req, res) => {
  res.status(200).send("HELLO");
});

/*
? to denote start of query
variableNamethen = and then its value
& to separate variables or params
use encodeUriComponent on strings containing special characters like & to send them as values
use query when want to filter on same path, path when new resource or different resource like profiles
*/
//query style example
app.get("/oof", (req, res) => {
  res.status(200).send(req.query);
});

//optional path
/*
letter before ? mark is optional in path and may or may not be included
 */

app.get("/a?b?cd", (req, res) => res.status(201).send("you want to die?"));

/*
anything between ab and cd
*/
app.get("/ab*cd", (req, res) => res.status(201).send("dont shit yo pants"));

//optional path
/*
optional path with grouping with paranthesis
 */

app.get("/x(ad)?e", (req, res) => res.status(201).send("(-_-)"));

/*
regex in path
*/
app.get(/.*fly$/, (req, res) => res.status(200).send(";-;"));

/*
path params
*/
app.get("/profile/:userid", (req, res) => res.status(200).send(req.params));

app.listen(3000);

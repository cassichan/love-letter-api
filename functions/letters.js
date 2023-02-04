import { fsConnect } from "./fsConnect.js";

export function getAllLetters(req, res) {
  const db = fsConnect();
  db.collection("letters")
    .get()
    .then((collection) => {
      const letters = collection.docs.map((doc) => {
        let letter = doc.data();
        letter.id = doc.id;
        return letter;
      });

      res.send(letters);
    })
    .catch((error) => res.status(500).console.error(error));
}

export function addLetter(req, res) {
  const db = fsConnect();
  const newLetter = req.body;
  db.collection("letters")
    .add(newLetter)
    .then((doc) => {
      res.status(201).send({
        success: true,
        id: doc.id,
      });
    })
    .catch((error) => res.status(500).console.error(error));
}

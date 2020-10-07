var ObjectID = require('mongodb').ObjectID
module.exports = function (app, db) {
	app.post('/notes', (req, res) => {
		// console.log(req.body);
		// res.send('Welcome to the jungle ')
		const note = { ...req.body }
		db.collection('notesDB').insert(note, (err, results) => {
			if(err){
				res.send({"error": "An error has occured"+err})
			}
			res.send(results.ops[0])
		})
	})
	app.get('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id' : new ObjectID (id)};
		db.collection('notesDB').findOne(details, (err, item) => {
			if(err){
				res.send({"error": "An error has occured"+err})
			}
			res.send(item)	 
		})		
	})

	app.delete('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id' : new ObjectID (id)};
		db.collection('notesDB').remove(details, (err, item) => {
			if(err){
				res.send({"error": "An error has occured"+err})
			}
			res.send('Note '+ id + ' deleted  ')	 
		})
	})

	app.put('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id' : new ObjectID (id)};
		const note = { ...req.body }
		db.collection('notesDB').update(details,note, (err, item) => {
			if(err){
				res.send({"error": "An error has occured"+err})
			}
			res.send(item)	 
		})		
	})


} 
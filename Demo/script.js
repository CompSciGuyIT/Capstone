const MongoClient = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Connection Failure!')
    }
    console.log('Connection Established!')

    const db = client.db('Team')

    // Hard coded data for demonstration purposes only
    document.getElementById("create-btn").addEventListener("click", () => {
        db.collection('members').insertOne({
            firstName: 'Markus',
            lastName: 'Quick',
            email: 'quick@email.com'
        }).then((res) => {
            console.log(res.ops)
        }).catch((err) => {
            console.log(err)
        })
        
    }, false);

    document.getElementById("retrieve-btn").addEventListener("click", () => {
        db.collection('members').findOne({ 
            firstName: 'Phillip' 
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

    }, false);
    
    document.getElementById("update-btn").addEventListener("click", () => {
        db.collection('members').updateOne({
            firstName: 'Kate'
        }, {
            $set: {
                email: 'kate.strong@email.com'
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    
    }, false);
    
    document.getElementById("delete-btn").addEventListener("click", () => {
        db.collection('members').deleteOne({ 
            firstName: 'Markus' 
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    
    }, false);
})
import { MongoClient } from 'mongodb'

async function handler(req, res){
    if(req.method === 'POST'){
        const { email, name, message } = req.body;

        if(!email || !email.includes('@')
            || !name || name.trim() === ''
             || !message || message.trim() === ''){

        res.status(422).json({
            message: 'Invalid Input'
        })
        return 
    }

    const newMessage = {
        email,
        name, 
        message
    }
    console.log(newMessage);
    let client 
    try{
        client = await MongoClient
        .connect('mongodb+srv://markfu1996:T9PyfJCyY9s2N8qi@cluster0.fdkjlve.mongodb.net/my-site')
    }catch(e){
        res.status(500).json({message: 'Can not connect to database'})
        return 
    }

    const db = client.db()
    try{
       const result = db.collection('messages').insertOne(newMessage)
       newMessage.id = result.insertId
    }catch(e){
        client.close()
        res.status(500).json({message: 'Insert messages failed'})
        return
    }

    res.status(201).json({
        message:'Successfully send',
        message: newMessage 
    })

    }
}

export default handler
//api express app
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const Publock = require('./models/Publock.js');
const cookieParser = require('cookie-parser');
const User = require('./models/User.js');
const imageDownloader = require('image-downloader');
const multer = require('multer');
const fs = require('fs');
const Booking = require('./models/Booking.js');
//const { resolve } = require('path');

require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10); 
const jwtSecret = 'fsafjjfjsjkkdsgkksklsllcsgjjjscfo';

app.use(express.json());
app.use(cookieParser());

app.use('/uploads', express.static(__dirname+'/uploads'));



app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

//this is not defined for some reason
function getUserDataFromReq(req) {
    return new Promise((resolve, reject) => {
        jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
            if(err) throw err;
            resolve(userData);
        });
    });
}

app.get('/test', (req,res) =>{
    mongoose.connect(process.env.MONGO_URL);
    res.json('test ok');
    
});

app.post('/register', async (req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {name, email, password} = req.body;
    try {

        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, bcryptSalt),
            balance: 100,
        });
        res.json({userDoc});

    } catch (e) {
        res.status(422).json(e);
    }
    
    
});

//this is the login functionality 
app.post('/login', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
   const {email, password} = req.body;
   const userDoc = await User.findOne({email});
   if(userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if(passOk) {
            jwt.sign({
                email:userDoc.email, 
                id:userDoc._id, 
                name:userDoc.name
            }, jwtSecret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(userDoc);
            });
            
        } else{
            res.status(422).json('pass not ok');
        }
   } else {
        res.json("not found");
   }
});

app.get('/profile', (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if(err) throw err;
            const {name, email, _id, balance} = await User.findById(userData.id);
            res.json({name, email, _id, balance});
        });
    } else {
        res.json(null);
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.put('/balance', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const { token } = req.cookies;
    const { amount } = req.body; // the deposit or withdrawal amount
  
    if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) {
          res.status(500).json({ error: 'Failed to authenticate token.' });
        } else {
          try {
            const user = await User.findById(userData.id);
  
            if (!user) {
              return res.status(404).json({ error: 'User not found' });
            }
  
            user.balance += amount; // this could be a negative number for withdrawals
            await user.save();
  
            return res.status(200).json({ balance: user.balance });
          } catch (err) {
            return res.status(500).json({ error: 'Something went wrong.' });
          }
        }
      });
    } else {
      return res.status(403).json({ error: 'No token provided.' });
    }
  });
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/logout', (req,res) => {
    res.cookie('token', '').json(true);
})

app.post('/upload-by-link', async (req, res) => {
    const {link} = req.body;
    const newName = 'photo' + Date.now() + '.jpg';
    await imageDownloader.image({
        url: link,
        dest: __dirname +'/uploads/' +newName,
    });
    res.json(newName)
});

//this works now but is not displaying the image 
const photosMiddleware = multer({dest:'uploads/'});
app.post('/upload', photosMiddleware.array('photos', 100), (req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    const uploadedFiles = [];
    for (let  i = 0; i < req.files.length; i++) {
        const {path,originalname} = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
        uploadedFiles.push(newPath.replace('uploads/',''));
    }
    res.json(uploadedFiles);
});

//this is failing for some reason
app.post('/publocks', (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {token} = req.cookies;
    const {
        title,address,addedPhotos,description,price,perks,extraInfo,startTime,endTime,maxCapacity,
    } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if(err) throw err;
        const publockDoc = await Publock.create({
            owner: userData.id,price,
            title,address,photos:addedPhotos,description, 
            perks,extraInfo,startTime,endTime,maxCapacity,
        });
        res.json(publockDoc);
     
    });
   
});

app.get('/user-publocks', (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {token} = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        const{id} = userData;
        res.json(await Publock.find({owner:id}));
    });
});

app.get('/publocks/:id', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {id} = req.params;
    res.json(await Publock.findById(id));
});

//this is failing for some reason
app.put('/publocks', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {token} = req.cookies;
    const {
        id, title, address, addedPhotos, description, perks, extraInfo, startTime, endTime, maxCapacity, price,
    } = req.body;

    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if(err) throw err;

      const publockDoc = await Publock.findById(id);

      if(userData.id === publockDoc.owner.toString()){
        console.log({price});
        publockDoc.set({
                title, 
                address, 
                photos: addedPhotos,
                description, 
                perks, 
                extraInfo, 
                startTime, 
                endTime, 
                maxCapacity,
                price,
            }); 

        await publockDoc.save();
        res.json('ok');

      }
    });
});

app.get('/publocks', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    res.json( await Publock.find() );
});

app.post('/bookings', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const userData = await getUserDataFromReq(req);
    const {
        publock,storeStart, 
        storeEnd,numberOfParcels, 
        name,phone,price,
    } = req.body;
    Booking.create({
        publock,storeStart, 
        storeEnd,numberOfParcels, 
        name,phone,price,
        user:userData.id,
    }).then((doc) => {
        res.json(doc);
    }).catch((err) => {
        throw err;
    });
});

app.get('/bookings', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
   const userData = await getUserDataFromReq(req);
   res.json( await Booking.find({user:userData.id}).populate('publock') );
});

//this is where the app listens
app.listen(4000);
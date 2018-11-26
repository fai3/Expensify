import * as firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
     const database = firebase.database();
     export { firebase, database as default };
    //  database.ref('expenses').on('child_removed', (snapshot)=>{
       
    //      console.log(snapshot.key, snapshot.val());
    //  });
    //  database.ref('expenses').on('child_changed', (snapshot)=>{
        
    //       console.log(snapshot.key, snapshot.val());
    //   });
    //   database.ref('expenses').on('child_added', (snapshot)=>{
        
    //       console.log(snapshot.key, snapshot.val());
    //   });
    //  database.ref('expenses').once('value')
    //  .then((snapshot)=>{
    //      const expenses = [];
    //      snapshot.forEach((childSnapshot)=>{
    //      expenses.push({
    //         id: childSnapshot.key,
    //         ...childSnapshot.val()
    //     });
    //       });   
    //       console.log(expenses);
    //       })
    // database.ref('expenses').on('value', (snapshot)=>{
    //    const  expenses = [];
    //     snapshot.forEach((childSnapshot)=>{
    //         expenses.push({
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //         });
    //     });

    //     console.log(expenses);
    // });
    //   wWorking with array
        
// database.ref('expenses').push({
//     description: 'Description of first expense',
//     note: 'Remember you have to go to a run',
//     amount: 654,
//     createdAt: 2345000
// });

         //  FETCHING DATA one time
//     database.ref('job/title').once('value')
//     .then((snapshot)=>{
//      const val =    snapshot.val();
//         console.log(val);
//     }).catch((e)=>{
//         console.log('Errot Fetching data');
//     })


    // Go from once to on if you wanna be notified if every changes oocur in data. Notice you cant use promises
//  database.ref().on('value', (snapshot)=>{
//     const val =  snapshot.val();
//     console.log(val);
// })
//   database.ref().set({
//       name: 'Faizan',
//       age: 23,
//       stressLevel: 6,
//       job: {
//         title: 'Software Developer',
//         company: 'Google'
//       },
//       location: {
//           city: 'Pindi',
//           street : 9
//       }
//   }).then(()=>{
//       console.log('data is saved');
//   }).catch((e)=>{
//     console.log('This failed', e);
//   });
//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city':'Seattle'
// });
// database.ref('age').remove()
// .then(()=>{
//     console.log('removed successfully');
// })
// .catch((err)=>{
//     console.log('not removed:', err);
// });
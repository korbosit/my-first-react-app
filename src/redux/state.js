

// let posts = [
// 	{id: 1,message:'Hi, how are you?', likesCount: 12},
// 	{id: 2,message:'Its my FIRST post ?', likesCount: 23},
// 	{id: 3,message:'Its my SECOND post', likesCount: 2},
// 	{id: 4,message:'Its my THIRD post', likesCount: 48},
// 	{id: 5,message:'Its my FOURTH post ?', likesCount: 18},
// 	{id: 6,message:'Its my FIFTH post', likesCount: 2300}
// ]

// let dialogs = [
// 	{id: 1,name:'Vovanec'},
// 	{id: 2,name:'Sveta'},
// 	{id: 3,name:'Timka'},
// 	{id: 4,name:'Beta'},
// 	{id: 5,name:'Alfa'},
// 	{id: 6,name:'Mikki'}
// ]

// let messages = [
// 	{id: 1,message:'Hi'},
// 	{id: 2,message:'How is your It-kamasutra ?'},
// 	{id: 3,message:'Yo'},
// 	{id: 4,message:'What is your name'},
// 	{id: 5,message:'How are you ?'},
// 	{id: 6,message:'You are the best !'}
// ]

let state = {
   profilePage: {
      posts: [
         {id: 1,message:'Hi, how are you?', likesCount: 12},
         {id: 2,message:'Its my FIRST post ?', likesCount: 23},
         {id: 3,message:'Its my SECOND post', likesCount: 2},
         {id: 4,message:'Its my THIRD post', likesCount: 48},
         {id: 5,message:'Its my FOURTH post ?', likesCount: 18},
         {id: 6,message:'Its my FIFTH post', likesCount: 2300}
      ]
   },
   dialogsPage: {
      messages: [
         {id: 1,message:'Hi'},
         {id: 2,message:'How is your It-kamasutra ?'},
         {id: 3,message:'Yo'},
         {id: 4,message:'What is your name'},
         {id: 5,message:'How are you ?'},
         {id: 6,message:'You are the best !'}
      ],
      dialogs:[
         {id: 1,name:'Vovanec'},
         {id: 2,name:'Sveta'},
         {id: 3,name:'Timka'},
         {id: 4,name:'Beta'},
         {id: 5,name:'Alfa'},
         {id: 6,name:'Mikki'}
      ]
   },
}

export let addPost = (postMessage) => {
   let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0,
   };
   state.profilePage.posts.push(newPost);
}

export default state;
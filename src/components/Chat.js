import { useEffect, useState } from "react"
import { addDoc, collection , onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { auth, db } from "../firebase-config";

export const Chat = (props)=>{
    const {room} = props;

    const [newMessage,SetNewMessage] = useState("");

    const messageRef = collection(db,"messages");
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        const queryMessages = query(messageRef, where("room","==", room),orderBy("createdAt"));
         const unsubscribe =   onSnapshot(queryMessages, (snapshot)=>{
            let messages = [];
            snapshot.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages);
       
    });

    return () => unsubscribe();

}, []);


    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(newMessage === "") return;
        await addDoc(messageRef, {
            text: newMessage,
            createdAt : serverTimestamp(),
            user: auth.currentUser.displayName,
            room,

        });
        SetNewMessage("")


        
    }



    return (
    <div>

        <div>
            <h1>Welcome to : {room.toUpperCase()}</h1>
        </div>
        
        <div> {messages.map((message)=>(

             
        <div key={message.id}>
            <span>{message.user}: </span>
            {message.text}
        </div>
        ))}
    </div>
        



        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>{
                SetNewMessage(e.target.value);
               
            }} value ={newMessage}  />
            <button type="submit">Send</button>

        </form>
    </div>
    )
}
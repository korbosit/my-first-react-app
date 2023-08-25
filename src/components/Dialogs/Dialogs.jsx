
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
   let dialogsElements = props.state.dialogs.map((d) => (
      <DialogItem name={d.name} id={d.id} />
   ));

   let messagesElements = props.state.messages.map((m) => (
      <Message message={m.message} />
   ));
   return (
      <div>
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
               {/* <DialogItems name={dialogsData[0].name} id={dialogsData[0].id}/>
						<DialogItems name={dialogsData[1].name} id={dialogsData[1].id}/>
						<DialogItems name={dialogsData[2].name} id={dialogsData[2].id}/>
						<DialogItems name={dialogsData[3].name} id={dialogsData[3].id}/>
						<DialogItems name={dialogsData[4].name} id={dialogsData[4].id}/>
						<DialogItems name={dialogsData[5].name} id={dialogsData[5].id}/> */}
            </div>
            <div className={s.messages}>
               {messagesElements}
               {/* <Message message={messagesData[0].message}/>
						<Message message={messagesData[1].message}/>
						<Message message={messagesData[2].message}/>
						<Message message={messagesData[3].message}/>
						<Message message={messagesData[4].message}/>
						<Message message={messagesData[5].message}/> */}
            </div>
         </div>
      </div>
   );
};

export default Dialogs;
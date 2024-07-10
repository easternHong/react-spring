import {useEffect, useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {ListGroup} from "react-bootstrap";

function NoteItem(props: { item: Note, itemClick?: () => void, editClick?: () => void }) {
    return (
        <div
            onClick={props.editClick}
            className='bg-white flex-row hover:bg-amber-50 text-gray-500 shadow mt-4 m-4 py-2 px-4 rounded-md'>
            <span className=''>{props.item.id} {props.item.content}</span>
            <button className='ml-5 float-right hover:text-red-600'
                    onClick={props.itemClick}>x
            </button>
        </div>
    )
}

const NotesPanel = () => {

    const [notes, setNotes] = useState<Note[]>([])

    const addNote = () => {
        const noteObject = {
            content: 'newNote:' + Math.random(),
            important: Math.random() > 0.5,
            id: notes.length + 1,
        }
        setNotes(notes.concat(noteObject))
    }

    const deleteNote = (note: Note, id: number) => {
        console.log('click delete:' + note.id + ',,' + id)
        const tempNotes = notes.filter(obj => obj !== note);
        setNotes(tempNotes)
    }

    const editNote = (note: Note, id: number) => {
        console.log('click edit:' + note.id + ',,' + id)
        const text = prompt(note.content);
        if (!text) return
        const noteObject = {
            content: text,
            important: note.important,
            id: note.id
        } as Note
        const index: number = notes.findIndex(obj => obj === note);
        notes[index] = noteObject
        setNotes(notes)
    }

    function loadNotes() {
        // axios.get('http://localhost:3001/notes').then(response => {
        //     const noteList = response.data
        //     setNotes(noteList)
        //     console.log(noteList)
        // })
    }

    useEffect(() => {
        loadNotes()
    }, []);

    return (
        <div className="m-10  flex flex-col bg-white shadow w-full border-amber-800 rounded">
            <div className="m-auto mt-2 mb-2">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                    onClick={addNote}>+ Add Note
                </button>
            </div>
            <TransitionGroup className="todo-list ">
                {notes.map((note: Note, id: number) => (
                    <CSSTransition
                        key={id}
                        timeout={500}
                        classNames="item">
                        <ListGroup.Item>
                            <NoteItem key={note.id} item={note} itemClick={() => {
                                deleteNote(note, id)
                            }} editClick={() => {
                                editNote(note, id)
                            }}/>
                        </ListGroup.Item>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default NotesPanel
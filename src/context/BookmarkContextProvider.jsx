import {BookmarkContext} from "./BookmarkContext";
import {useState} from "react";

const BookmarkContextProvider = ({children}) => {
    const [bookmarks,setBookmarks] = useState([{id: Date.now(), 
        title:' Software Engineering',
        company: 'Google',
        Location: 'California', 
        salary: '$120k',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'   }]);

        const addBookmark = (job) => {
            if(!isBookmarked(job.id)){
                setBookmarks([... bookmarks, job])
            }
        }

        const removeBookmark = (id) => {
            setBookmarks(bookmarks.filter(b => b.id !== id))
        }

        const isBookmarked = (id) => {
            return bookmarks.some(b => b.id === id)
        }
        return (
            <BookmarkContext.Provider value = {{bookmarks, addBookmark, removeBookmark, isBookmarked}}>
                {children}
            </BookmarkContext.Provider>
        )
}

export default BookmarkContextProvider;
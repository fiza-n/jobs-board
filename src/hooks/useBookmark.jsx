import {BookmarkContext} from '../context/BookmarkContext'
import { useContext} from 'react'

const useBookmark = () => {
    const {bookmarks,addBookmark, removeBookmark, isBookmarked} = useContext(BookmarkContext);
    return { bookmarks, addBookmark, removeBookmark, isBookmarked };
}
export default useBookmark
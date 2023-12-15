import {useState, useEffect} from 'react'
import { auth } from '../../config/firebase'

export function useFirebaseAuth(){
    const [loggedIn, setLoggedIn] = useState(false)
    const [isAuthLoading, setAuthLoading] = useState(true)

    useEffect(() => {
        const cleanup = auth.onAuthStateChanged((changedUser) => {
            if(changedUser){
                 setLoggedIn(true)
            }else setLoggedIn(false) 
            
            setAuthLoading(false)
        })

        return cleanup;
    }, [])

    return {loggedIn, isAuthLoading}
}
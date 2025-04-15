import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { IMG_URLS, LABELS } from '../utils/constants';
import { enableGptSearchFeature } from '../utils/gptSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user);
  const enableGptSearch = useSelector((store) => store?.gpt?.enableGptSearch)
  const {AVTAR_URL, LOGO_URL} = IMG_URLS;
  const {GPT_SEARCH, BROWSE_MOVIES} = LABELS

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName
        }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [])


  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error')
    });
  }

  const handleGptToggle = () => {
    dispatch(enableGptSearchFeature())
  }

  return (
    <div className="absolute bg-gradient-to-t from-black z-10 w-screen flex justify-between">
      <img className="w-52 py-2 px-8" src={LOGO_URL}
        alt="netflix-logo"
      />
      {
        user &&
        <div className='flex p-4 mx-10 items-center gap-4'>
          <button className='text-white bg-violet-900 px-4 py-2 cursor-pointer rounded'onClick={handleGptToggle}>GPT Search</button>
          <img src={AVTAR_URL}
            alt="user logo"
            className='w-9 h-9' />
          <button className='text-white font-bold cursor-pointer' onClick={handleSignOut}>Sign Out</button>
        </div>
      }

    </div>
  )
}

export default Header
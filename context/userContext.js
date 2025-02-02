'use client'
import { useState, useContext, createContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
export const UserContext = createContext({})

const UserProvider = ({ children }) => {
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [date, setDate] = useState('')
  const [photo, setPhoto] = useState('')
  const [photosrc, setPhotoSrc] = useState('')
  const [meta, setMeta] = useState('')
  const [files, setFiles] = useState('')
  const [userInfo, setUserInfo] = useState({})
  const [blogInfo, setBlogInfo] = useState({})
  const [allPost, setAllPost] = useState([])
  const [authorPost, setAuthorPost] = useState([])
  const [sideBar, setSideBar] = useState(false)
  const [showhMenu, setShowhMenu] = useState(false)
  const [token, setToken] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [isAuthor, setIsAuthor] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [verified, setVerified] = useState(false)
  const [showLog, setShowLog] = useState(false)

  const [content, setContent] = useState('')
  const router = useRouter()
  const logout = () => {
    setUserInfo(null)
    setLoggedIn(false)
    router.push('/logout')
  }

  return (
    <UserContext.Provider
      value={{
        userInfo,
        showhMenu,
        setShowhMenu,
        logout,
        setUserInfo,
        loggedIn,
        setLoggedIn,
        content,
        setContent,
        token,
        setToken,
        allPost,
        setAllPost,
        authorPost,
        setAuthorPost,
        isAuthor,
        setIsAuthor,
        verified,
        setVerified,
        registered,
        setRegistered,
        title,
        setTitle,
        photo,
        setPhoto,
        photosrc,
        setPhotoSrc,
        name,
        setName,
        link,
        setLink,
        meta,
        setMeta,
        date,
        setDate,
        files,
        setFiles,
        content,
        blogInfo,
        setBlogInfo,
        showLog,
        setShowLog,
        sideBar,
        setSideBar,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
export const useContextValue = () => {
  return useContext(UserContext)
}

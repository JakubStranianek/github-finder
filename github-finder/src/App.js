import './App.css';
import moon from "./assets/moon.png"
import sun from "./assets/sun.png"
import search from "./assets/search.png"
import months from "./months.json"

import pin from "./assets/light/pin.png"
import office from "./assets/light/office-building.png"
import twitter from "./assets/light/twitter.png"
import url from "./assets/light/url.png"

import pin2 from "./assets/dark/pin.png"
import office2 from "./assets/dark/office-building.png"
import twitter2 from "./assets/dark/twitter.png"
import url2 from "./assets/dark/url.png"

import { useState, useEffect } from "react"

function App(props) {
  const [mode, setMode] = useState("dark");
  const [modeImage, setModeImage] = useState(moon);
  const [pinImage, setPinImage] = useState(pin);
  const [urlImage, setUrlImage] = useState(url);
  const [twitterImage, setTwitterImage] = useState(twitter);
  const [officeImage, setOfficeImage] = useState(office);

  const [input, setInput] = useState("jakubStranianek");
  const [login, setLogin] = useState("");
  const [avatar_url, setAvatarUrl] = useState("");
  const [created_at, setCreated_at] = useState("");
  const [bio, setBio] = useState("");
  const [public_repos, setPublic_repos] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [html_url, setHtml_url] = useState("");
  const [twitter_username, setTwitter_username] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (mode === "light") {
      document.documentElement.classList.add("dark")
      setModeImage(sun); 
      setPinImage(pin2);
      setUrlImage(url2);
      setTwitterImage(twitter2);
      setOfficeImage(office2);
     
    } else {  
      document.documentElement.classList.remove("dark")
      setModeImage(moon); 
      setPinImage(pin);
      setUrlImage(url);
      setTwitterImage(twitter);
      setOfficeImage(office);
     
    }
  }, [mode])
  
  useEffect(() => {
    fetch(`https://api.github.com/users/${input}`)
    .then((response) => response.json())
    .then((data) => {
        setData(data)
    })
  }, [])

  const handleSearch = () => {
    fetch(`https://api.github.com/users/${input}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        setError(data.message)
      } else {
        setError("");
        setData(data)
      }
    })
  }

  const setData = ({login, avatar_url, created_at, bio, public_repos, followers, following, html_url, twitter_username, company, location}) => {
    setLogin(login);
    setAvatarUrl(avatar_url);
    setCreated_at(created_at);
    setDate(created_at.slice(8, 10) + " " + months.filter(index => index.id === created_at.slice(5, 7)).map(months => (
       months.short
    )) + " " + created_at.slice(0, 4));
    setBio(bio);
    setPublic_repos(public_repos);
    setFollowers(followers);
    setFollowing(following);
    setHtml_url(html_url);
    setTwitter_username(twitter_username);
    setCompany(company);
    setLocation(location);
  }

  const handleSwitchMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  }


  return (
    <div className="App w-full h-screen bg-myLightWhite dark:bg-myDarkModeBlack">
      <main className='w-10/12 mr-auto ml-auto lg:w-1/2 lg:pt-20'>
       <header className='pt-8 flex justify-between items-center'>
          <h1 className='text-3xl font-bold dark:text-myWhite'>devfinder</h1>

          <div className="flex">
            <span className='uppercase pr-4 dark:text-myWhite'>{mode}</span>
            <img src={modeImage} alt={modeImage} className="w-5 h-5 cursor-pointer" onClick={handleSwitchMode}/>
          </div>
       </header>

       <div className='mt-8'>
        <div className='bg-white h-[60px] flex items-center rounded-2xl pl-2 pr-2 shadow-xl dark:bg-myDarkModeBlue'>
            <img src={search} alt="search-icon" className='w-5 h-5'/>
            <input type={"text"} value={input} inputValue={input} onChange={(e) => {setInput(e.target.value)}} placeholder="Search GitHub username…" className="text-xs text-myDarkModeBlack outline-none w-full pl-2 dark:bg-myDarkModeBlue dark:text-myLightWhite"></input>
            <button className='w-28 h-10 rounded-xl text-white bg-myBlue font-bold' onClick={handleSearch}>Search</button>
        </div>
      </div>


    {error ? 
    error : 
      <div className='bg-myWhite rounded-xl mt-4 pb-8 dark:bg-myDarkModeBlue'>
          <section className='flex pt-8 pb-8 pl-6'>
            <img src={avatar_url} alt={"avatar" + login} className="w-[70px] rounded-full"></img>

            <div className='pl-6'>
              <h1 className='font-bold dark:text-myWhite'>{login}</h1>
              <a href={html_url} className="text-myBlue">{"@" + login}</a>
              <p className="text-mySilver dark:text-myWhite">{"Joined " + date}</p>            
            </div>

          </section>
            <div>
              {bio}
            </div>
            
            <div className='bg-myLightWhite rounded-xl flex justify-evenly ml-6 mr-6 pt-4 pb-4 text-[11px] dark:bg-myDarkModeBlack dark:text-myWhite'>
              <div className='flex flex-col items-center'>
                <p className='text-myRockBlue dark:text-myWhite'>Repos</p>
                <p className='text-base font-bold'>{public_repos}</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className='text-myRockBlue dark:text-myWhite'>Followers</p>
                <p className='text-base font-bold'>{followers}</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className='text-myRockBlue dark:text-myWhite'>Following</p>
                <p className='text-base font-bold'>{following}</p>
              </div>
            </div>

          <div className='mt-4 ml-6 mr-6 text-myRockBlue text-[13px] dark:text-myWhite'>
            <div className='flex items-center'><img src={pinImage} className="w-3 h-5 mr-6" alt="pinImage"></img>{location ? location : "Not Found"}</div>
            <div className='flex items-center mt-2 mb-2'><img src={urlImage} className="w-5 h-5 mr-4" alt="urlImage"></img><a href={html_url}>{html_url ? html_url : "Not Found"}</a></div>
            <div className='flex items-center mb-2'><img src={twitterImage} className="w-5 h-4 mr-4 " alt="twitterImage"></img>{twitter_username ? twitter_username : "Not Found"}</div>
            <div className='flex items-center'><img src={officeImage} className="w-5 h-5 mr-4" alt="officeImage"></img>{company ? company : "Not Found"}</div>
          </div>
        </div>
    }      
      </main>
    </div>
  );
}

export default App;

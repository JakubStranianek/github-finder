import './App.css';
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
      setPinImage(pin2);
      setUrlImage(url2);
      setTwitterImage(twitter2);
      setOfficeImage(office2);
     
    } else {  
      document.documentElement.classList.remove("dark") 
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
        setError("No results")
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
      <main className='w-10/12 mr-auto ml-auto xl:w-2/5 xl:pt-20'>
       <header className='pt-8 flex justify-between items-center'>
          <h1 className='text-3xl font-bold dark:text-myWhite'>devfinder</h1>

          <div className="flex group cursor-pointer" onClick={handleSwitchMode}>
            <span className='uppercase pr-4 text-mySilver dark:text-myWhite group-hover:text-myDarkModeBlack dark:group-hover:text-mySilver'>{mode}</span>

            {mode === "dark" ? 
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className='fill-mySilver group-hover:fill-myDarkModeBlack'>
                <path d="M19.5133 11.3967C19.3087 11.3453 19.1041 11.3966 18.9251 11.5251C18.2602 12.0901 17.4929 12.5523 16.649 12.8605C15.8562 13.1687 14.9866 13.3228 14.066 13.3228C11.9944 13.3228 10.1019 12.4753 8.74647 11.1142C7.39102 9.75303 6.54707 7.85258 6.54707 5.77237C6.54707 4.89919 6.70051 4.0517 6.95626 3.28125C7.23758 2.45944 7.64677 1.71467 8.18383 1.07263C8.414 0.790132 8.36285 0.379226 8.08153 0.148091C7.90251 0.0196826 7.69792 -0.0316807 7.49332 0.0196826C5.31949 0.61036 3.42698 1.92012 2.07153 3.66648C0.767234 5.38715 0 7.51872 0 9.83007C0 12.6294 1.12528 15.1719 2.96664 17.0209C4.808 18.87 7.3143 20 10.1275 20C12.4803 20 14.6542 19.1782 16.3932 17.8171C18.1579 16.4303 19.4366 14.4528 19.9737 12.1928C20.076 11.8332 19.8714 11.4737 19.5133 11.3967Z" />
              </svg>
            :
            <svg width="20" height="20" viewBox="0 0 20 20" className='fill-white group-hover:fill-mySilver'  xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5451 6.45502C12.6456 5.55555 11.3757 4.97354 10.0001 4.97354C8.62443 4.97354 7.35459 5.5291 6.45511 6.45502C5.55564 7.35449 4.97363 8.62433 4.97363 10C4.97363 11.3757 5.55564 12.6455 6.45511 13.545C7.35459 14.4444 8.62443 15.0265 10.0001 15.0265C11.3757 15.0265 12.6456 14.4709 13.5451 13.545C14.4445 12.6455 15.0265 11.3757 15.0265 10C15.0265 8.62433 14.471 7.35449 13.5451 6.45502Z"/>
            <path d="M10.0001 3.4127C10.3705 3.4127 10.6879 3.09524 10.6879 2.72487V0.687831C10.6879 0.31746 10.3705 0 10.0001 0C9.62972 0 9.31226 0.31746 9.31226 0.687831V2.72487C9.31226 3.09524 9.62972 3.4127 10.0001 3.4127Z"/>
            <path d="M15.6349 5.34392L17.09 3.88889C17.3545 3.62434 17.3545 3.20106 17.09 2.93651C16.8254 2.67196 16.4021 2.67196 16.1376 2.93651L14.6825 4.39154C14.418 4.65609 14.418 5.07937 14.6825 5.34392C14.9206 5.60847 15.3439 5.60847 15.6349 5.34392Z" />
            <path d="M19.3123 9.31216H17.2752C16.9049 9.31216 16.5874 9.62962 16.5874 9.99999C16.5874 10.3704 16.9049 10.6878 17.2752 10.6878H19.3123C19.6826 10.6878 20.0001 10.3704 20.0001 9.99999C20.0001 9.62962 19.6826 9.31216 19.3123 9.31216Z"/>
            <path d="M15.6086 14.6561C15.344 14.3915 14.9207 14.3915 14.6562 14.6561C14.3916 14.9206 14.3916 15.3439 14.6562 15.6085L16.1112 17.0635C16.3758 17.328 16.799 17.328 17.0636 17.0635C17.3281 16.7989 17.3281 16.3757 17.0636 16.1111L15.6086 14.6561Z" />
            <path d="M10.0001 16.5873C9.62972 16.5873 9.31226 16.9048 9.31226 17.2751V19.3122C9.31226 19.6825 9.62972 20 10.0001 20C10.3705 20 10.6879 19.6825 10.6879 19.3122V17.2751C10.6879 16.9048 10.3705 16.5873 10.0001 16.5873Z"/>
            <path d="M4.36511 14.6561L2.91008 16.1111C2.64553 16.3757 2.64553 16.7989 2.91008 17.0635C3.17463 17.328 3.59791 17.328 3.86246 17.0635L5.31749 15.6085C5.58204 15.3439 5.58204 14.9206 5.31749 14.6561C5.07939 14.3915 4.65611 14.3915 4.36511 14.6561Z" />
            <path d="M3.4127 9.99999C3.4127 9.62962 3.09524 9.31216 2.72487 9.31216H0.687831C0.31746 9.31216 0 9.62962 0 9.99999C0 10.3704 0.31746 10.6878 0.687831 10.6878H2.72487C3.09524 10.6878 3.4127 10.3704 3.4127 9.99999Z"/>
            <path d="M4.36511 5.34392C4.62966 5.60847 5.05294 5.60847 5.31749 5.34392C5.58204 5.07937 5.58204 4.65609 5.31749 4.39154L3.86246 2.93651C3.59791 2.67196 3.17463 2.67196 2.91008 2.93651C2.64553 3.20106 2.64553 3.62434 2.91008 3.88889L4.36511 5.34392Z"/>
            </svg>
            
            }
            

          </div>
       </header>

       <div className='mt-8'>
        <div className='bg-white h-[60px] flex items-center rounded-2xl pl-8 pr-[10px] shadow-xl dark:bg-myDarkModeBlue'>
            <img src={search} alt="search-icon" className='w-5 h-5'/>
            <input type={"text"} value={input} inputValue={input} onChange={(e) => {setInput(e.target.value)}} placeholder="Search GitHub username…" className="text-xs text-myDarkModeBlack outline-none w-full pl-2 dark:bg-myDarkModeBlue dark:text-myLightWhite hover:cursor-pointer"></input>
            {error ? <p className='text-red-600 text-xs pr-4'>{error}</p> : ""}
            <button className='w-28 h-10 rounded-xl text-white bg-myBlue font-bold hover:bg-opacity-80 hover:cursor-pointer' onClick={handleSearch}>Search</button>
        </div>
      </div>


    {error ? 
    "" : 
      <div className='bg-myWhite rounded-xl mt-4 pb-8 dark:bg-myDarkModeBlue'>
          <section className='flex pt-8 pb-8 pl-6 pr-6'>
            <img src={avatar_url} alt={"avatar" + login} className="w-[70px] rounded-full xl:w-[117px]"></img>

          <div className='xl:w-full xl:flex xl:flex-col xl:justify-around'>
            <div className='pl-6 xl:w-full xl:flex xl:justify-between xl:items-baseline'>
              <div>
                <h1 className='font-bold dark:text-myWhite xl:text-2xl'>{login}</h1>
                <a href={html_url} className="text-myBlue">{"@" + login}</a>
              </div>

              <p className="text-mySilver dark:text-myWhite text-xs xl:text-base">{"Joined " + date}</p>   
          </div>
              
                <div className='hidden text-myRockBlue pl-6 pr-6 xl:block'>
                {bio ? bio : "This profile has no bio"}
              </div>         
            </div>

            
          </section>

            <div className='text-myRockBlue pl-6 pr-6 xl:hidden'>
              {bio ? bio : "This profile has no bio"}
            </div>
            
            <div className='bg-myLightWhite rounded-xl flex justify-evenly mt-6 ml-6 mr-6 pt-4 pb-4 text-[11px] dark:bg-myDarkModeBlack dark:text-myWhite xl:ml-[167px] xl:mt-2'>
              <div className='flex flex-col items-center xl:items-start'>
                <p className='text-myRockBlue dark:text-myWhite'>Repos</p>
                <p className='text-base font-bold'>{public_repos}</p>
              </div>
              <div className='flex flex-col items-center xl:items-start'>
                <p className='text-myRockBlue dark:text-myWhite'>Followers</p>
                <p className='text-base font-bold'>{followers}</p>
              </div>
              <div className='flex flex-col items-center xl:items-start'>
                <p className='text-myRockBlue dark:text-myWhite'>Following</p>
                <p className='text-base font-bold'>{following}</p>
              </div>
            </div>

          <div className='mt-4 ml-6 mr-6 text-myRockBlue text-[13px] dark:text-myWhite xl:ml-[167px] xl:flex'>
            <div>            
              <div className='flex items-center'><img src={pinImage} className="w-3 h-5 mr-6" alt="pinImage"></img>{location ? location : "Not Found"}</div>
              <div className='flex items-center mt-2 mb-2'><img src={urlImage} className="w-5 h-5 mr-4" alt="urlImage"></img><a href={html_url}>{html_url ? "https://github.blog" : "Not Found"}</a></div>
            </div>
            <div className='xl:pl-16'>
              <div className='flex items-center mb-2'><img src={twitterImage} className="w-5 h-4 mr-4 " alt="twitterImage"></img>{twitter_username ? twitter_username : "Not Found"}</div>
              <div className='flex items-center'><img src={officeImage} className="w-5 h-5 mr-4" alt="officeImage"></img>{company ? company : "Not Found"}</div>
            </div>
          </div>
        </div>
    }      
      </main>
    </div>
  );
}

export default App;

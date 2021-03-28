import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {db} from '../../firebaseConfig'

export default function Search() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const users = []
    db.collection('profile').get()
      .then(snapshot => {
        snapshot.docs.forEach(user => {
          let currentID = user.id
          let appObj = {...user.data(), ['id']: currentID}
          users.push(appObj)
        })
        setProfiles(users)
      })
  }, [])

  function SearchNew() {
    return (
      <div className={"bg-white rounded-md p-8"}>
        <div
          className={"bg-gray-100 text-center text-4xl text-blue-600 font-bold py-8"}>
          <h1>Search Page</h1>
        </div>

        <div className={"bg-white rounded-md my-4"} position="relative"
             width="33%"
             border="3px solid blue">
          <div className={"col-span-6 sm:col-span-3 lg:col-span-2"}>
            <div>
              <label className={"block text-sm font-medium text-gray-700"}>Price
                Range</label>
            </div>
            <div>
              <input className={"rounded-md text-gray-500"} value="£ per month"
                     type="text"/>
            </div>
          </div>

          <div className={"col-span-6 sm:col-span-3 lg:col-span-2"}>
            <div>
              <label
                className={"block text-sm font-medium text-gray-700"}>Department</label>
            </div>
            <div>
              <input className={"rounded-md text-gray-500"}
                     value="e.g. Computing"
                     type="text"/>
            </div>
          </div>

          <div className={"col-span-6 sm:col-span-3 lg:col-span-2"}>
            <div>
              <label
                className={"block text-sm font-medium text-gray-700"}>Year</label>
            </div>
            <div>
              <input className={"rounded-md text-gray-500"} value="e.g. 2"
                     type="text"/>
            </div>
          </div>

          <div className={"col-span-6 sm:col-span-3 lg:col-span-2"}>
            <div>
              <label className={"block text-sm font-medium text-gray-700"}>Night
                Owl? </label>
            </div>
            <div>
              <input className={"rounded-md text-gray-500"} value="isNightOwl"
                     type="checkbox"/>
            </div>
          </div>

          <div className={"col-span-6 sm:col-span-3 lg:col-span-2"}>
            <div>
              <label className={"block text-sm font-medium text-gray-700"}>Morning
                Scrub? </label>
            </div>
            <div>
              <input className={"rounded-md text-gray-500"}
                     value="isMorningScrub"
                     type="checkbox"/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="heading">
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/profile"> Profile</Link></li>
          <li><Link to="/search"> Search</Link></li>
          <li><Link to="/feed"> Feed</Link></li>
        </ul>
      </div>

      <SearchNew/>

      <div className={"p-4"}>
        <h1 className={"text-4xl text-blue-600 text-center"}>Results</h1>
        <div className={"grid grid-flow-col auto-cols-max"}>
          {profiles.length === 0 ? (
            <div>
              Sorry, there were no matches found right now!
            </div>
          ) : <div>
            {
              profiles.map(u => {
                return (
                  <div
                    className={"bg-gradient-to-tr from-orange-200 to-orange-600 " +
                    "shadow-xl rounded-xl p-4 m-2 border-2 border-blue-600"}>
                    <h1
                      className={"text-2xl font-bold"}>{u.firstname}&ensp;{u.lastname}
                    </h1>
                    <h3 className={"text-xl"}>{u.description}</h3>
                    <br/>
                    <div className={"text-sm"}>
                      <h3>Contact me at: <span
                        className={"font-semibold"}>{u.email}</span></h3>
                      <h3>Department: <span
                        className={"font-semibold"}>{u.department}</span></h3>
                      <h3>Shortcode: <span
                        className={"font-semibold"}>{u.shortcode}</span></h3>
                      <h3>I'm in Year {u.year}!</h3>
                    </div>
                  </div>

                )
              })
            }
          </div>
          }

        </div>
      </div>
    </div>
  )
}



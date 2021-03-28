import {Link} from 'react-router-dom';
import {db} from '../../firebaseConfig'

export default function Search() {
  const GetAllData = async () => {
    const citiesRef = db.collection('profile');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
      return (
        <div className={"bg-white rounded-xl shadow-xl p-4 m-2"}>
          <h1 className={"text-2xl text-black font-semibold"}>{doc}</h1>
        </div>
      )
    });
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
      <div className={"mt-4 p-8"}>
        {/*{GetAllData()}*/}
      </div>
    </div>
  )
}

function SearchNew() {
  return (
    /*
     <div className={"bg-gray-100 "}>
     <div className={"text-center text-xl font-semibold py-8"}>
     <h1 className={"font-bold text-4xl text-blue-600"}>Profile</h1>
     <p>Fill out your profile so that you can connect with others!</p>
     </div>
     <div className={"bg-white rounded-xl shadow-xl mx-auto"}>
     </div>
     </div>
     <div className={"bg-gray-100 text-center text-4xl text-blue-600 font-bold py-8 rounded-l-md border border-r-0 border-gray-300 bg-gray-50"}>
     "col-span-6 sm:col-span-3 lg:col-span-2"
     */
    <div className={"bg-gray-100 rounded-md"}>
      <div
        className={"bg-gray-100 text-center text-4xl text-blue-600 font-bold py-8"}>
        <h1>Search Page</h1>
      </div>

      <div className={"bg-white rounded-md"} position="relative" width="33%"
           border="3px solid blue">
        <div className={"col-span-6 sm:col-span-3 lg:col-span-2"}>
          <div>
            <label className={"block text-sm font-medium text-gray-700"}>Price
              Range</label>
          </div>
          <div>
            <input className={"rounded-md text-gray-500"} value="£ per month"
                   type="text"></input>
          </div>
        </div>

        <div className={"col-span-6 sm:col-span-3 lg:col-span-2"}>
          <div>
            <label
              className={"block text-sm font-medium text-gray-700"}>Department</label>
          </div>
          <div>
            <input className={"rounded-md text-gray-500"} value="e.g. Computing"
                   type="text"></input>
          </div>
        </div>

        <div className={"col-span-6 sm:col-span-3 lg:col-span-2"}>
          <div>
            <label
              className={"block text-sm font-medium text-gray-700"}>Year</label>
          </div>
          <div>
            <input className={"rounded-md text-gray-500"} value="e.g. 2"
                   type="text"></input>
          </div>
        </div>

        <div className={"col-span-6 sm:col-span-3 lg:col-span-2"}>
          <div>
            <label className={"block text-sm font-medium text-gray-700"}>Night
              Owl? </label>
          </div>
          <div>
            <input className={"rounded-md text-gray-500"} value="isNightOwl"
                   type="checkbox"></input>
          </div>
        </div>

        <div className={"col-span-6 sm:col-span-3 lg:col-span-2"}>
          <div>
            <label className={"block text-sm font-medium text-gray-700"}>Morning
              Scrub? </label>
          </div>
          <div>
            <input className={"rounded-md text-gray-500"} value="isMorningScrub"
                   type="checkbox"></input>
          </div>
        </div>
      </div>

      <div left="50px" position="relative">
        <div className={"col-span-6 sm:col-span-3 lg:col-span-2"}>
          <div>
            <label className={"block text-sm font-medium text-gray-700"}>Morning
              Scrub? </label>
          </div>
          <div>
            <input className={"rounded-md text-gray-500"} value="isMorningScrub"
                   type="checkbox"></input>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
 <label for="Price Range">Price Range:</label>
 <input name="email" id="email" value=""></input>
 */

/*
 <label for="Price Range">Price Range:</label>
 <input name="email" id="email" value=""></input>
 */

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
      <div
        className={"bg-gray-100 text-center text-4xl text-blue-600 font-bold py-8"}>
        <h1>Search Page</h1>
      </div>
      <label>Price Range (£ per month): </label>
      <input placeholder="e.g. 100-400"></input>
      <label>Department: </label>
      <input placeholder="e.g. Computing"></input>
      <label>Year: </label>
      <input placeholder="e.g. 2"></input>
      <label>Night Owl</label>
      <input type="checkbox"></input>
      <label>Morning Scrub</label>
      <input type="checkbox"></input>
      <div className={"mt-4 p-8"}>
        {/*{GetAllData()}*/}
      </div>
    </div>
  )
}
/*
 <label for="Price Range">Price Range:</label>
 <input name="email" id="email" value=""></input>
 */

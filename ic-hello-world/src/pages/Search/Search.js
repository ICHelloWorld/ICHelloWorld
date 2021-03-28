export default function Search() {
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
         */
        <div>
            <div className={"bg-gray-100 text-center text-4xl text-blue-600 font-bold py-8"}>
                <h1>Search Page</h1>
            </div>
            <label>Price Range (£ per month): </label>
            <input placeholder="e.g. 100-400"></input>
            <label>Department: </label>
            <input placeholder="e.g. Computing"></input>
            <label>Year: </label>
            <input placeholder="e.g. 2"></input>
            <label>Night Owl</label>
            <input type = "checkbox"></input>
            <label>Morning Scrub</label>
            <input type = "checkbox"></input>
        </div>
    )
}
/*
    <label for="Price Range">Price Range:</label>
    <input name="email" id="email" value=""></input>
*/
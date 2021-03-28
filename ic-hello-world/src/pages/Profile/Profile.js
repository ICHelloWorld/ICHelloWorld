import {Link} from "react-router-dom";
import {app} from "../../firebaseConfig"

export default function ProfilePage() {

  const PageBreak = () => {
    return (
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"/>
        </div>
      </div>
    )
  }

  function handleProfileForm(event) {
    event.preventDefault();
    let {
      first_name, last_name, email_address, description, languages,
      pricerange, shortcode, year, department, howmanypeople,
    } = event.target.elements;
    console.log(event.target.elements)
    let data = {
      firstname: first_name.value || "",
      lastname: last_name.value || "",
      email: email_address.value || "",
      description: description.value || "",
      languages: languages.value || "",
      pricerange: pricerange.value || "",
      shortcode: shortcode.value || "",
      year: year.value || "",
      department: department.value || "",
      howmanypeople: howmanypeople.value || "",
    }
    console.log(data);
    const db = app.firestore();
    db.collection("profile").add(data)
      .then(() => {
        // Read result of the Cloud Function.
        alert("success")
      })
      .catch((error) => {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        // ...
        alert("error: " + message)
      })

  }

  const PersonalInfo = () => {
    return (
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3
                className="text-lg font-medium leading-6 text-blue-600">Profile
                Information</h3>
              <p className="mt-1 text-sm text-gray-600">
                Customize your profile so that you can be approached by similar
                people!
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleProfileForm}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      {/*First name*/}
                      <label htmlFor="first_name"
                             className="block text-sm font-medium text-gray-700"
                      >
                        First name<
                        /label>
                      <input type="text" name="first_name" id="first_name"
                             autoComplete="given-name"
                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500
                             block w-full shadow-sm sm:text-sm border-gray-300
                             rounded-md"
                             placeholder={"Bob"}/>
                    </div>
                    {/*Last name*/}
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last_name"
                             className="block text-sm font-medium text-gray-700"
                             placeholder={"Smith"}>Last
                        name</label>
                      <input type="text" name="last_name" id="last_name"
                             autoComplete="family-name"
                             placeholder={"Smith"}
                             className="mt-1 focus:ring-indigo-500
                             focus:border-indigo-500 block w-full shadow-sm
                             sm:text-sm border-gray-300 rounded-md"/>
                    </div>
                    {/*Email */}
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email_address"
                             className="block text-sm font-medium text-gray-700">Email
                        address</label>
                      <input type="text" name="email_address" id="email_address"
                             autoComplete="email"
                             className="mt-1 focus:ring-indigo-500
                             focus:border-indigo-500 block w-full shadow-sm
                             sm:text-sm border-gray-300 rounded-md"
                             placeholder={"bobsmith@gmail.com"}/>
                    </div>

                    {/* A little bit about yourself */}
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="description"
                             className="block text-sm font-medium text-gray-700">A
                        little bit about yourself!</label>
                      <textarea name="description"
                                id={"description"}
                                rows="3"
                                className="shadow-sm focus:ring-indigo-500
                                focus:border-indigo-500 mt-1 block w-full
                                sm:text-sm border-gray-300 rounded-md"
                                placeholder="Fill in something about yourself
                                and your interests/hobbies!"/>
                    </div>

                    {/* Languages */}
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="languages"
                             className="block text-sm font-medium text-gray-700">Languages</label>
                      <input type="text" name="languages" id="languages"
                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500
                             block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                             placeholder={"English, Japanese"}/>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="pricerange"
                             className="block text-sm font-medium text-gray-700">
                        Price Range</label>
                      <input type="text" name="street_address"
                             id="pricerange" autoComplete="pricerange"
                             className="mt-1 focus:ring-indigo-500
                             focus:border-indigo-500 block w-full shadow-sm
                             sm:text-sm border-gray-300 rounded-md"
                             placeholder={"100 - 200 GBP"}/>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="shortcode"
                             className="block text-sm font-medium text-gray-700">
                        Shortcode
                      </label>
                      <input type="text" name="shortcode" id="shortcode"
                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="department"
                             className="block text-sm font-medium text-gray-700">
                        Department
                      </label>
                      <input type="text" name="department" id="department"
                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="year"
                             className="block text-sm font-medium text-gray-700">
                        What year are you in?
                      </label>
                      <select type="text" name="year" id="year"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        <option value={"1"}>Undergraduate Year 1</option>
                        <option value={"2"}>Undergraduate Year 2</option>
                        <option value={"3"}>Undergraduate Year 3</option>
                        <option value={"4"}>Undergraduate Year 4</option>
                        <option value={"5"}>Masters Year 1</option>
                        <option value={"6"}>Masters Year 2</option>
                        <option value={"7"}>Postgraduate Student</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="howmanypeople"
                             className="block text-sm font-medium text-gray-700">
                        Looking for how many people?</label>
                      <select type="text" name="howmanypeople"
                              id="howmanypeople"
                              autoComplete="howmanypeople"
                              className="mt-1 focus:ring-indigo-500
                              focus:border-indigo-500 block w-full shadow-sm
                              sm:text-sm border-gray-300 rounded-md">
                        <option value={"0"}>Not Looking Yet!</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                        <option value={"6"}>6</option>
                      </select>

                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                          className="inline-flex justify-center py-2 px-4 border
                           border-transparent shadow-sm text-sm font-medium
                           rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                           focus:outline-none focus:ring-2 focus:ring-offset-2
                           focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={"bg-gray-100 px-8 py-8"}>
      <div className="heading">
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/profile"> Profile</Link></li>
          <li><Link to="/search"> Search</Link></li>
          <li><Link to="/feed"> Feed</Link></li>
        </ul>
      </div>
      <div className={"text-center text-xl font-semibold py-8"}>
        <h1 className={"font-bold text-4xl text-blue-600"}>Profile</h1>
        <p>Fill out your profile so that you can connect with others!</p>
      </div>
      <PageBreak/>
      <PersonalInfo/>
      <PageBreak/>
    </div>

  )
}
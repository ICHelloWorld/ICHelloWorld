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

  const ProfileInfo = () => {
    return (
      <div className={""}>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3
                className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company_website"
                             className="block text-sm font-medium text-gray-700">
                        Website
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                  <span
                    className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    http://
                  </span>
                        <input type="text" name="company_website"
                               id="company_website"
                               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                               placeholder="www.example.com"/>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about"
                           className="block text-sm font-medium text-gray-700">
                      About
                    </label>
                    <div className="mt-1">
                      <textarea id="about" name="about" rows="3"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="you@example.com"/>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                <span
                  className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg className="h-full w-full text-gray-300"
                       fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </span>
                      <button type="button"
                              className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Change
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div
                      className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400"
                             stroke="currentColor" fill="none"
                             viewBox="0 0 48 48" aria-hidden="true">
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload"
                                 className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload"
                                   type="file" className="sr-only"/>
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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

  function handleProfileForm() {

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
                      <textarea name={"description"}
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
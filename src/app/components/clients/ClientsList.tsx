export default () => {
  return (
    <>
      <div className="flex flex-col gap-y-1 px-12">
        <div className="flex gap-[90px] overflow-hidden pl-5 pb-2 text-sm text-gray-500">
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">Nome</div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">Email</div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">
            Telefone
          </div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">
            Endereço
          </div>
          <div className="flex-4 flex w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6"></div>
        </div>
        <div className="flex flex-wrap justify-between gap-y-2 overflow-hidden rounded-xl bg-white py-6 pl-4 shadow-sm">
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Nome 1
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Email 1
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Telefone 1
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Endereço 1
          </div>
          <div className="-mx-1 flex w-1/6 place-content-center overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            ...
          </div>
        </div>
        {/* <div className="flex flex-wrap justify-between gap-y-2 overflow-hidden rounded-xl bg-white py-6 pl-4 shadow-sm">
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Nome 2
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Email 2
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Telefone 2
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Endereço 2
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            ...
          </div>
        </div> */}
        {/* <div className="grid grid-cols-5">
          <div className="col-span-12">
            <div className="overflow-auto lg:overflow-visible ">
              <table className="table border-separate space-y-6 text-sm text-gray-400">
                <thead className="bg-gray-800 text-gray-500">
                  <tr>
                    <th className="p-3">Brand</th>
                    <th className="p-3 text-left">Category</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-800">
                    <td className="p-3">
                      <div className="align-items-center flex">
                        <img
                          className="h-12 w-12 rounded-full  object-cover"
                          src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                          alt="unsplash image"
                        />
                        <div className="ml-3">
                          <div className="">Appple</div>
                          <div className="text-gray-500">mail@rgmail.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Technology</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="rounded-md bg-green-400 px-2 text-gray-50">
                        available
                      </span>
                    </td>
                    <td className="p-3 ">
                      <a
                        href="#"
                        className="mr-2 text-gray-400 hover:text-gray-100"
                      >
                        <i className="material-icons-outlined text-base">
                          visibility
                        </i>
                      </a>
                      <a
                        href="#"
                        className="mx-2 text-gray-400  hover:text-gray-100"
                      >
                        <i className="material-icons-outlined text-base">
                          edit
                        </i>
                      </a>
                      <a
                        href="#"
                        className="ml-2 text-gray-400  hover:text-gray-100"
                      >
                        <i className="material-icons-round text-base">
                          delete_outline
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="p-3">
                      <div className="align-items-center flex">
                        <img
                          className="h-12 w-12 rounded-full   object-cover"
                          src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                          alt="unsplash image"
                        />{' '}
                        <div className="ml-3">
                          <div className="">Realme</div>
                          <div className="text-gray-500">mail@rgmail.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Technology</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="rounded-md bg-red-400 px-2 text-gray-50">
                        no stock
                      </span>
                    </td>
                    <td className="p-3">
                      <a
                        href="#"
                        className="mr-2 text-gray-400  hover:text-gray-100"
                      >
                        <i className="material-icons-outlined text-base">
                          visibility
                        </i>
                      </a>
                      <a
                        href="#"
                        className="mx-2 text-gray-400 hover:text-gray-100"
                      >
                        <i className="material-icons-outlined text-base">
                          edit
                        </i>
                      </a>
                      <a
                        href="#"
                        className="ml-2 text-gray-400 hover:text-gray-100"
                      >
                        <i className="material-icons-round text-base">
                          delete_outline
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="p-3">
                      <div className="align-items-center flex">
                        <img
                          className="h-12 w-12 rounded-full   object-cover"
                          src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80"
                          alt="unsplash image"
                        />
                        <div className="ml-3">
                          <div className="">Samsung</div>
                          <div className="text-gray-500">mail@rgmail.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Technology</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="rounded-md bg-yellow-400  px-2 text-gray-50">
                        start sale
                      </span>
                    </td>
                    <td className="p-3">
                      <a
                        href="#"
                        className="mr-2 text-gray-400 hover:text-gray-100"
                      >
                        <i className="material-icons-outlined text-base">
                          visibility
                        </i>
                      </a>
                      <a
                        href="#"
                        className="mx-2 text-gray-400 hover:text-gray-100"
                      >
                        <i className="material-icons-outlined text-base">
                          edit
                        </i>
                      </a>
                      <a
                        href="#"
                        className="ml-2 text-gray-400 hover:text-gray-100"
                      >
                        <i className="material-icons-round text-base">
                          delete_outline
                        </i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

function CaptainDetails() {
    return (
        <div>
            <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <img className="h-15 w-15 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XcY3kldqRD2y9c44DDoi8XNmJqFx_aFD0Q&s" alt="" />
            <h4 className="text-lg font-medium">Rahul Singh</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">$295.2</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>


        <div className="flex justify-center gap-4 items-start p-3 bg-gray-100 rounded-xl mt-6">

          <div className="text-center">
            <i className="ri-timer-2-line text-3xl mb-2 font-extralight"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>


          <div className="text-center">
            <i className="ri-speed-up-line text-3xl mb-2 font-extralight"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
            </div>


          <div className="text-center">
            <i className="ri-booklet-line text-3xl mb-2 font-extralight"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
            </div>


        </div>
        </div>
    )
}

export default CaptainDetails

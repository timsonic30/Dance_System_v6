export default function DanceInstructorProfile({data}) {
  console.log(data)
  return (
    <div className="bg-zinc-700 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {" "}
          {/* Reduced gap here */}
          {/* Instructor Profile Section */}
          <div className="space-y-4">
            {" "}
            {/* Reduced space-y value */}
            <div className="relative">
              <img
                src="https://cdn.midjourney.com/4330b563-6a27-4da4-bd1f-c8d84ce90570/0_2.png"
                alt="Lok Man Au"
                width={500}
                height={600}
                className="w-full max-w-md"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h2 className="text-xl uppercase tracking-wider font-light mb-1">
                  Director
                </h2>
                <h1 className="text-5xl uppercase font-bold tracking-wide">
                  LOK Man
                  <br />
                  Wong
                </h1>
              </div>
            </div>
          </div>
          {/* Bio and Schedule Section */}
          <div className="space-y-8">
            {" "}
            {/* Reduced space-y value */}
            {/* Bio Section */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Information</h2>{" "}
              {/* Reduced margin-bottom */}
              <p className="text-sm md:text-base leading-relaxed">
                Lok is a graduate of The Chinese University of Hong Kong and a
                Hip Hop enthusiast. He has been trained by various
                well-respected Hip Hop masters in New York including Brian
                &apos;Footwork&apos; Green, Jazzy J a.k.a. Soulfire, Spex,
                Stretch and Mr. Wiggles. At just age 25, Lok is an experienced
                instructor at several secondary schools and universities in Hong
                Kong and is the choreographer of numerous shows and performances
                for their respective dance societies.
              </p>
            </section>
            {/* Schedule Section */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Schedule</h2>{" "}
              {/* Reduced margin-bottom */}
              <h3 className="text-2xl uppercase font-bold mb-4">
                {" "}
                {/* Reduced margin-bottom */}
                LOK MAN CLASSES SCHEDULE
              </h3>
              <div className="space-y-4">
                {/* Class 1 */}
                <div className="flex items-center bg-zinc-800 rounded-sm overflow-hidden hover:opacity-50 transition-opacity duration-100">
                  <div className="w-24 h-24 shrink-0">
                    <img
                      src="https://cdn.midjourney.com/4330b563-6a27-4da4-bd1f-c8d84ce90570/0_2.png"
                      alt="Lok"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between p-4">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold">13</div>
                        <div className="text-sm">3月</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold">
                          OPEN STYLE - LOK
                        </div>
                        <div className="text-sm text-gray-300">
                          7:00pm - 8:30pm • Studio S
                        </div>
                      </div>
                    </div>
                    <button variant="outline" className="whitespace-nowrap">
                      Book This Class
                    </button>
                  </div>
                </div>

                {/* Class 2 - Grayed out */}
                <div className="flex items-center bg-zinc-800 rounded-sm overflow-hidden hover:opacity-50 transition-opacity duration-100">
                  <div className="w-24 h-24 shrink-0">
                    <img
                      src="https://cdn.midjourney.com/4330b563-6a27-4da4-bd1f-c8d84ce90570/0_2.png"
                      alt="Lok"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between p-4">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold">18</div>
                        <div className="text-sm">4月</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold">
                          OPEN STYLE - LOK
                        </div>
                        <div className="text-sm text-gray-300">
                          7:00pm - 8:30pm • Studio S
                        </div>
                      </div>
                    </div>
                    <button variant="outline" className="whitespace-nowrap">
                      Book This Class
                    </button>
                  </div>
                </div>

                {/* Class 3 */}
                <div className="flex items-center bg-zinc-800 rounded-sm overflow-hidden hover:opacity-50 transition-opacity duration-100">
                  <div className="w-24 h-24 shrink-0">
                    <img
                      src="https://cdn.midjourney.com/4330b563-6a27-4da4-bd1f-c8d84ce90570/0_2.png"
                      alt="Lok"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between p-4">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold">17</div>
                        <div className="text-sm">3月</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold">
                          OPEN STYLE - LOK
                        </div>
                        <div className="text-sm text-gray-300">
                          7:00pm - 8:30pm • Studio S
                        </div>
                      </div>
                    </div>
                    <button variant="outline" className="whitespace-nowrap">
                      Book This Class
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  variant="secondary"
                  className="bg-zinc-600 hover:bg-zinc-500"
                >
                  Next week
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

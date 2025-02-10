export default function About() {
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                suscipit lobortis nisi, consequat semper lacus tempor sit amet.
                Sed elit orci, pretium sed velit sit amet, venenatis pretium
                magna. Nam pharetra dictum urna, non vestibulum mauris vulputate
                ut. Sed eros nisi, dapibus vitae consequat non, mollis et
                tortor. Maecenas bibendum nunc eu cursus maximus. Fusce
                ultricies ornare neque, vel varius libero euismod eget. Nulla
                sodales blandit lacus, id maximus quam interdum in. Morbi eu
                velit ut mi semper sollicitudin finibus aliquam nisi.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Ut accumsan faucibus urna vel
                placerat. Donec euismod dui enim, tincidunt suscipit mauris
                lacinia vel. Fusce eget risus eget leo euismod porta. Aliquam
                dapibus sapien vitae eros pulvinar, in auctor ligula porta. Nam
                ac porttitor risus, nec blandit nulla. Nam erat erat, venenatis
                quis scelerisque nec, rhoncus id mi. Suspendisse molestie nibh
                purus, quis semper tellus pulvinar eget.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQH4zbxpjOdJ0g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697771981952?e=1744848000&v=beta&t=0Rjv_JhC54A6brkFhSTS1Qj6r18qe9mscdelGzivohU"
            alt="Sebastian"
          />
        </div>
      </div>
    </div>
  );
}

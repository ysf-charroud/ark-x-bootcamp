import Image from "next/image";
import HeroSections from "./_components/HeroSections";
import Navbar from "./_components/Navbar";
import Products from "./_components/Products";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="px-6">
        <HeroSections />
        <Products />
      </main>

      <footer className="pt-4 ">
        {/* top line  */}
        <div className="h-4 bg-primary"></div>
        {/* footer content */}
        <div className="py-4 px-4 bg-foreground">
          <div className="mb-8 flex justify-between gap-x-20 grow">
            {/* lef side */}
            <div className="space-y-4 max-w-1/2">
              <svg
                width="60"
                height="32"
                viewBox="0 0 60 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.191 20.7393C22.191 26.7165 17.3455 31.562 11.3683 31.562C5.39112 31.562 0.545654 26.7165 0.545654 20.7393C0.545654 14.7621 5.39112 9.91664 11.3683 9.91664C17.3455 9.91664 22.191 14.7621 22.191 20.7393ZM7.66264 20.7393C7.66264 22.7859 9.32172 24.445 11.3683 24.445C13.4149 24.445 15.074 22.7859 15.074 20.7393C15.074 18.6927 13.4149 17.0336 11.3683 17.0336C9.32172 17.0336 7.66264 18.6927 7.66264 20.7393Z"
                  fill="white"
                />
                <path
                  d="M15.4735 9.91664H22.9374V31.562H15.4735V9.91664Z"
                  fill="white"
                />
                <path
                  d="M26.6693 4.69191L34.1332 0.959961V31.562H26.6693V4.69191Z"
                  fill="white"
                />
                <path
                  d="M53.8773 5.42295C54.1744 5.13725 54.6469 5.14654 54.9326 5.4437L59.071 9.74813C59.3567 10.0453 59.3474 10.5178 59.0503 10.8035L42.4667 26.7473C42.1696 27.033 41.6971 27.0237 41.4114 26.7266L37.273 22.4221C36.9873 22.125 36.9966 21.6525 37.2937 21.3668L53.8773 5.42295Z"
                  fill="white"
                />
                <path
                  d="M58.9383 21.5913C59.2294 21.8831 59.2289 22.3557 58.9371 22.6469L54.7103 26.8645C54.4185 27.1557 53.9459 27.1552 53.6548 26.8634L37.4056 10.5789C37.1144 10.2871 37.1149 9.81456 37.4067 9.52339L41.6335 5.30574C41.9253 5.01458 42.3979 5.01509 42.6891 5.30689L58.9383 21.5913Z"
                  fill="white"
                />
              </svg>
              <p className="text-white font-light ">
                ALX is a platform where travelers can discover and book unique,
                comfortable, and affordable lodging options worldwide. From cozy
                city apartments and tranquil countryside retreats to exotic
                beachside villas, ALX connects you with the perfect place to
                stay for any trip.
              </p>
            </div>

            {/* right side */}

            <div className="flex grow justify-between gap-y-10 flex-wrap">
              <div className="text-white space-y-8">
                <h4 className="font-semibold text-2xl">Explore</h4>
                <ul className=" space-y-4 text-sm">
                  <li>
                    <Link href={"#"}>Apartments in Dubai</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Hotels in New York</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Villa in Spain</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Mansion in Indonesia</Link>
                  </li>
                </ul>
              </div>
              <div className="text-white space-y-8">
                <h4 className="font-semibold text-2xl">Explore</h4>
                <ul className=" space-y-4 text-sm">
                  <li>
                    <Link href={"#"}>Apartments in Dubai</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Hotels in New York</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Villa in Spain</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Mansion in Indonesia</Link>
                  </li>
                </ul>
              </div>
              <div className="text-white space-y-8">
                <h4 className="font-semibold text-2xl">Explore</h4>
                <ul className=" space-y-4 text-sm">
                  <li>
                    <Link href={"#"}>Apartments in Dubai</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Hotels in New York</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Villa in Spain</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Mansion in Indonesia</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t-2 pt-2 border-gray-600 text-white flex justify-between">
            <p>
              Some hotel requires you to cancel more than 24 hours before
              check-in. Details
              <Link href="#" className="text-primary"> here</Link>
            </p>
            <ul className="flex gap-x-4 text-sm">
              <li>Terms of Service</li>
              <li>Policy service</li>
              <li>Cookies Policy</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default page;

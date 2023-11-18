import Logo1 from "@/assets/contact-us_1.svg";
import Header from "@/components/Header";
import { FaPhone } from "react-icons/fa6";

export default function ContactUsPage() {
  return (
    <div className="ContactUsPage h-screen bg-primaryColor">
      <Header needProfile />
      <div className="flex flex-row items-center justify-center">
        <div className="mt-20 flex w-main-content flex-row items-center justify-between rounded-lg bg-white p-5">
          <div className="ContactUsImage flex w-1/2 flex-col items-center justify-evenly">
            <h1 className="text-1xl mb-5 font-poppins font-bold">
              <FaPhone className="mr-5 inline-block" />
              Contact Us
            </h1>

            <p className="mb-5 font-poppins text-xl font-bold">
              Apakah anda mengalami masaalah? <br />
            </p>

            <img src={Logo1} alt="Logo" />

            <p className="mb-5 mt-5 font-poppins text-xl font-bold">
              Silahkan kontak kami
            </p>

            <p className="mb-5 font-poppins text-xl font-bold">
              No Hp : 08123456789
            </p>

            <p className="mb-5 font-poppins text-xl font-bold">
              Email :
              <a
                href="mailto:NotesI@gmail.com"
                className="text-blue-500 hover:underline"
              >
                {" "}
                NotesI@gmail.com
              </a>
            </p>
          </div>
          <div className="ContactUsForm ml-5 mt-10 flex w-1/2 flex-col justify-start rounded-lg bg-primaryColor p-10">
            <h1 className="text-1xl mb-5 font-poppins font-bold">
              Masukkan Data Anda
            </h1>
            <form className="flex flex-col">
              <label className="mb-2 font-poppins text-xl font-bold">
                Nama
              </label>
              <input className="mb-5 rounded-lg border-2  p-2" type="text" />
              <label className="mb-2 font-poppins text-xl font-bold">
                Email
              </label>
              <input className="mb-5 rounded-lg border-2  p-2" type="text" />
              <label className="mb-2 font-poppins text-xl font-bold">
                Pesan
              </label>
              <textarea
                className="mb-5 rounded-lg border-2  p-2"
                name=""
                id=""
                cols={30}
                rows={10}
              ></textarea>
              <button className="w-1/6 rounded-lg bg-white p-2 font-bold text-black">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

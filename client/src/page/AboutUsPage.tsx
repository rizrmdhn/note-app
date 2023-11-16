import Header from "@/components/Header";
import Logo1 from "@/assets/about-us_1.png";

export default function AboutUsPage() {
  return (
    <div className="bg-primaryColor AboutUsPage h-screen">
      <Header />
      <div className="flex flex-row items-center justify-center">
        <div className="w-main-content mt-20 flex flex-row items-center justify-between rounded-lg bg-white p-5">
          <div className="AboutUsPageImage w-1/2">
            <img src={Logo1} alt="Logo" />
          </div>
          <div className="AboutUsPageText ml-5 flex w-1/2 flex-col justify-center">
            <div className="AboutUsPageTextTitle">
              <h1 className="font-poppins mb-10 text-5xl font-bold">
                Apa itu Notes?
              </h1>
              <p className="font-poppins text-justify text-xl font-bold">
                Notes adalah Aplikasi perangkat lunak yang dirancang untuk
                membantu pengguna dalam mencatat dan mengorganisasi informasi
                penting. Aplikasi ini dapat digunakan untuk berbagai keperluan,
                mulai dari mencatat ide-ide kreatif, menyimpan catatan kuliah
                atau pertemuan, mengatur daftar tugas, hingga mengingatkan
                pengguna tentang jadwal dan acara penting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

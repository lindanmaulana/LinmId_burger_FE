import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { CLEAR_PRIVACY, handleAgreement, handlePrivacy, SET_AGREEMENT } from "../../../redux/slices/privacyPolicy";

const PageAuthPrivacyPolicy = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector((state: RootState) => state.privacyPolicy);

  const handleConfirmAgreement = () => {
    dispatch(handleAgreement({type: SET_AGREEMENT}))
    dispatch(handlePrivacy({type: CLEAR_PRIVACY}))
  }
  return (
    <div
      className={`${
        selector.active ? "block bg-black/60" : "hidden"
      } fixed top-0 w-full h-full right-0 flex items-center justify-center`}
    >
      <div className="bg-white w-[34%] rounded-lg h-[70%] ">
        <div className="w-full h-[84%] overflow-hidden">
          <h2 className="p-5 text-lg border-b">
            Kebijakan Privacy dan Ketentuan Pengguna Linmid Burger
          </h2>
          <div className="h-[60%] overflow-y-auto p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-open-sans-bold">Definisi</h3>
              <p className="text-xs text-black/70">
                <span className="leading-normal font-open-sans-bold text-primary">
                  linmidburger.id
                </span>{" "}
                ("kami" atau "website") menghargai privasi Anda dan berkomitmen
                untuk melindungi data pribadi yang Anda berikan kepada kami.
                Kebijakan Privasi ini menjelaskan jenis informasi yang kami
                kumpulkan, bagaimana kami menggunakannya, dan langkah-langkah
                yang kami ambil untuk melindungi privasi Anda. Dengan mengakses
                atau menggunakan website linmidburger.id ("Layanan"), Anda
                dianggap telah menyetujui pengumpulan dan penggunaan data sesuai
                dengan kebijakan ini.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-open-sans-bold">
                Kebijakan Privasi
              </h3>
              <div>
                <h4 className="text-sm font-open-sans-semibold">
                  1. Informasi yang Kami Kumpulkan
                </h4>
                <p className="text-xs text-black/70">
                  Kami mengumpulkan informasi pribadi yang Anda berikan kepada
                  kami saat menggunakan Layanan kami. Jenis informasi yang kami
                  kumpulkan meliputi:
                </p>

                <ul className="flex flex-col gap-3 list-disc ps-4">
                  <li className="text-xs text-black/70">
                    <span className="text-black font-open-sans-semibold">
                      Informasi Akun:
                    </span>{" "}
                    Nama, alamat email, nomor telepon, dan informasi lain yang
                    Anda berikan saat membuat akun di LinmidBurger.id.
                  </li>
                  <li className="text-xs text-black/70">
                    <span className="text-black font-open-sans-semibold">
                      Informasi Pembayaran:
                    </span>{" "}
                    Informasi yang terkait dengan transaksi Anda, termasuk
                    rincian metode pembayaran seperti e-wallet, kartu
                    kredit/debit, atau transfer bank. Kami menggunakan layanan
                    pembayaran pihak ketiga untuk memproses pembayaran Anda dan
                    tidak menyimpan informasi kartu kredit atau data sensitif
                    pembayaran lainnya.
                  </li>
                  <li className="text-xs text-black/70">
                    <span className="text-black font-open-sans-semibold">
                      Informasi Pengguna:
                    </span>{" "}
                    Data tentang bagaimana Anda mengakses dan menggunakan
                    platform kami, termasuk:
                    <ul className="py-2 list-disc ps-4">
                      <li className="text-xs text-black/70">
                        Waktu yang Anda habiskan di platform.
                      </li>
                      <li className="text-xs text-black/70">
                        Menu atau produk yang Anda lihat atau pesan.
                      </li>
                      <li className="text-xs text-black/70">
                        Aktivitas pencarian, seperti burger atau paket promo
                        yang Anda cari.
                      </li>
                      <li className="text-xs text-black/70">
                        Interaksi dengan fitur-fitur tertentu di website,
                        seperti favorit, ulasan, atau layanan chat.
                      </li>
                    </ul>
                  </li>
                  <li className="text-xs text-black/70">
                    <span className="text-black font-open-sans-semibold">
                      Informasi Lainnya:
                    </span>{" "}
                    Informasi yang Anda berikan secara sukarela, seperti: Ulasan
                    atau penilaian terhadap produk kami. Pertanyaan, keluhan,
                    atau komentar yang Anda kirimkan kepada tim kami. Data
                    tambahan yang mungkin Anda tambahkan ke profil Anda, seperti
                    preferensi makanan atau alergi.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-open-sans-semibold">
                  2. Perlindungan Informasi Pribadi
                </h4>
                <p className="text-xs text-black/70">
                  Kami berkomitmen untuk melindungi informasi pribadi Anda
                  dengan langkah-langkah keamanan yang sesuai, termasuk
                  menggunakan teknologi enkripsi dan prosedur pengamanan untuk
                  mencegah akses yang tidak sah, pengungkapan, perubahan, atau
                  perusakan data pribadi Anda.
                </p>
                <p className="text-xs text-black/70">
                  {" "}
                  Meskipun kami berusaha sebaik mungkin untuk melindungi
                  informasi Anda, tidak ada metode transmisi data atau
                  penyimpanan data yang sepenuhnya aman. Oleh karena itu, kami
                  tidak dapat menjamin keamanan mutlak atas informasi yang Anda
                  kirimkan kepada kami.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-open-sans-semibold">
                  3. Pembagian Informasi Pribadi
                </h4>
                <p className="text-xs text-black/70">
                  Kami tidak akan menjual informasi pribadi Anda kepada pihak
                  ketiga. Namun, kami dapat membagikan informasi Anda dalam
                  situasi berikut:
                </p>
                <ul className="flex flex-col gap-3 list-disc ps-4">
                  <li className="text-xs text-black/70">
                    <span className="text-black font-open-sans-semibold">
                      Dengan Penyedia Layanan Pihak Ketiga:
                    </span>{" "}
                    Kami dapat membagikan data Anda dengan penyedia layanan yang
                    membantu kami dalam menjalankan bisnis kami, seperti
                    penyedia pembayaran, penyedia hosting, dan alat analitik.
                    Penyedia ini hanya memiliki akses ke informasi yang
                    diperlukan untuk menjalankan fungsinya dan wajib menjaga
                    kerahasiaan informasi tersebut.
                  </li>
                  <li className="text-xs text-black/70">
                    <span className="text-black font-open-sans-semibold">
                      Untuk Kepatuhan Hukum:
                    </span>{" "}
                    Kami dapat membagikan informasi Anda jika diperlukan oleh
                    hukum, seperti dalam respons terhadap permintaan dari
                    otoritas yang berwenang, atau untuk melindungi hak,
                    properti, atau keselamatan wpucourse.id atau orang lain.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-open-sans-semibold">
                  4. Hak Pengguna
                </h4>
                <p className="text-xs text-black/70">
                  Anda memiliki hak untuk mengelola dan memperbarui informasi
                  pribadi Anda. Berikut adalah hak-hak Anda:
                </p>

                <ul className="flex flex-col gap-3 list-disc ps-4">
                  <li className="text-xs text-black/70">
                    <span className="text-black font-open-sans-semibold">
                      Akses:
                    </span>{" "}
                    Anda dapat meminta salinan data pribadi yang kami miliki
                    tentang Anda.
                  </li>
                  <li className="text-xs text-black/70">
                    <span className="text-black font-open-sans-semibold">
                      Perbaikan:
                    </span>{" "}
                    Anda dapat memperbarui atau memperbaiki informasi yang tidak
                    akurat atau tidak lengkap.
                  </li>
                  <li className="text-xs text-black/70">
                    <span className="text-black font-open-sans-semibold">
                      Penghapusan:
                    </span>{" "}
                    Anda dapat meminta kami untuk menghapus informasi pribadi
                    Anda, dengan catatan bahwa beberapa informasi mungkin
                    diperlukan untuk tujuan pemenuhan transaksi atau kepatuhan
                    hukum.
                  </li>
                  <li className="text-xs text-black/70">
                    <span className="text-black font-open-sans-semibold">
                      Penarikan Persetujuan:
                    </span>{" "}
                    Jika Anda telah memberikan persetujuan untuk pengumpulan dan
                    penggunaan data pribadi Anda, Anda dapat menarik persetujuan
                    tersebut kapan saja, dengan konsekuensi bahwa beberapa
                    layanan mungkin tidak dapat diakses lagi.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-open-sans-semibold">
                  5. Penggunaan Cookie
                </h4>
                <p className="text-xs text-black/70">
                  Kami menggunakan cookie dan teknologi serupa untuk
                  mengumpulkan informasi terkait penggunaan website dan
                  meningkatkan pengalaman pengguna Anda. Cookie adalah file
                  kecil yang ditempatkan di perangkat Anda yang membantu kami
                  mengidentifikasi preferensi Anda dan mempersonalisasi konten
                  yang kami tawarkan. Anda dapat mengatur browser Anda untuk
                  menolak cookie atau memberi tahu Anda ketika cookie
                  dikirimkan, tetapi ini dapat mempengaruhi fungsionalitas
                  website kami.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-open-sans-semibold">
                  6. Perubahan pada Kebijakan Privasi
                </h4>
                <p className="text-xs text-black/70">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke
                  waktu. Setiap perubahan akan diberlakukan segera setelah
                  kebijakan privasi yang diperbarui diposting di halaman ini.
                  Kami akan memberi tahu Anda tentang perubahan yang signifikan
                  dengan memposting pemberitahuan di website atau melalui email
                  jika diperlukan. Kami mendorong Anda untuk memeriksa kebijakan
                  ini secara berkala untuk tetap mengetahui bagaimana kami
                  melindungi informasi pribadi Anda.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-open-sans-semibold">
                  7. Hubungi Kami
                </h4>
                <p className="text-xs text-black/70">
                  Jika Anda memiliki pertanyaan atau kekhawatiran mengenai
                  Kebijakan Privasi ini atau bagaimana kami menangani data
                  pribadi Anda, Anda dapat menghubungi kami melalui:
                </p>
                <p className="text-xs font-open-sans-bold">
                  Whatsapp: +62 853-2270-1120
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end p-5">
          <button onClick={handleConfirmAgreement} className="p-2 text-xs text-white rounded-lg bg-primary">
            Saya Memahami dan Menyetujuinya
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageAuthPrivacyPolicy;

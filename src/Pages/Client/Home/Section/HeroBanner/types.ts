export interface bannerList {
  id: number | string;
  title: string;
  description: string;
}

export const dataBannerList: bannerList[] = [
  {
    id: 1,
    title: "Restoran Makanan Cepat Saji",
    description:
      "Nikmati makanan cepat saji lezat dan bergizi, siap disajikan dalam sekejap. Pilihan menu kami yang menggugah selera pasti membuat Anda ketagihan!",
  },
  {
    id: 2,
    title: "Makan Lebih Cepat, Lebih Nikmat",
    description:
      "Tidak perlu menunggu lama untuk menikmati makanan lezat. Kami siap menyajikan hidangan favorit Anda dalam waktu singkat, tanpa mengorbankan rasa.",
  },
  {
    id: 3,
    title: "Pilihan Menu untuk Semua Selera",
    description:
      "Apakah Anda penggemar burger, pizza, atau salad? Kami memiliki berbagai pilihan menu yang pas untuk setiap selera. Temukan makanan favorit Anda hari ini!",
  },
];

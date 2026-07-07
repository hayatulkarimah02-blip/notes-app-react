const getInitialData = () => [
  {
    id: 1,
    title: "Belajar HTML Dasar",
    body: "HTML digunakan untuk menyusun struktur halaman web. Elemen yang sering digunakan antara lain heading, paragraph, image, link, dan form.",
    createdAt: "2025-01-01T08:00:00.000Z",
    archived: false,
  },
  {
    id: 2,
    title: "CSS Flexbox",
    body: "Flexbox memudahkan pengaturan layout secara horizontal maupun vertikal menggunakan display: flex, justify-content, dan align-items.",
    createdAt: "2025-01-02T08:00:00.000Z",
    archived: false,
  },
  {
    id: 3,
    title: "JavaScript Array",
    body: "Method yang sering digunakan adalah map(), filter(), find(), reduce(), dan forEach() untuk mengolah data.",
    createdAt: "2025-01-03T08:00:00.000Z",
    archived: false,
  },
  {
    id: 4,
    title: "DOM Manipulation",
    body: "DOM memungkinkan JavaScript mengakses dan mengubah elemen HTML menggunakan querySelector(), addEventListener(), dan classList.",
    createdAt: "2025-01-04T08:00:00.000Z",
    archived: false,
  },
  {
    id: 5,
    title: "React Component",
    body: "Component merupakan bagian UI yang dapat digunakan kembali sehingga kode menjadi lebih terstruktur dan mudah dirawat.",
    createdAt: "2025-01-05T08:00:00.000Z",
    archived: true,
  },
  {
    id: 6,
    title: "React State",
    body: "State menyimpan data yang dapat berubah dan akan memicu render ulang ketika nilainya diperbarui.",
    createdAt: "2025-01-06T08:00:00.000Z",
    archived: true,
  },
  {
    id: 7,
    title: "Git Dasar",
    body: "Perintah penting Git meliputi git init, git add, git commit, git push, dan git pull untuk mengelola versi proyek.",
    createdAt: "2025-01-07T08:00:00.000Z",
    archived: true,
  },
  {
    id: 8,
    title: "Responsive Design",
    body: "Gunakan media query, Flexbox, dan Grid agar tampilan website tetap nyaman di desktop maupun perangkat mobile.",
    createdAt: "2025-01-08T08:00:00.000Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };

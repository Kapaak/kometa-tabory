export type PhotoProps = {
  source: string;
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
  alt: string;
};

export const photos: PhotoProps[] = [
  {
    source: "/gallery/brno plavani.jpg",
    colStart: 1,
    colEnd: 3,
    rowStart: 1,
    rowEnd: 1,
    alt: "Děti na bazéně při rozcvičce.",
  },
  {
    source: "/gallery/brno primestsky tabor.jpg",
    colStart: 3,
    colEnd: 4,
    rowStart: 1,
    rowEnd: 1,
    alt: "Stříkání vodní pistolí.",
  },
  {
    source: "/gallery/co s sebou na tabor.jpg",
    colStart: 4,
    colEnd: 5,
    rowStart: 1,
    rowEnd: 1,
    alt: "Výlet v přírodě se skupinkou dětí.",
  },
  {
    source: "/gallery/detsky tabor.jpg",
    colStart: 5,
    colEnd: 7,
    rowStart: 1,
    rowEnd: 1,
    alt: "Plavkyně ponořená pod vodou.",
  },
  {
    source: "/gallery/primestsky tabor kometa brno.jpg",
    colStart: 1,
    colEnd: 2,
    rowStart: 2,
    rowEnd: 2,
    alt: "Usmívající se děti před objektivem.",
  },
  {
    source: "/gallery/primestsky tabor brno.jpg",
    colStart: 2,
    colEnd: 3,
    rowStart: 2,
    rowEnd: 2,
    alt: "Imitace pyramidy za pomoci rukou.",
  },
  {
    source: "/gallery/detsky tabor od 5 let.jpg",
    colStart: 3,
    colEnd: 5,
    rowStart: 2,
    rowEnd: 2,
    alt: "Vodní hadice šplíchající po okolních dětech",
  },

  {
    source: "/gallery/primestsky tabor plavání brno.jpg",
    colStart: 5,
    colEnd: 6,
    rowStart: 2,
    rowEnd: 2,
    alt: "Holka v póze před fotografem.",
  },
  {
    source: "/gallery/letni tabor pro deti od 4 let.jpg",
    colStart: 6,
    colEnd: 7,
    rowStart: 2,
    rowEnd: 2,
    alt: "Lidi připavující se na zápas ve volejbale.",
  },
];

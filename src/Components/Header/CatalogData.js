import LaptopPC from "../Images/laptop-desktop.webp";
import PCParts from "../Images/pc-parts.png";
import SmartphonesAndTab from "../Images/smartphones-and-tablets.png";
import Apple from "../Images/apple.png";
import Monitor from "../Images/monitor.png";
import TV from "../Images/tv.png";
import Projectors from "../Images/projectors.png";
import Headphones from "../Images/headphones.png";
import Mediaplayers from "../Images/mediaplayers.png";
import Peripherals from "../Images/Peripherals.webp";
import EBooks from "../Images/ebooks.png";
import { AiOutlineLaptop } from "react-icons/ai";
import { ReactComponent as GPUSVG } from "../Images/video-card-svgrepo-com.svg";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineApple, AiOutlineBook } from "react-icons/ai";
import { BsTv, BsSpeaker, BsMouse3, BsProjector } from "react-icons/bs";
import { DiHtml5Multimedia } from "react-icons/di";
import { PiMonitor } from "react-icons/pi";
const CatalogData = [
  {
    title: "Ноутбуки і комп'ютери",
    icon: <AiOutlineLaptop />,
    links: [
      { to: "/mozok/productpage/pcs", label: "Комп'ютери (ПК)" },
      { to: "/mozok/productpage/laptops", label: "Ноутбуки" },
      { to: "/mozok/productpage/apple_laptops", label: "Ноутбуки Apple" },
    ],
    productImage: LaptopPC,
  },
  {
    title: "Комплектуючі для ПК",
    icon: <GPUSVG />,
    links: [
      { to: "/mozok/productpage/cpus", label: "Центральні процесори (CPU)" },
      { to: "/mozok/productpage/gpus", label: "Графічні процесори (GPU)" },
      { to: "/mozok/productpage/gpus", label: "Графічні процесори (GPU)" },
      { to: "/mozok/productpage/motherboards", label: "Материнські плати" },
      {
        to: "/mozok/productpage/cpu_fans",
        label: "Вентилятори для охолодження ЦП",
      },
      {
        to: "/mozok/productpage/liquidcoolingsystems",
        label: "Cистеми рідинного охолодження",
      },
      { to: "/mozok/productpage/pccases", label: "Корпуси для ПК" },
      {
        to: "/mozok/productpage/pcfans",
        label: "Корпусні вентилятори комп'ютера",
      },
      { to: "/mozok/productpage/powersupplies", label: "Джерела живлення" },
      { to: "/mozok/productpage/rams", label: "Оперативна пам'ять" },
      { to: "/mozok/productpage/ssds", label: "Твердотілі накопичувачі" },
      { to: "/mozok/productpage/thermopaste", label: "Термопаста" },
    ],
    productImage: PCParts,
  },
  {
    title: "Смартфони та планшети",
    icon: <IoIosPhonePortrait />,
    links: [
      { to: "/mozok/productpage/apple_phones", label: "Смартфони Apple" },
      { to: "/mozok/productpage/phones", label: "Телефони" },
      { to: "/mozok/productpage/tablets", label: "Планшети" },
    ],
    productImage: SmartphonesAndTab,
  },
  {
    title: "Техніка Apple",
    icon: <AiOutlineApple />,
    links: [
      { to: "/mozok/productpage/apple_phones", label: "Смартфони Apple" },
      { to: "/mozok/productpage/apple_headphones", label: "Навушники Apple" },
      { to: "/mozok/productpage/apple_keyboards", label: "Клавіатури Apple" },
      {
        to: "/mozok/productpage/apple_trackpads",
        label: "Трекпади Apple",
      },
      {
        to: "/mozok/productpage/apple_mouse",
        label: "Миші Apple",
      },
      { to: "/mozok/productpage/apple_laptops", label: "Ноутбуки Apple" },

      { to: "/mozok/productpage/apple_tablets", label: "Планшети Apple" },
    ],
    productImage: Apple,
  },
  {
    title: "Монітори та аксесуари",
    icon: <PiMonitor />,
    links: [
      { to: "/mozok/productpage/monitors", label: "Монітори" },
      {
        to: "/mozok/productpage/brackets",
        label: "Кріплення для моніторів (кронштейни)",
      },
      {
        to: "/mozok/productpage/monitorstands",
        label: "Підставки для моніторів",
      },
    ],
    productImage: Monitor,
  },
  {
    title: "Телевізори",
    icon: <BsTv />,
    links: [
      { to: "/mozok/productpage/tvs", label: "Телевізори" },
      {
        to: "/mozok/productpage/tvbrackets",
        label: "Кріплення для телевізорів (кронштейни)",
      },
      {
        to: "/mozok/productpage/tvtuners",
        label: "Тюнери для телевізора",
      },
      {
        to: "/mozok/productpage/universalremotecontrol",
        label: "Універсальні пульти",
      },
      {
        to: "/mozok/productpage/monitorstands",
        label: "Підставки для моніторів",
      },
      {
        to: "/mozok/productpage/multimediacabels",
        label: "Мультимедійні кабелі",
      },
    ],
    productImage: TV,
  },
  {
    title: "Проектори",
    icon: <BsProjector />,
    links: [
      { to: "/mozok/productpage/projectors", label: "Проектори" },
      {
        to: "/mozok/productpage/projectorbrackets",
        label: "Кріплення для проекторів (кронштейни)",
      },
      {
        to: "/mozok/productpage/projectorscreens",
        label: "Екрани для проектора",
      },
      {
        to: "/mozok/productpage/universalremotecontrol",
        label: "Універсальні пульти",
      },
      {
        to: "/mozok/productpage/multimediacabels",
        label: "Мультимедійні кабелі",
      },
    ],
    productImage: Projectors,
  },
  {
    title: "Аудіо обладнання",
    icon: <BsSpeaker />,
    links: [
      {
        to: "/mozok/productpage/acoustic_system",
        label: "Акустичні системи",
      },
      {
        to: "/mozok/productpage/headphones",
        label: "Навушники",
      },
      {
        to: "/mozok/productpage/microphones",
        label: "Мікрофони",
      },
      {
        to: "/mozok/productpage/multimediacabels",
        label: "Мультимедійні кабелі",
      },
    ],
    productImage: Headphones,
  },
  {
    title: "Мультимедіа",
    icon: <DiHtml5Multimedia />,
    links: [
      {
        to: "/mozok/productpage/mediaplayers",
        label: "Медіаплеєри",
      },
      {
        to: "/mozok/productpage/multimediacabels",
        label: "Мультимедіа кабелі",
      },
    ],
    productImage: Mediaplayers,
  },
  {
    title: "Периферія для ПК",
    icon: <BsMouse3 />,
    links: [
      {
        to: "/mozok/productpage/mousess",
        label: "Миші",
      },
      {
        to: "/mozok/productpage/mousecarpetss",
        label: "Коврики для мишок",
      },
      {
        to: "/mozok/productpage/gamemanipulators",
        label: "Ігрові маніпулятори",
      },
    ],
    productImage: Peripherals,
  },
  {
    title: "Електронні книги",
    icon: <AiOutlineBook />,
    links: [
      {
        to: "/mozok/productpage/ebooks",
        label: "Електронні книги",
      },
      {
        to: "/mozok/productpage/ebookscases",
        label: "Чохли для електронних книг",
      },
    ],
    productImage: EBooks,
  },
];

export default CatalogData;

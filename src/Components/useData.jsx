import { useState, useEffect } from "react";
import axios from "axios";

const MongoDBDataFetcher = (name) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(
      `https://eu-west-2.aws.data.mongodb-api.com/app/mozok-store-yrvzc/endpoint/${name}`
    );
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [name]);

  return data;
};
export default MongoDBDataFetcher;
// Acoustic system - /acoustic_system -
// Headphones - /headphones -
// Microphones - /microphones -

// Apple Headphones - /apple_headphones -
// Apple Keyboards - /apple_keyboards -
// Apple Trackpads - /apple_trackpads -
// Apple Mouse - /apple_mouse -
// Apple Laptops - /apple_laptops -
// Apple Phones - /apple_phones -
// Apple Tablets - /apple_tablets -

// Brackets - /brackets -
// Monitors - /monitors -
// Monitor Stands - /monitorstands -

// E-books cases - /ebookscases -
// E-books - /ebooks -

// Motherboards - /motherboards -
// CPU fans - /cpu_fans -
// CPUs - /cpus -
// GPUs - /gpus -
// HDDs - /hdds -
// Liquid Cooling Systems - /liquidcoolingsystems -
// PC Cases - /pccases -
// PC Fans - /pcfans -
// Power Supplies - /powersupplies -
// RAMs - /rams -
// SSDs - /ssds -
// Thermopaste - /thermopaste

// Game Manipulators - /gamemanipulators

// Graphic Tablets - /graphic_tablets
// Graphic Tablet Pens - /graphictabletpens
// PC Glasses  - /pcglasses

// Interactive Boards - /interactiveboards
// Keyboards - /keyboards
// Keaboards and Mouses - /keaboardsandmouses
// LCD Panels - /lcdpanels

// Mediaplayers - /mediaplayerss -
// Multimedia Cabels - /multimediacabelss -

// Mouses - /mousess
// Mouse Carpets - /mousecarpetss

// Laptops - /laptops -

// PCs - /pcs -

// Projector Brackets - /projectorbrackets -
// Projectors - /projectors -
// Projector Screens - /projectorscreens -

// Phones - /phones -
// Tablets - /tablets -

// TVs - /tvs -
// TVBrackets - /tvbrackets -
// TVTuners - /tvtuners -
// Universal Remote Control - /universalremotecontrol -

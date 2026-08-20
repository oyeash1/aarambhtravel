import { useState } from "react";
import {
  BASE_PRICE_SLEEPER,
  ORIGINAL_PRICE,
  AC_TRAIN_UPGRADE_COST,
  AC_ROOM_UPGRADE_COST,
} from "../constants/tourData";

export default function useBookingCalculator() {
  const [packageType, setPackageType] = useState("couple");
  const [tourists, setTourists] = useState(2);
  const [acTrain, setAcTrain] = useState(false);

  const handlePackageTypeChange = (type) => {
    setPackageType(type);
    if (type === "couple") {
      setTourists(2);
    }
  };

  const getPerPersonCost = () => {
    let cost = packageType === "couple" ? BASE_PRICE_SLEEPER : ORIGINAL_PRICE;
    if (acTrain) cost += AC_TRAIN_UPGRADE_COST;
    return cost;
  };

  const getOriginalPerPersonCost = () => {
    let cost = ORIGINAL_PRICE;
    if (acTrain) cost += AC_TRAIN_UPGRADE_COST;
    return cost;
  };

  const perPersonCost = getPerPersonCost();
  const totalCost = perPersonCost * tourists;
  const totalOriginal = getOriginalPerPersonCost() * tourists;
  const savings = totalOriginal - totalCost;

  const incrementTourists = () => {
    if (packageType !== "couple") {
      setTourists((t) => t + 1);
    }
  };
  const decrementTourists = () => {
    if (packageType !== "couple") {
      setTourists((t) => Math.max(1, t - 1));
    }
  };

  // Generates custom WhatsApp message URL
  const getWhatsAppLink = (options = {}) => {
    const { isHeroForm = false, date = "", count = "" } = options;
    const num = isHeroForm ? (count || "2") : tourists;
    const trainText = isHeroForm
      ? "Sleeper Class"
      : acTrain
        ? "AC Train Coach"
        : "Sleeper Class";
    const roomText = "Standard Room (Included)";
    const priceText = isHeroForm
      ? "₹14,800 per person"
      : `Total: ₹${totalCost.toLocaleString("en-IN")}/-`;
    const dateText = date ? ` for date: ${date}` : "";

    const packageText = packageType === "couple" ? "Couple Tour" : "Standard Tour";

    const message = `🚩 *Arambh Travel - AYODHYA TRIP BOOKING* 🚩\n\nI want to book the Ayodhya ${packageText}${dateText}.\n\n*Details:*\n• Package Type: ${packageType === "couple" ? "Couple Package" : "Standard Package"}\n• Number of Tourists: ${num}\n• Train Class: ${trainText}\n• Room Accommodation: ${roomText}\n• Pricing: ${priceText}\n\nPlease confirm availability and next steps!`;
    return `https://wa.me/918369927351?text=${encodeURIComponent(message)}`;
  };

  return {
    packageType,
    handlePackageTypeChange,
    tourists,
    setTourists,
    acTrain,
    setAcTrain,
    perPersonCost,
    totalCost,
    totalOriginal,
    savings,
    incrementTourists,
    decrementTourists,
    getWhatsAppLink,
  };
}

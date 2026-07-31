import { useState } from "react";
import {
  BASE_PRICE_SLEEPER,
  ORIGINAL_PRICE,
  AC_TRAIN_UPGRADE_COST,
  AC_ROOM_UPGRADE_COST,
} from "../constants/tourData";

export default function useBookingCalculator() {
  const [tourists, setTourists] = useState(2);
  const [acTrain, setAcTrain] = useState(false);
  const [acRoom, setAcRoom] = useState(false);

  const getPerPersonCost = () => {
    let cost = BASE_PRICE_SLEEPER;
    if (acTrain) cost += AC_TRAIN_UPGRADE_COST;
    if (acRoom) cost += AC_ROOM_UPGRADE_COST;
    return cost;
  };

  const getOriginalPerPersonCost = () => {
    let cost = ORIGINAL_PRICE;
    if (acTrain) cost += AC_TRAIN_UPGRADE_COST;
    if (acRoom) cost += AC_ROOM_UPGRADE_COST;
    return cost;
  };

  const perPersonCost = getPerPersonCost();
  const totalCost = perPersonCost * tourists;
  const totalOriginal = getOriginalPerPersonCost() * tourists;
  const savings = totalOriginal - totalCost;

  const incrementTourists = () => setTourists((t) => t + 1);
  const decrementTourists = () => setTourists((t) => Math.max(1, t - 1));

  // Generates custom WhatsApp message URL
  const getWhatsAppLink = (options = {}) => {
    const { isHeroForm = false, date = "", count = "" } = options;
    const num = isHeroForm ? (count || "2") : tourists;
    const trainText = isHeroForm
      ? "Sleeper Class"
      : acTrain
        ? "AC Train Coach"
        : "Sleeper Class";
    const roomText = isHeroForm
      ? "Standard Room"
      : acRoom
        ? "AC Guest Room"
        : "Non-AC Guest Room";
    const priceText = isHeroForm
      ? "₹14,499 per person"
      : `Total: ₹${totalCost.toLocaleString("en-IN")}/-`;
    const dateText = date ? ` for date: ${date}` : "";

    const message = `🚩 *Aarambh Travel - AYODHYA TRIP BOOKING* 🚩\n\nI want to book the Ayodhya Monsoon Tour${dateText}.\n\n*Details:*\n• Number of Tourists: ${num}\n• Train Class: ${trainText}\n• Room Accommodation: ${roomText}\n• Pricing: ${priceText}\n\nPlease confirm availability and next steps!`;
    return `https://wa.me/916307443201?text=${encodeURIComponent(message)}`;
  };

  return {
    tourists,
    setTourists,
    acTrain,
    setAcTrain,
    acRoom,
    setAcRoom,
    perPersonCost,
    totalCost,
    totalOriginal,
    savings,
    incrementTourists,
    decrementTourists,
    getWhatsAppLink,
  };
}

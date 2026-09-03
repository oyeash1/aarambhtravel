import { useState } from "react";
import { PACKAGES } from "../constants/tourData";

export default function useBookingCalculator(initialPackageId = "kashi-ayodhya") {
  const [selectedPackageId, setSelectedPackageId] = useState(initialPackageId);
  const [packageType, setPackageType] = useState("couple"); // "couple" or "normal"
  const [tourists, setTourists] = useState(2);
  const [acTrain, setAcTrain] = useState(false);

  const activePackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[0];

  const handlePackageSelection = (pkgId) => {
    setSelectedPackageId(pkgId);
  };

  const handlePackageTypeChange = (type) => {
    setPackageType(type);
    if (type === "couple") {
      setTourists(2);
    }
  };

  const getPerPersonCost = () => {
    let cost = packageType === "couple" ? activePackage.basePrice : activePackage.originalPrice;
    if (acTrain) cost += activePackage.acUpgradeCost;
    return cost;
  };

  const getOriginalPerPersonCost = () => {
    let cost = activePackage.originalPrice;
    if (acTrain) cost += activePackage.acUpgradeCost;
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
      ? `₹${activePackage.basePrice.toLocaleString("en-IN")} per person`
      : `Total: ₹${totalCost.toLocaleString("en-IN")}/-`;
    const tourDate = date || activePackage.departureDate;
    const dateText = tourDate ? ` for date: ${tourDate}` : "";

    const packageTypeLabel = packageType === "couple" ? "Couple Package" : "Standard Package";

    const message = `🚩 *Arambh Travel - ${activePackage.whatsappMessageTitle}* 🚩\n\nI want to book the *${activePackage.title}* (${packageTypeLabel})${dateText}.\n\n*Tour Route:* ${activePackage.route}\n*Details:*\n• Package Type: ${packageTypeLabel}\n• Number of Tourists: ${num}\n• Train Class: ${trainText}\n• Room Accommodation: ${roomText}\n• Pricing: ${priceText}\n\nPlease confirm availability and next steps!`;
    return `https://wa.me/918369927351?text=${encodeURIComponent(message)}`;
  };

  return {
    selectedPackageId,
    setSelectedPackageId: handlePackageSelection,
    activePackage,
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

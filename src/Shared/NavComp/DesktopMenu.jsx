import NavLinkItem from "./NavLinkItem";
import { useTranslation } from "react-i18next";

export default function DesktopMenu() {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:flex gap-8 font-semibold text-sm">
      <NavLinkItem to="/hospitals" label={t("hospitals")} />
      <NavLinkItem to="/labs" label={t("labs")} />
      <NavLinkItem to="/ultrasound" label={t("ultrasound")} />
      <NavLinkItem to="/xray" label={t("xray")} />
      <NavLinkItem to="/howitsworks" label={t("howItWorks")} />
      <NavLinkItem to="/support" label={t("support")} />
    </div>
  );
}

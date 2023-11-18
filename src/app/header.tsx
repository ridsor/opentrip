import DekstopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto ">
        <MobileHeader />
        <DekstopHeader />
      </div>
    </header>
  );
}

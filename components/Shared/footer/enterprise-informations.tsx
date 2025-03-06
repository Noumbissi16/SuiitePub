import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const EnterPriseInformation = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Phone width={30} height={30} />
        <span>+237 696 696 696</span>
      </div>
      <div className="flex gap-2">
        <Mail width={20} height={30} />
        <span>7Mk4j@example.com</span>
      </div>
      <div className="flex gap-2">
        <MapPin width={90} />
        <span>
          Signtaper Technologies FZCO, DTEC, Office G060-A,Technohub 1 Building,
          Dubai Silicon Oasis, U.A.E
          <br />
          <br />
          Direct7 Telecom Solutions,Mikro Grafeio,Vallathol Junction,
          Seaport-Airport Rd,Cochin,India 682021
        </span>
      </div>
    </div>
  );
};

export default EnterPriseInformation;

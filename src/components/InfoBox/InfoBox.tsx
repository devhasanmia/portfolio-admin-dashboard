import { ReactNode } from "react";

type TInfoBoxProps = {
  classes?: string;
  title: string;
  shortDec: string;
  icon: ReactNode;
  shortMsg?: string;
};

const InfoBox = ({
  classes,
  title,
  shortDec,
  icon,
  shortMsg,
}: TInfoBoxProps) => {
  return (
    <div
      className={`p-6 ${classes} text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2 text-5xl font-extrabold">{shortDec}</p>
        </div>
        <span className="text-5xl opacity-50">{icon}</span>
      </div>
      <p className="mt-4 text-sm opacity-75">{shortMsg}</p>
    </div>
  );
};

export default InfoBox;

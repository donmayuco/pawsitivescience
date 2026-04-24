import { Image as ImageIcon } from "lucide-react";

type Props = {
  label?: string;
  small?: string;
  large?: boolean;
};

export default function PhotoPlaceholder({ label, small, large }: Props) {
  return (
    <div className={`ps-photo-placeholder ${large ? "ps-photo-placeholder--large" : ""}`}>
      <div className="ps-photo-placeholder__inner">
        <ImageIcon />
        <span>{label ?? "Editorial photograph"}</span>
        {small && <small>{small}</small>}
      </div>
    </div>
  );
}

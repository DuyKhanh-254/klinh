import { Heart } from "@phosphor-icons/react";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p>
          <strong>{profile.fullName}</strong>
          <span>MSSV {profile.studentId}</span>
        </p>
        <p className="footer-note">
          Ghi lại hành trình học tập bằng sự tò mò <Heart weight="fill" aria-hidden="true" />
        </p>
      </div>
    </footer>
  );
}

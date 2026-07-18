import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  IdentificationCard,
  Student,
  Target,
} from "@phosphor-icons/react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { assignments } from "../data/assignments";
import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import { Sticker, StickerField, type StickerKind } from "../components/Sticker";

const milestoneIcons: StickerKind[] = ["cherry", "book", "flower", "cloud", "star", "heart"];

export function HomePage() {
  return (
    <main>
      <section className="hero section" id="gioi-thieu" aria-labelledby="hero-title">
        <StickerField variant="hero" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio học tập CNS &amp; AI</p>
            <h1 id="hero-title">
              Nguyễn Ngọc<br />
              <span>Khánh Linh</span>
            </h1>
            <p className="hero-intro">Sinh viên Sư phạm tiếng Hàn, khám phá công nghệ số bằng sự tò mò và trách nhiệm.</p>
            <div className="hero-actions">
              <Link className="button primary" to="/assignments">
                Xem bài tập <ArrowRight weight="bold" />
              </Link>
              <a className="button secondary" href="#hanh-trinh">
                Khám phá hành trình <ArrowDown weight="bold" />
              </a>
            </div>
          </div>

          <div className="hero-collage" aria-label="Ảnh chân dung Khánh Linh">
            <div className="hero-paper paper-back" aria-hidden="true" />
            <figure className="hero-photo">
              <img src={profile.heroImage} alt={profile.heroImageAlt} fetchPriority="high" />
            </figure>
            <blockquote className="quote-note">“{profile.quote}”</blockquote>
            <span className="tape tape-top" aria-hidden="true" />
            <Sticker kind="flower" size="lg" floating className="hero-sticker-one" />
            <Sticker kind="sparkle" size="sm" floating className="hero-sticker-two" />
            <Sticker kind="cherry" size="md" className="hero-sticker-three" />
          </div>
        </div>
        <div className="cloud-divider" aria-hidden="true" />
      </section>

      <section className="summary-section section" id="tom-tat" aria-labelledby="summary-title">
        <StickerField variant="home-summary" />
        <div className="shell">
          <Reveal className="section-heading summary-heading">
            <Sticker kind="smile" size="md" />
            <h2 id="summary-title">Một trang hồ sơ,<br />nhiều mảnh ghép nhỏ xinh</h2>
          </Reveal>

          <div className="profile-scrapbook">
            <Reveal className="identity-sheet paper-panel" amount={0.15} direction="left">
              <span className="paperclip" aria-hidden="true"><Sticker kind="clip" size="sm" /></span>
              <div className="monogram">
                <img src={profile.heroImage} alt={profile.heroImageAlt} loading="lazy" />
              </div>
              <div>
                <p className="hand-label">Thông tin sinh viên</p>
                <h3>{profile.fullName}</h3>
                <dl className="identity-list">
                  <div><dt><IdentificationCard /></dt><dd>MSSV {profile.studentId}</dd></div>
                  <div><dt><BookOpen /></dt><dd>{profile.major}</dd></div>
                  <div><dt><Student /></dt><dd>{profile.faculty}</dd></div>
                </dl>
              </div>
            </Reveal>

            <Reveal className="university-note" delay={0.08} amount={0.2} direction="right">
              <span className="tape tape-small" aria-hidden="true" />
              <p className="hand-label">Nơi mình học</p>
              <strong>{profile.university}</strong>
              <p>{profile.courseCode}</p>
              <p>{profile.courseName}</p>
            </Reveal>

            <Reveal className="goal-note" delay={0.12} amount={0.2} direction="right">
              <Target weight="duotone" aria-hidden="true" />
              <p className="hand-label">Điều mình hướng tới</p>
              <p>{profile.learningGoal}</p>
            </Reveal>

            <Reveal className="interest-strip" delay={0.16} amount={0.2} direction="left">
              <p className="hand-label">Mình quan tâm</p>
              <div className="interest-list">
                {profile.interests.map((interest, index) => (
                  <span key={interest} style={{ "--tilt": `${index % 2 === 0 ? -2 : 2}deg` } as CSSProperties}>{interest}</span>
                ))}
              </div>
            </Reveal>

            <Reveal className="assignment-ticket" delay={0.2} amount={0.2} direction="right">
              <span className="ticket-number">06</span>
              <div>
                <strong>Bài thực hành</strong>
                <p>Từ quản lý tệp đến sử dụng AI có trách nhiệm.</p>
              </div>
              <Link to="/assignments" aria-label="Mở danh sách sáu bài tập"><ArrowRight weight="bold" /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="journey-section section" id="hanh-trinh" aria-labelledby="journey-title">
        <StickerField variant="journey" />
        <div className="shell">
          <Reveal className="section-heading journey-heading">
            <h2 id="journey-title">Con đường sáu dấu mốc</h2>
            <p>Từng bài tập nối tiếp nhau, từ kỹ năng nền tảng đến cách học cùng AI một cách tỉnh táo.</p>
          </Reveal>

          <div className="journey-map">
            <div className="route-line" aria-hidden="true" />
            <div className="journey-start">
              <Sticker kind="pencil" size="md" />
              <span>Bắt đầu với kỹ năng số cơ bản</span>
            </div>
            {assignments.map((assignment, index) => (
              <Reveal
                key={assignment.id}
                className={`milestone milestone-${index + 1}`}
                delay={index * 0.04}
                amount={0.25}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <span className="milestone-marker"><Sticker kind={milestoneIcons[index]} size="md" /></span>
                <span className="milestone-number">Bài {assignment.number}</span>
                <h3>{assignment.title}</h3>
                <p>{assignment.skills[0]}</p>
              </Reveal>
            ))}
            <Reveal className="journey-finish" amount={0.4}>
              <Sticker kind="graduate" size="lg" floating />
              <div>
                <span>Điểm đến</span>
                <strong>Chủ động, sáng tạo, có trách nhiệm</strong>
              </div>
              <Link className="button primary" to="/assignments">Mở album bài tập <ArrowRight weight="bold" /></Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

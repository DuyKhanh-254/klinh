import {
  ArrowRight,
  Brain,
  ChatsCircle,
  CheckCircle,
  MagnifyingGlass,
  Palette,
  ShieldCheck,
  UsersThree,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Sticker, StickerField } from "../components/Sticker";
import { profile } from "../data/profile";

const skills = [
  { icon: MagnifyingGlass, title: "Tìm kiếm học thuật", note: "Biết chọn từ khóa, so sánh và đánh giá độ tin cậy của nguồn." },
  { icon: Brain, title: "Làm việc cùng AI", note: "Viết prompt có bối cảnh, mục tiêu và ràng buộc rõ ràng." },
  { icon: ShieldCheck, title: "AI có trách nhiệm", note: "Kiểm chứng đầu ra, minh bạch cách dùng và giữ tư duy độc lập." },
  { icon: UsersThree, title: "Hợp tác trực tuyến", note: "Phân công, cập nhật tiến độ và phối hợp trên nhiều công cụ." },
  { icon: Palette, title: "Sáng tạo nội dung số", note: "Kết hợp văn bản, hình ảnh và thiết kế thành một sản phẩm hoàn chỉnh." },
  { icon: ChatsCircle, title: "Trình bày rõ ràng", note: "Tổ chức báo cáo theo cấu trúc, dẫn chứng và kết luận dễ theo dõi." },
];

export function SummaryPage() {
  return (
    <main className="summary-page">
      <section className="skills-section section" aria-labelledby="skills-title">
        <StickerField variant="skills" />
        <div className="shell">
          <Reveal className="summary-hero">
            <div>
              <p className="eyebrow">Nhìn lại hành trình</p>
              <h1 id="skills-title">Khu vườn kỹ năng đã nở</h1>
              <p>Không có phần trăm giả định. Mỗi kỹ năng dưới đây đều được rút ra từ sản phẩm và quá trình thực hiện sáu bài tập.</p>
            </div>
            <Sticker kind="flower" size="lg" floating />
          </Reveal>

          <div className="skill-garden">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Reveal key={skill.title} className={`skill-flower skill-flower-${index + 1}`} delay={index * 0.04} amount={0.2} direction={index % 2 === 0 ? "left" : "right"}>
                  <span className="skill-icon"><Icon weight="duotone" /></span>
                  <h2>{skill.title}</h2>
                  <p>{skill.note}</p>
                  <span className="skill-stem" aria-hidden="true" />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="reflection-section section" aria-labelledby="reflection-title">
        <StickerField variant="reflection" />
        <div className="shell reflection-layout">
          <Reveal className="reflection-cover" direction="left">
            <span className="notebook-rings" aria-hidden="true" />
            <p className="hand-label">Trang nhật ký cuối khóa</p>
            <h2 id="reflection-title">Điều mình mang theo</h2>
            <blockquote>“Công nghệ hữu ích nhất khi mình hiểu nó, kiểm tra nó và dùng nó đúng mục đích.”</blockquote>
            <Sticker kind="pencil" size="lg" className="reflection-pencil" />
          </Reveal>

          <div className="reflection-pages">
            <Reveal className="reflection-note note-progress" delay={0.06} direction="right">
              <span><CheckCircle weight="fill" /> Tiến bộ</span>
              <p>Mình đã đi từ thao tác tệp cơ bản đến tìm kiếm học thuật, hợp tác số, sáng tạo với AI và xây dựng nguyên tắc sử dụng AI có trách nhiệm.</p>
            </Reveal>
            <Reveal className="reflection-note note-lesson" delay={0.1} direction="right">
              <span>Bài học đáng nhớ</span>
              <p>Một prompt tốt không thay thế kiến thức nền. Nó giúp câu hỏi rõ hơn, còn chất lượng cuối cùng vẫn phụ thuộc vào khả năng kiểm chứng và chỉnh sửa.</p>
            </Reveal>
            <Reveal className="reflection-note note-challenge" delay={0.14} direction="right">
              <span>Khó khăn đã vượt qua</span>
              <p>Việc chọn lọc nhiều nguồn, phối hợp công cụ và đánh giá đầu ra AI đòi hỏi kiên nhẫn. Qua từng bài, mình biết chia nhỏ nhiệm vụ và kiểm tra có hệ thống hơn.</p>
            </Reveal>
            <Reveal className="reflection-note note-next" delay={0.18} direction="right">
              <span>Hướng tiếp theo</span>
              <p>Mình muốn tiếp tục ứng dụng công nghệ số vào học tiếng Hàn và thiết kế hoạt động giảng dạy, đồng thời cải thiện kỹ năng trích dẫn và xác minh nguồn.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="thanks-section section" aria-labelledby="thanks-title">
        <StickerField variant="thanks" />
        <div className="shell thanks-wrap">
          <Reveal className="letter" amount={0.35}>
            <span className="letter-flap" aria-hidden="true" />
            <Sticker kind="heart" size="md" floating className="letter-heart-one" />
            <Sticker kind="flower" size="sm" floating className="letter-heart-two" />
            <div className="letter-content">
              <p className="hand-label">Lời cảm ơn</p>
              <h2 id="thanks-title">Cảm ơn thầy cô</h2>
              <p>
                Em xin chân thành cảm ơn thầy cô đã hướng dẫn học phần {profile.courseName}. Qua sáu bài tập, em có cơ hội rèn luyện kỹ năng số từ những thao tác căn bản đến cách tiếp cận AI cẩn trọng, sáng tạo và có trách nhiệm.
              </p>
              <p>
                Những trải nghiệm trong học phần sẽ là hành trang hữu ích để em tiếp tục học tập và chuẩn bị cho công việc giảng dạy tiếng Hàn trong tương lai.
              </p>
              <div className="signature">
                <span>Trân trọng,</span>
                <strong>{profile.fullName}</strong>
                <small>MSSV {profile.studentId}</small>
              </div>
              <Link className="button primary" to="/assignments">Xem lại sáu bài tập <ArrowRight weight="bold" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

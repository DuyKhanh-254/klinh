import { useCallback, useState } from "react";
import { CheckCircle, DownloadSimple, Eye, FilePdf, ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AssignmentViewer } from "../components/AssignmentViewer";
import { Reveal } from "../components/Reveal";
import { Sticker, StickerField, type StickerKind } from "../components/Sticker";
import { assignments, type Assignment } from "../data/assignments";

const stickerForTheme: Record<Assignment["theme"], StickerKind> = {
  strawberry: "cherry",
  cherry: "cherry",
  flower: "flower",
  cloud: "cloud",
  star: "star",
  heart: "heart",
};

export function AssignmentsPage() {
  const [selected, setSelected] = useState<Assignment | null>(null);
  const closeViewer = useCallback(() => setSelected(null), []);

  return (
    <main className="assignments-page">
      <section className="assignment-album section" aria-labelledby="assignments-title">
        <StickerField variant="assignments" />
        <div className="shell">
          <div className="album-header">
            <div>
              <p className="eyebrow">Album học tập</p>
              <h1 id="assignments-title">Sáu bài, sáu bước trưởng thành</h1>
              <p>Mỗi trang giấy lưu một kỹ năng thật, một lần thử và một bài học đáng nhớ.</p>
            </div>
            <div className="album-stamp" aria-label="Đã hoàn thành sáu trên sáu bài">
              <CheckCircle weight="fill" />
              <strong>6/6</strong>
              <span>đã hoàn thành</span>
            </div>
            <Sticker kind="sparkle" size="lg" floating className="album-sparkle" />
          </div>

          <div className="assignment-spread">
            {assignments.map((assignment, index) => (
              <Reveal
                key={assignment.id}
                className={`assignment-entry theme-${assignment.theme}`}
                delay={(index % 2) * 0.06}
                amount={0.16}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="assignment-preview-wrap">
                  <span className="preview-tape" aria-hidden="true" />
                  <img
                    src={assignment.previewImage}
                    alt={`Trang đầu của ${assignment.originalFileName}`}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <Sticker kind={stickerForTheme[assignment.theme]} size={index % 3 === 0 ? "lg" : "md"} className="entry-sticker" />
                </div>

                <div className="assignment-copy">
                  <div className="assignment-topline">
                    <span className="assignment-number">{assignment.number}</span>
                    <span className="completion"><CheckCircle weight="fill" /> Hoàn thành</span>
                  </div>
                  <h2>{assignment.title}</h2>
                  <p className="assignment-subtitle">{assignment.subtitle}</p>
                  <p>{assignment.description}</p>

                  <div className="assignment-tools" aria-label="Công cụ và kỹ năng">
                    {[...assignment.tools.slice(0, 2), ...assignment.skills.slice(0, 1)].map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="file-note">
                    <FilePdf weight="duotone" />
                    <div>
                      <strong>{assignment.originalFileName}</strong>
                      <span>{assignment.fileType}, {assignment.fileSize}, {assignment.pages} trang</span>
                    </div>
                  </div>

                  <div className="assignment-actions">
                    <button className="button primary" type="button" onClick={() => setSelected(assignment)}>
                      <Eye weight="bold" /> Xem bài
                    </button>
                    <a className="button secondary" href={assignment.downloadPath} download={assignment.originalFileName}>
                      <DownloadSimple weight="bold" /> Tải xuống
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="album-ending" amount={0.4}>
            <Sticker kind="heart" size="lg" floating />
            <p>Sáu bài đã khép lại. Điều còn lại là cách mình mang những kỹ năng này vào hành trình tiếp theo.</p>
            <Link className="button primary" to="/summary">Đến trang tổng kết <ArrowRight weight="bold" /></Link>
          </Reveal>
        </div>
      </section>

      <AssignmentViewer assignment={selected} onClose={closeViewer} onSelect={setSelected} />
    </main>
  );
}
